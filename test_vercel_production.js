// Script para testar a API do Vercel diretamente
const API_URL = 'https://emoconnect-rho.vercel.app';

async function testarAPI() {
    console.log('🧪 Testando API do Vercel...\n');

    // 1. Testar health check
    console.log('1️⃣ Testando /api/health...');
    try {
        const healthRes = await fetch(`${API_URL}/api/health`);
        const healthData = await healthRes.json();
        console.log('✅ Status:', healthRes.status);
        console.log('📦 Response:', healthData);
    } catch (err) {
        console.error('❌ Erro:', err.message);
    }

    console.log('\n2️⃣ Testando /api/auth/login...');
    try {
        const loginRes = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'admin@emoconnect.com',
                senha: 'admin123'
            })
        });
        const loginData = await loginRes.json();
        console.log('✅ Status:', loginRes.status);
        console.log('📦 Response:', loginData);
    } catch (err) {
        console.error('❌ Erro:', err.message);
    }

    console.log('\n3️⃣ Testando /api/v1/auth/login...');
    try {
        const loginV1Res = await fetch(`${API_URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'admin@emoconnect.com',
                senha: 'admin123'
            })
        });
        const loginV1Data = await loginV1Res.json();
        console.log('✅ Status:', loginV1Res.status);
        console.log('📦 Response:', loginV1Data);
    } catch (err) {
        console.error('❌ Erro:', err.message);
    }
}

testarAPI();
