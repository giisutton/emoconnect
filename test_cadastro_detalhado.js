// Script para testar cadastro detalhado
// Execute: node test_cadastro_detalhado.js

const API_URL = 'https://emoconnect-bafs.vercel.app';

async function testarCadastroCompleto() {
    console.log('🧪 TESTE DETALHADO DE CADASTRO\n');
    console.log('═══════════════════════════════════════\n');

    // Dados do teste
    const testData = {
        nome: 'Giovana Teste',
        email: `teste${Date.now()}@gmail.com`,
        senha: 'teste123456',
        avatar: '😊'
    };

    console.log('📝 Dados que serão enviados:');
    console.log(JSON.stringify(testData, null, 2));
    console.log('\n');

    // Teste 1: Health Check
    console.log('1️⃣ Testando Health Check...');
    try {
        const healthResponse = await fetch(`${API_URL}/api/health`);
        console.log('   Status:', healthResponse.status);
        console.log('   Headers:', Object.fromEntries(healthResponse.headers));

        const contentType = healthResponse.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const healthData = await healthResponse.json();
            console.log('   ✅ Response:', healthData);
        } else {
            const text = await healthResponse.text();
            console.log('   ⚠️ Response não é JSON:', text.substring(0, 200));
        }
    } catch (error) {
        console.log('   ❌ Erro:', error.message);
    }
    console.log('\n');

    // Teste 2: Cadastro
    console.log('2️⃣ Testando Cadastro...');
    try {
        console.log(`   URL: ${API_URL}/api/v1/auth/cadastro`);
        console.log('   Method: POST');
        console.log('   Body:', JSON.stringify(testData));

        const cadastroResponse = await fetch(`${API_URL}/api/v1/auth/cadastro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });

        console.log('   Status:', cadastroResponse.status);
        console.log('   Status Text:', cadastroResponse.statusText);
        console.log('   Headers:', Object.fromEntries(cadastroResponse.headers));

        const contentType = cadastroResponse.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            const cadastroData = await cadastroResponse.json();
            console.log('\n   📦 Response JSON:');
            console.log(JSON.stringify(cadastroData, null, 2));

            if (cadastroResponse.ok) {
                console.log('\n   ✅ CADASTRO BEM-SUCEDIDO!');
                console.log('   Token:', cadastroData.data?.token?.substring(0, 30) + '...');
                console.log('   Usuário:', cadastroData.data?.user);
            } else {
                console.log('\n   ❌ CADASTRO FALHOU!');
                console.log('   Erro:', cadastroData.error || cadastroData.message);
            }
        } else {
            const text = await cadastroResponse.text();
            console.log('\n   ⚠️ Response não é JSON!');
            console.log('   Content-Type:', contentType);
            console.log('   Body:', text.substring(0, 500));
        }
    } catch (error) {
        console.log('   ❌ Erro na requisição:', error.message);
        console.log('   Stack:', error.stack);
    }
    console.log('\n');

    // Teste 3: Verificar se deu CORS
    console.log('3️⃣ Testando CORS...');
    try {
        const corsResponse = await fetch(`${API_URL}/api/v1/auth/cadastro`, {
            method: 'OPTIONS',
        });
        console.log('   Status:', corsResponse.status);
        console.log('   CORS Headers:', {
            'access-control-allow-origin': corsResponse.headers.get('access-control-allow-origin'),
            'access-control-allow-methods': corsResponse.headers.get('access-control-allow-methods'),
            'access-control-allow-headers': corsResponse.headers.get('access-control-allow-headers'),
        });
    } catch (error) {
        console.log('   ❌ Erro CORS:', error.message);
    }
    console.log('\n');

    console.log('🏁 Testes concluídos!');
}

testarCadastroCompleto();
