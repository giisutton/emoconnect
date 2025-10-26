import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Validar variáveis de ambiente obrigatórias
const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME"];
const missingEnvVars = requiredEnvVars.filter(
  (varName) => !process.env[varName]
);

if (missingEnvVars.length > 0) {
  console.warn(
    "⚠️ AVISO: Variáveis de ambiente de banco de dados não configuradas:"
  );
  missingEnvVars.forEach((varName) => console.warn(`   - ${varName}`));
  console.warn("\n⚠️ O sistema funcionará com funcionalidades limitadas (sem persistência)");
  // NÃO FAZ process.exit() - permite que o servidor inicie mesmo sem DB
}

// Configuração da conexão
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
};

// Criar pool de conexões
let pool;

export async function getConnection() {
  try {
    if (!pool) {
      pool = mysql.createPool(dbConfig);

      // Testar conexão inicial
      const connection = await pool.getConnection();
      connection.release();

      console.log("✅ Pool de conexões MySQL criado com sucesso");

      // Monitorar eventos de erro do pool
      pool.on("connection", (connection) => {
        console.log("🔗 Nova conexão estabelecida com o banco de dados");
      });

      pool.on("error", (err) => {
        console.error("❌ Erro no pool de conexões MySQL:", err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
          console.log("🔄 Tentando reconectar...");
          pool = null; // Força recriação do pool na próxima chamada
        }
      });
    }
    return pool;
  } catch (error) {
    console.error("❌ Erro ao criar pool de conexões:", error.message);

    // Informações detalhadas para debug
    if (error.code === "ECONNREFUSED") {
      console.error(
        "\n💡 Dica: Verifique se o MySQL está rodando e as credenciais estão corretas"
      );
    } else if (error.code === "ER_ACCESS_DENIED_ERROR") {
      console.error("\n💡 Dica: Usuário ou senha do MySQL incorretos");
    } else if (error.code === "ER_BAD_DB_ERROR") {
      console.error(
        "\n💡 Dica: Banco de dados não existe. Execute o script de inicialização"
      );
    }

    throw error;
  }
}

// Testar conexão
export async function testConnection() {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query("SELECT 1 + 1 AS result");
    console.log("✅ Conexão com MySQL bem-sucedida:", rows[0]);
    return true;
  } catch (error) {
    console.error("❌ Erro ao testar conexão:", error.message);
    return false;
  }
}

// Fechar conexões
export async function closeConnection() {
  try {
    if (pool) {
      await pool.end();
      console.log("✅ Conexões MySQL fechadas");
    }
  } catch (error) {
    console.error("❌ Erro ao fechar conexões:", error.message);
  }
}

export default { getConnection, testConnection, closeConnection };
