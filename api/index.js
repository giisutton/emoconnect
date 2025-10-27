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
            body: req.method === 'POST' ? req.body : undefined
        });

        const expressApp = await getApp();

        // Garantir que a resposta tem formato JSON adequado
        const originalJson = res.json;
        res.json = function (data) {
            console.log('📤 Response:', data);
            return originalJson.call(this, data);
        };

        return expressApp(req, res);
    } catch (error) {
        console.error('❌ Error in serverless function:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
