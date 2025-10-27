// Script para verificar se um email já existe no banco
// Execute: node verificar_email.js

const API_URL = 'https://emoconnect-bafs.vercel.app';

async function verificarEmail(email) {
    console.log(`🔍 Verificando email: ${email}\n`);

    try {
        const response = await fetch(`${API_URL}/api/v1/auth/verificar-email/${encodeURIComponent(email)}`);
        const data = await response.json();

        if (data.exists) {
            console.log('❌ Email JÁ CADASTRADO no banco de dados!');
            console.log('\n💡 Opções:');
            console.log('   1. Use outro email para cadastrar');
            console.log('   2. Ou faça LOGIN em vez de cadastro');
            console.log('   3. Ou delete o usuário no PhpMyAdmin');
        } else {
            console.log('✅ Email DISPONÍVEL - pode cadastrar!');
        }
    } catch (error) {
        console.log('❌ Erro ao verificar:', error.message);
    }
}

// Testar o email que você estava tentando
verificarEmail('gi@gmail.com');
