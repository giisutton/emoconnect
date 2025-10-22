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
        const expressApp = await getApp();
        return expressApp(req, res);
    } catch (error) {
        console.error('Error in serverless function:', error);
        return res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
}
