# ⚡ Deploy Rápido no Vercel

## 🚀 Passo a Passo (5 minutos)

### 1️⃣ Acesse o Vercel
👉 https://vercel.com
- Faça login com GitHub

### 2️⃣ Novo Projeto
- Clique em **"Add New"** → **"Project"**
- Selecione: **giisutton/emoconnect**

### 3️⃣ Configuração
```
Framework Preset: Other
Build Command: npm run vercel-build
Output Directory: frontend/dist
Install Command: npm install
Root Directory: ./
```

### 4️⃣ Variáveis de Ambiente
Clique em **"Environment Variables"** e adicione:

```env
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
```

⚠️ **IMPORTANTE:** Depois do deploy, volte e adicione a URL gerada:
```env
ALLOWED_ORIGINS=https://seu-projeto.vercel.app
```

### 5️⃣ Deploy
- Clique em **"Deploy"**
- Aguarde 2-3 minutos
- ✅ Pronto!

---

## 🔧 Pós-Deploy

### Atualizar ALLOWED_ORIGINS
1. Copie a URL gerada (ex: `https://emoconnect-xyz.vercel.app`)
2. Vá em **Settings** → **Environment Variables**
3. Edite `ALLOWED_ORIGINS` e adicione a URL
4. Clique em **Redeploy**

### Testar
- Acesse: `https://seu-projeto.vercel.app`
- Teste login
- Teste chat com IA
- Verifique seleção de emoções

---

## 🔄 Deploys Automáticos

Agora, sempre que você fizer `git push`, o Vercel atualiza automaticamente! 🎉

---

## 📚 Mais Detalhes
Leia: `DEPLOY_VERCEL.md` para configuração avançada

---

✨ **Seu EmoConnect está pronto para o mundo!** 🌍
