# 🚨 PROBLEMA IDENTIFICADO: Backend vs Frontend

## ❌ O Problema

O Vercel está fazendo deploy apenas do **frontend** (React), mas o **backend** (Node.js/Express) não está rodando!

Por isso o login não funciona - as APIs não estão disponíveis.

---

## ✅ SOLUÇÃO: 3 Opções

### 🎯 OPÇÃO 1: Deploy Separado (RECOMENDADO)

**Frontend no Vercel + Backend em outro lugar**

#### Backend - Deploy no Render (Grátis)

1. Acesse: https://render.com
2. Faça login com GitHub
3. Clique em **"New +"** → **"Web Service"**
4. Conecte o repositório **giisutton/emoconnect**
5. Configure:
   ```
   Name: emoconnect-api
   Root Directory: backend
   Build Command: npm install
   Start Command: node index.js
   ```
6. Adicione Environment Variables (mesmas do Vercel)
7. Clique em **"Create Web Service"**
8. Copie a URL gerada (ex: `https://emoconnect-api.onrender.com`)

#### Atualizar Frontend

1. No Vercel, vá em **Settings** → **Environment Variables**
2. Adicione:
   ```
   VITE_API_URL=https://emoconnect-api.onrender.com/api/v1
   ```
3. Redeploy o frontend

---

### 🎯 OPÇÃO 2: Tudo no Render (Mais Simples)

**Frontend + Backend no mesmo lugar**

1. Acesse: https://render.com
2. Crie um **Static Site** para o frontend
3. Crie um **Web Service** para o backend
4. Configure CORS no backend com a URL do frontend

---

### 🎯 OPÇÃO 3: Serverless Functions no Vercel

Converter o backend Express para Vercel Serverless Functions (mais complexo).

---

## 🚀 RECOMENDAÇÃO: Usar Opção 1

É a forma mais simples e confiável. Render é gratuito e perfeito para Node.js.

### Passo a Passo Detalhado:

#### 1. Deploy do Backend no Render

```
1. https://render.com → Login com GitHub
2. New + → Web Service
3. Repositório: giisutton/emoconnect
4. Name: emoconnect-backend
5. Root Directory: backend
6. Environment: Node
7. Build Command: npm install
8. Start Command: node index.js
```

**Environment Variables no Render:**
```
PORT=3000
NODE_ENV=production
DB_HOST=mysql-giovana.alwaysdata.net
DB_USER=giovana
DB_PASSWORD=gi170807
DB_NAME=giovana_tcc
JWT_SECRET=8f9d2a1e5c7b4d3a9e6f1c8d2b5a7e4c9f1d3a6e8c2b5d7a4e1f9c6d8b3a5e2c7
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=AIzaSyAUq8qEBrCPMKcKiUxC08NJsLWR7D-3MaI
LOG_LEVEL=info
ALLOWED_ORIGINS=https://seu-frontend.vercel.app
```

⏰ **Importante:** Render demora ~5 minutos no primeiro deploy.

#### 2. Atualizar Frontend no Vercel

Depois que o backend estiver no ar:

1. Copie a URL do Render (ex: `https://emoconnect-backend.onrender.com`)
2. No Vercel → Settings → Environment Variables
3. Adicione ou edite:
   ```
   VITE_API_URL=https://emoconnect-backend.onrender.com/api/v1
   ```
4. Vá em Deployments → Redeploy

#### 3. Atualizar CORS no Backend

No Render → Environment Variables, certifique-se que `ALLOWED_ORIGINS` tem a URL do Vercel:
```
ALLOWED_ORIGINS=https://emoconnect-giisutton.vercel.app,https://emoconnect.vercel.app
```

---

## 📝 Checklist

- [ ] Backend deployed no Render
- [ ] URL do backend copiada
- [ ] VITE_API_URL atualizado no Vercel
- [ ] ALLOWED_ORIGINS atualizado no Render
- [ ] Frontend redeployed
- [ ] Teste de login funcionando
- [ ] Teste de chat funcionando

---

## 🆘 Quer que eu te ajude?

Me diga qual opção você quer seguir e eu te guio passo a passo! 🚀

**RECOMENDO: Opção 1 (Render para backend)** - É grátis, simples e funciona perfeitamente!
