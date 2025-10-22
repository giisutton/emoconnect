// API Handler para Vercel (Serverless Functions)
import('../index.js').then(({ default: app }) => {
    module.exports = app;
}).catch(err => {
    console.error('Error loading app:', err);
});
