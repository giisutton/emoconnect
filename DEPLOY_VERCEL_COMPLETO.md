# 🚀 Deploy Completo no Vercel (Tudo em Um Lugar)

## 🎯 Objetivo

Fazer deploy do **Frontend + Backend** no Vercel usando Serverless Functions.

---

## 📋 Estrutura

```
Vercel Deploy:
├── Frontend (React + Vite) → Static Site
└── Backend (Express) → Serverless Functions em /api
```

---

## ⚙️ Configuração Necessária

### 1️⃣ Criar Pasta API na Raiz

Vou converter o backend Express em Serverless Functions do Vercel.

### 2️⃣ Configurar vercel.json

```json
{
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/dist",
  "installCommand": "npm install --prefix frontend && npm install --prefix backend",
  "rewrites": [
    { "source": "/api/v1/(.*)", "destination": "/api/index.js" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 3️⃣ Criar Handler Serverless

Arquivo: `api/index.js` (será criado automaticamente)

---

## 🚀 Passo a Passo

### Opção A: Via Interface Web

1. **Acesse:** https://vercel.com
2. **Selecione** seu projeto `emoconnect`
3. **Settings** → **General**
4. **Build & Development Settings:**
   ```
   Framework Preset: Other
   Build Command: cd frontend && npm install && npm run build
   Output Directory: frontend/dist
   Install Command: npm install --prefix frontend && npm install --prefix backend
   ```

5. **Environment Variables** (adicione todas):
   ```
   NODE_ENV=production
   DB_HOST=mysql-giovana.alwaysdata.net
   DB_USER=giovana
   DB_PASSWORD=gi170807
   DB_NAME=giovana_tcc
   JWT_SECRET=8f9d2a1e5c7b4d3a9e6f1c8d2b5a7e4c9f1d3a6e8c2b5d7a4e1f9c6d8b3a5e2c7
   JWT_EXPIRES_IN=7d
   GEMINI_API_KEY=AIzaSyAUq8qEBrCPMKcKiUxC08NJsLWR7D-3MaI
   LOG_LEVEL=info
   ALLOWED_ORIGINS=https://seu-projeto.vercel.app
   ```

6. **Deployments** → **Redeploy**

---

### Opção B: Vou Configurar Tudo Para Você! 🎉

Vou criar os arquivos necessários agora mesmo para funcionar no Vercel.

---

## ⏰ Tempo Estimado

- Configuração: 5 minutos
- Deploy: 2-3 minutos
- **Total: ~8 minutos**

---

## ✅ Vantagens

- ✅ Tudo em um único lugar (Vercel)
- ✅ Uma única URL
- ✅ Deploy mais simples
- ✅ Não precisa gerenciar 2 serviços

## ⚠️ Limitações

- ⚠️ Serverless functions têm timeout de 10s (plano grátis)
- ⚠️ Cada request "acorda" a função (pode ter latência)
- ⚠️ Mais complexo de debugar

---

## 🤔 Minha Recomendação

**Para começar:** Render (backend) + Vercel (frontend)
- Mais simples
- Melhor para desenvolvimento
- Logs mais fáceis de ver

**Para produção avançada:** Tudo no Vercel
- Mais profissional
- Uma única URL
- Melhor performance com CDN

---

## 💬 O Que Você Prefere?

**Opção 1:** Eu configuro tudo no Vercel agora (serverless)
**Opção 2:** Seguimos com Render + Vercel (mais simples)

Me diz qual você prefere e eu faço acontecer! 🚀
