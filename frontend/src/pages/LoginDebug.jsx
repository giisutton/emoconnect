import { useState } from 'react';
import api from '../services/api';

const LoginDebug = () => {
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const testDirectFetch = async () => {
        setLoading(true);
        setResult('Testando com fetch direto...\n');

        try {
            const response = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'admin@emoconnect.com',
                    senha: 'admin123'
                })
            });

            const data = await response.json();
            setResult(prev => prev + '\n✅ Sucesso com fetch!\n' + JSON.stringify(data, null, 2));
        } catch (error) {
            setResult(prev => prev + '\n❌ Erro com fetch:\n' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const testAxios = async () => {
        setLoading(true);
        setResult('Testando com axios (api.js)...\n');

        try {
            const response = await api.post('/auth/login', {
                email: 'admin@emoconnect.com',
                senha: 'admin123'
            });

            setResult(prev => prev + '\n✅ Sucesso com axios!\n' + JSON.stringify(response.data, null, 2));
        } catch (error) {
            setResult(prev => prev + '\n❌ Erro com axios:\n' +
                'Status: ' + (error.response?.status || 'N/A') + '\n' +
                'Message: ' + error.message + '\n' +
                'Response: ' + JSON.stringify(error.response?.data, null, 2)
            );
        } finally {
            setLoading(false);
        }
    };

    const testHealth = async () => {
        setLoading(true);
        setResult('Testando endpoint /api/health...\n');

        try {
            const response = await fetch('/api/health');
            const data = await response.json();
            setResult(prev => prev + '\n✅ API está acessível!\n' + JSON.stringify(data, null, 2));
        } catch (error) {
            setResult(prev => prev + '\n❌ API inacessível:\n' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const checkConfig = () => {
        const config = {
            'API Base URL': api.defaults.baseURL,
            'VITE_API_URL': import.meta.env.VITE_API_URL,
            'Current URL': window.location.href,
            'Token no localStorage': localStorage.getItem('emoconnect_token') ? 'Sim' : 'Não'
        };

        setResult('⚙️ Configuração:\n' + JSON.stringify(config, null, 2));
    };

    return (
        <div style={{
            padding: '20px',
            background: '#1a1a1a',
            color: '#fff',
            minHeight: '100vh',
            fontFamily: 'monospace'
        }}>
            <h1>🔍 Debug de Login - EmoConnect</h1>

            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                    onClick={checkConfig}
                    disabled={loading}
                    style={{ padding: '10px 20px', background: '#4a5568', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                    Verificar Configuração
                </button>

                <button
                    onClick={testHealth}
                    disabled={loading}
                    style={{ padding: '10px 20px', background: '#3182ce', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                    Testar /api/health
                </button>

                <button
                    onClick={testDirectFetch}
                    disabled={loading}
                    style={{ padding: '10px 20px', background: '#38a169', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                    Testar Login (Fetch)
                </button>

                <button
                    onClick={testAxios}
                    disabled={loading}
                    style={{ padding: '10px 20px', background: '#d69e2e', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                    Testar Login (Axios)
                </button>

                <button
                    onClick={() => setResult('')}
                    style={{ padding: '10px 20px', background: '#742a2a', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                    Limpar
                </button>
            </div>

            <pre style={{
                background: '#2d3748',
                padding: '20px',
                borderRadius: '8px',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                fontSize: '14px'
            }}>
                {loading ? '⏳ Executando teste...\n' : ''}
                {result || 'Clique em um botão para testar'}
            </pre>

            <div style={{ marginTop: '20px', padding: '15px', background: '#2c5282', borderRadius: '8px' }}>
                <h3>📝 Instruções:</h3>
                <ol style={{ lineHeight: '1.8' }}>
                    <li>Clique em "Verificar Configuração" para ver as URLs configuradas</li>
                    <li>Clique em "Testar /api/health" para verificar se o backend está acessível</li>
                    <li>Clique em "Testar Login (Fetch)" para testar com fetch nativo</li>
                    <li>Clique em "Testar Login (Axios)" para testar com a configuração do projeto</li>
                    <li>Abra o Console (F12) e veja se há erros adicionais</li>
                    <li>Abra a aba Network (F12) e veja as requisições HTTP</li>
                </ol>
            </div>
        </div>
    );
};

export default LoginDebug;
