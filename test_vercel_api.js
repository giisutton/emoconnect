// Script para testar a API no Vercel
// Execute: node test_vercel_api.js

const API_URL = 'https://emoconnect-bafs.vercel.app';

async function testAPI() {
    console.log('🧪 Testando API no Vercel...\n');

    // 1. Testar Health Check
    console.log('1️⃣ Testando Health Check...');
    try {
        const healthResponse = await fetch(`${API_URL}/api/health`);
        const healthData = await healthResponse.json();
        console.log('✅ Health Check:', healthData);
    } catch (error) {
        console.log('❌ Health Check falhou:', error.message);
    }

    console.log('\n');

    // 2. Testar Cadastro
    console.log('2️⃣ Testando Cadastro...');
    const testUser = {
        nome: 'Usuário Teste',
        email: `teste${Date.now()}@emoconnect.com`,
        senha: 'teste123456'
    };

    try {
        const cadastroResponse = await fetch(`${API_URL}/api/v1/auth/cadastro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testUser)
        });

        const cadastroData = await cadastroResponse.json();

        if (cadastroResponse.ok) {
            console.log('✅ Cadastro bem-sucedido!');
            console.log('   Token:', cadastroData.data.token.substring(0, 20) + '...');
            console.log('   Usuário:', cadastroData.data.user);

            // 3. Testar Login com o usuário criado
            console.log('\n3️⃣ Testando Login...');
            const loginResponse = await fetch(`${API_URL}/api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: testUser.email,
                    senha: testUser.senha
                })
            });

            const loginData = await loginResponse.json();

            if (loginResponse.ok) {
                console.log('✅ Login bem-sucedido!');
                console.log('   Token:', loginData.data.token.substring(0, 20) + '...');
            } else {
                console.log('❌ Login falhou:', loginData);
            }

        } else {
            console.log('❌ Cadastro falhou:', cadastroData);
        }

    } catch (error) {
        console.log('❌ Erro ao testar:', error.message);
        console.log('   Detalhes:', error);
    }

    console.log('\n');
    console.log('🏁 Testes concluídos!');
}

// Executar testes
testAPI();
