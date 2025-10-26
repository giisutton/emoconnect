// Netlify Function wrapper para Express backend
const serverless = require('serverless-http');

let handler;

async function getHandler() {
    if (!handler) {
        const app = await import('../../backend/index.js');
        handler = serverless(app.default);
    }
    return handler;
}

exports.handler = async (event, context) => {
    const appHandler = await getHandler();
    return appHandler(event, context);
};
