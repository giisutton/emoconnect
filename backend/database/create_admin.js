import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

async function createAdminUser() {
    try {
        console.log('🔌 Conectando ao banco de dados...');

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        console.log('✅ Conectado!');

        // Criar senha hash
        const senha = 'admin123';
        const senhaHash = await bcrypt.hash(senha, 10);

        // Inserir usuário admin
        const [result] = await connection.query(
            `INSERT INTO usuarios (nome, email, senha_hash, role, ativo) 
       VALUES (?, ?, ?, ?, TRUE)
       ON DUPLICATE KEY UPDATE senha_hash = ?`,
            ['Administrador', 'admin@emoconnect.com', senhaHash, 'admin', senhaHash]
        );

        console.log('✅ Usuário admin criado/atualizado!');
        console.log('📧 Email: admin@emoconnect.com');
        console.log('🔑 Senha: admin123');

        await connection.end();
    } catch (error) {
        console.error('❌ Erro:', error);
    }
}

createAdminUser();
