// Script para gerar hash de senha para usar no banco de dados
// Execute: node gerar_senha_hash.js

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

async function gerarHash() {
    console.log('🔐 Gerador de Hash de Senha\n');

    // Senhas de exemplo para gerar
    const senhas = [
        'admin123',
        'teste123',
        'Giisutton28@',
        '123456'
    ];

    console.log('Gerando hashes...\n');

    for (const senha of senhas) {
        const hash = await bcrypt.hash(senha, SALT_ROUNDS);
        console.log(`Senha: "${senha}"`);
        console.log(`Hash:  ${hash}`);
        console.log('');
    }

    console.log('\n📝 Para usar no SQL:');
    console.log('\nINSERT INTO usuarios (nome, email, senha_hash, role, ativo)');
    console.log("VALUES ('Admin', 'admin@emoconnect.com', 'COLE_O_HASH_AQUI', 'admin', TRUE);");
}

gerarHash().catch(console.error);
