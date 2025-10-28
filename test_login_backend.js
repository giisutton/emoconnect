// Teste direto da rota de login via fetch
const url = 'http://localhost:3000/api/v1/auth/login';
const data = {
    email: 'admin@emoconnect.com',
    senha: 'admin123'
};

console.log('🧪 Testando rota de login...\n');
console.log('URL:', url);
console.log('Dados:', JSON.stringify(data, null, 2));
console.log('\n');

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
    .then(async response => {
        console.log('📊 Resposta recebida:');
        console.log('Status:', response.status, response.statusText);
        console.log('Headers:', Object.fromEntries(response.headers.entries()));
        console.log('\n');

        const text = await response.text();
        console.log('Body (texto):', text);
        console.log('\n');

        try {
            const json = JSON.parse(text);
            console.log('Body (JSON formatado):');
            console.log(JSON.stringify(json, null, 2));

            if (json.success) {
                console.log('\n✅ LOGIN BEM-SUCEDIDO!');
                console.log('Token:', json.data.token.substring(0, 50) + '...');
                console.log('Usuário:', json.data.user.nome);
            } else {
                console.log('\n❌ LOGIN FALHOU!');
                console.log('Erro:', json.error || json.message);
            }
        } catch (e) {
            console.log('⚠️ Resposta não é JSON válido');
        }
    })
    .catch(error => {
        console.error('❌ ERRO NA REQUISIÇÃO:');
        console.error(error.message);
        console.error('\n💡 Certifique-se que o backend está rodando em http://localhost:3000');
    });
