// Teste de requisição do frontend (simulando ambiente)
import api from './frontend/src/services/api.js';

console.log('🧪 Testando requisição do frontend ao backend\n');
console.log('API Base URL:', api.defaults.baseURL);
console.log('\n');

async function testLogin() {
    try {
        console.log('📤 Enviando requisição POST /auth/login...');
        const response = await api.post('/auth/login', {
            email: 'admin@emoconnect.com',
            senha: 'admin123'
        });

        console.log('\n✅ Sucesso!');
        console.log('Status:', response.status);
        console.log('Data:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log('\n❌ Erro!');
        console.log('Status:', error.response?.status);
        console.log('Status Text:', error.response?.statusText);
        console.log('Data:', JSON.stringify(error.response?.data, null, 2));
        console.log('Message:', error.message);
        console.log('\nStack:', error.stack);
    }
}

testLogin();
