// Script para testar conexão e credenciais do banco de dados
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

async function testDatabase() {
    console.log('🔍 TESTANDO BANCO DE DADOS E LOGIN\n');
    console.log('═══════════════════════════════════════\n');

    const dbConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    };

    console.log('📋 Configuração do Banco:');
    console.log('  Host:', dbConfig.host);
    console.log('  User:', dbConfig.user);
    console.log('  Database:', dbConfig.database);
    console.log('  Password:', dbConfig.password ? '***' : '(vazio)');
    console.log('\n');

    let connection;

    try {
        // Teste 1: Conectar ao banco
        console.log('1️⃣ Testando conexão...');
        connection = await mysql.createConnection(dbConfig);
        console.log('   ✅ Conexão estabelecida com sucesso!\n');

        // Teste 2: Listar todos os usuários
        console.log('2️⃣ Listando usuários cadastrados...');
        const [users] = await connection.query('SELECT id, nome, email, role, ativo FROM usuarios');

        if (users.length === 0) {
            console.log('   ⚠️ Nenhum usuário encontrado no banco!\n');
        } else {
            console.log(`   ✅ Encontrados ${users.length} usuário(s):\n`);
            users.forEach(user => {
                console.log(`      ID: ${user.id}`);
                console.log(`      Nome: ${user.nome}`);
                console.log(`      Email: ${user.email}`);
                console.log(`      Role: ${user.role}`);
                console.log(`      Ativo: ${user.ativo ? 'Sim' : 'Não'}`);
                console.log('      ---');
            });
        }
        console.log('\n');

        // Teste 3: Verificar credenciais admin@emoconnect.com
        console.log('3️⃣ Testando credenciais admin@emoconnect.com...');
        const email = 'admin@emoconnect.com';
        const senhaParaTestar = 'admin123';

        const [adminUsers] = await connection.query(
            'SELECT id, nome, email, senha_hash, role, ativo FROM usuarios WHERE email = ?',
            [email]
        );

        if (adminUsers.length === 0) {
            console.log('   ❌ Usuário admin@emoconnect.com NÃO ENCONTRADO!\n');
            console.log('   💡 Execute o script de criação do admin:\n');
            console.log('      cd backend/database');
            console.log('      node create_admin.js\n');
        } else {
            const adminUser = adminUsers[0];
            console.log('   ✅ Usuário encontrado:');
            console.log(`      ID: ${adminUser.id}`);
            console.log(`      Nome: ${adminUser.nome}`);
            console.log(`      Email: ${adminUser.email}`);
            console.log(`      Role: ${adminUser.role}`);
            console.log(`      Ativo: ${adminUser.ativo ? 'Sim' : 'Não'}`);
            console.log(`      Hash: ${adminUser.senha_hash.substring(0, 30)}...`);
            console.log('\n');

            // Verificar senha
            console.log('4️⃣ Testando senha "admin123"...');
            const senhaValida = await bcrypt.compare(senhaParaTestar, adminUser.senha_hash);

            if (senhaValida) {
                console.log('   ✅ SENHA CORRETA! Login deve funcionar.\n');
            } else {
                console.log('   ❌ SENHA INCORRETA!\n');
                console.log('   💡 A senha no banco NÃO corresponde a "admin123"');
                console.log('   💡 Execute o script para resetar a senha:\n');
                console.log('      cd backend/database');
                console.log('      node create_admin.js\n');
            }

            // Testar outras senhas comuns
            console.log('5️⃣ Testando senhas alternativas...');
            const senhasParaTestar = ['Admin@2025', 'admin', 'Admin123', 'emoconnect'];

            for (const senha of senhasParaTestar) {
                const match = await bcrypt.compare(senha, adminUser.senha_hash);
                if (match) {
                    console.log(`   ✅ Senha correta encontrada: "${senha}"\n`);
                    break;
                }
            }
        }

        // Teste 4: Verificar estrutura da tabela
        console.log('6️⃣ Verificando estrutura da tabela usuarios...');
        const [columns] = await connection.query('DESCRIBE usuarios');
        console.log('   ✅ Colunas da tabela:');
        columns.forEach(col => {
            console.log(`      - ${col.Field} (${col.Type})`);
        });
        console.log('\n');

    } catch (error) {
        console.error('❌ ERRO:', error.message);

        if (error.code === 'ECONNREFUSED') {
            console.error('\n💡 Dica: O servidor MySQL não está acessível.');
            console.error('   Verifique se o host e a porta estão corretos.\n');
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('\n💡 Dica: Usuário ou senha do MySQL incorretos.');
            console.error('   Verifique as credenciais no arquivo .env\n');
        } else if (error.code === 'ETIMEDOUT') {
            console.error('\n💡 Dica: Timeout ao conectar ao servidor MySQL.');
            console.error('   O servidor pode estar bloqueado por firewall ou indisponível.\n');
        }
    } finally {
        if (connection) {
            await connection.end();
            console.log('🔌 Conexão fechada.\n');
        }
    }

    console.log('🏁 Testes concluídos!');
}

testDatabase();
