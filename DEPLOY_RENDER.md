# 🚀 Deploy do Backend no Render (5 minutos)

## ✨ Por que Render?
- ✅ 100% Gratuito
- ✅ Perfeito para Node.js/Express
- ✅ Deploy automático do GitHub
- ✅ SSL grátis
- ✅ Logs em tempo real

---

## 📋 Passo a Passo

### 1️⃣ Criar Conta no Render

👉 https://render.com

- Clique em **"Get Started"**
- Faça login com **GitHub**
- Autorize o Render a acessar seus repositórios

---

### 2️⃣ Criar Web Service

1. No dashboard, clique em **"New +"**
2. Selecione **"Web Service"**
3. Conecte seu repositório: **giisutton/emoconnect**
   - Se não aparecer, clique em "Configure account" e autorize

---

### 3️⃣ Configurar o Service

Preencha os campos:

```
Name: emoconnect-backend
Region: Oregon (US West) [ou o mais próximo]
Branch: main
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: node index.js
```

**Instance Type:** Free (já selecionado por padrão)

---

### 4️⃣ Environment Variables

Role até **"Environment Variables"** e clique em **"Add Environment Variable"**

Adicione **UMA POR UMA** (clique em "Add Environment Variable" entre cada):

```
PORT = 10000
NODE_ENV = production
DB_HOST = mysql-giovana.alwaysdata.net
DB_USER = giovana
DB_PASSWORD = gi170807
DB_NAME = giovana_tcc
JWT_SECRET = 8f9d2a1e5c7b4d3a9e6f1c8d2b5a7e4c9f1d3a6e8c2b5d7a4e1f9c6d8b3a5e2c7
JWT_EXPIRES_IN = 7d
GEMINI_API_KEY = AIzaSyAUq8qEBrCPMKcKiUxC08NJsLWR7D-3MaI
LOG_LEVEL = info
```

⚠️ **Não adicione ALLOWED_ORIGINS ainda** (faremos depois)

---

### 5️⃣ Deploy!

1. Clique no botão **"Create Web Service"** (no final da página)
2. Aguarde o deploy (leva ~3-5 minutos)
3. Acompanhe os logs em tempo real
4. Quando aparecer **"Your service is live"** → ✅ Pronto!

---

### 6️⃣ Copiar URL do Backend

No topo da página você verá algo como:

```
https://emoconnect-backend.onrender.com
```

📋 **COPIE ESSA URL!** Vamos usar no próximo passo.

---

### 7️⃣ Adicionar CORS

Agora que temos a URL do frontend no Vercel, vamos permitir as requisições:

1. Vá para **Environment** (menu lateral)
2. Clique em **"Add Environment Variable"**
3. Adicione:

```
Key: ALLOWED_ORIGINS
Value: https://emoconnect-giisutton.vercel.app,https://emoconnect.vercel.app
```

⚠️ **Substitua pela SUA URL do Vercel!**

4. Clique em **"Save Changes"**
5. O serviço vai fazer redeploy automaticamente (~1 minuto)

---

### 8️⃣ Atualizar Frontend no Vercel

Agora vamos conectar o frontend ao backend:

1. Acesse https://vercel.com
2. Vá no seu projeto **emoconnect**
3. Clique em **"Settings"**
4. Vá em **"Environment Variables"**
5. Adicione uma nova variável:

```
Key: VITE_API_URL
Value: https://emoconnect-backend.onrender.com/api/v1
```

⚠️ **Use a URL que você copiou no passo 6 + /api/v1**

6. Selecione **Production, Preview, Development** (todos)
7. Clique em **"Save"**
8. Vá em **"Deployments"**
9. Clique nos 3 pontinhos do último deploy → **"Redeploy"**
10. Marque **"Use existing Build Cache"** → **"Redeploy"**

---

## ✅ Verificar se Funcionou

### Teste 1: Backend

Abra no navegador:
```
https://emoconnect-backend.onrender.com/api/health
```

Deve retornar:
```json
{
  "status": "ok",
  "timestamp": "...",
  "uptime": 123,
  "version": "1.0.0",
  "environment": "production"
}
```

### Teste 2: Frontend

1. Abra seu site no Vercel: `https://emoconnect-giisutton.vercel.app`
2. Tente fazer login
3. Se funcionar → ✅ **SUCESSO!**

---

## 🐛 Troubleshooting

### Erro: "Application failed to respond"
- Espere mais um pouco, o primeiro deploy é lento
- Verifique os logs no Render
- Confirme que `PORT=10000` está nas env vars

### Erro: "CORS"
- Verifique que `ALLOWED_ORIGINS` tem a URL do Vercel correta
- Certifique-se que não tem espaços nas URLs
- Use vírgula para separar múltiplas URLs

### Erro: "Database connection failed"
- Verifique as credenciais do MySQL
- Teste conexão com o banco manualmente

### Login ainda não funciona
1. Abra o DevTools (F12)
2. Vá na aba **Console**
3. Tente fazer login
4. Veja qual erro aparece
5. Me avise! 🙋‍♀️

---

## 📊 Monitoramento

### Ver Logs em Tempo Real
1. No Render, vá em **"Logs"** (menu lateral)
2. Acompanhe as requisições

### Métricas
1. No Render, vá em **"Metrics"**
2. Veja CPU, memória e requests

---

## 🔄 Deploy Automático

A partir de agora:

✨ **Toda vez que você fizer `git push`:**
- O Render atualiza o backend automaticamente
- O Vercel atualiza o frontend automaticamente

---

## 💡 Dicas

### Render Free Tier
- O serviço "dorme" após 15 minutos sem uso
- A primeira requisição após o sono demora ~30s
- É normal e não custa nada! 😊

### Manter Ativo
Se quiser que fique sempre acordado (opcional):
1. Use um serviço como UptimeRobot
2. Faça ping a cada 10 minutos no `/api/health`

---

## 🎉 Pronto!

Seu EmoConnect está 100% funcional:
- ✅ Frontend no Vercel
- ✅ Backend no Render
- ✅ Banco de dados funcionando
- ✅ Deploy automático configurado

---

**Agora é só usar! 🚀💚**
