// Serverless Function Handler para Vercel
// Wrapper para converter Express app em Vercel Function

let app;

async function getApp() {
    if (!app) {
        const module = await import('../backend/index.js');
        app = module.default;
    }
    return app;
}

export default async function handler(req, res) {
    try {
        // Log da requisição para debug
        console.log('📥 Request:', {
            method: req.method,
            url: req.url,
            path: req.path,
            headers: req.headers,
            body: req.method === 'POST' ? req.body : undefined
        });

        const expressApp = await getApp();

        // Garantir que a resposta tem formato JSON adequado
        const originalJson = res.json;
        res.json = function (data) {
            console.log('📤 Response:', data);
            return originalJson.call(this, data);
        };

        // Adicionar headers CORS manualmente como fallback
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        // Tratar OPTIONS (preflight)
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }

        return expressApp(req, res);
    } catch (error) {
        console.error('❌ Error in serverless function:', error);
        console.error('Stack:', error.stack);
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
