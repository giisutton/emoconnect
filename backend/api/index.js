// API Handler para Vercel (Serverless)
// Como o index.js usa ES modules, precisamos importar dinamicamente
module.exports = async (req, res) => {
    const { default: app } = await import('../index.js');
    return app(req, res);
};
