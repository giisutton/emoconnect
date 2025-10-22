# ⚡ CORREÇÃO: Deploy no Vercel

## 🎯 Configuração Corrigida

Houve um erro na primeira tentativa. Agora está corrigido!

### 📝 No Vercel, configure assim:

```
Framework Preset: Other
Build Command: cd frontend && npm install && npm run build
Output Directory: frontend/dist
Install Command: npm install --prefix frontend
Root Directory: ./
Node Version: 20.x
```

### 🔧 Variáveis de Ambiente (COPIE TODAS)

Vá em **Environment Variables** e adicione uma por uma:

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
```

### 🚀 Passo a Passo

1. **No Vercel**, clique em **"Redeploy"**
2. OU delete o projeto e crie novamente com as configs acima
3. Aguarde o build
4. ✅ Sucesso!

### ⚠️ IMPORTANTE: Depois do Deploy

Quando o deploy terminar:

1. Copie a URL gerada (ex: `https://emoconnect-xyz.vercel.app`)
2. Vá em **Settings** → **Environment Variables**
3. Adicione uma nova variável:
   ```
   ALLOWED_ORIGINS=https://emoconnect-xyz.vercel.app
   ```
4. Clique em **"Redeploy"** novamente

---

## 🔄 Opção Alternativa: Via CLI

Se preferir usar a linha de comando:

```powershell
cd c:\Users\Giovana\Documents\emoconnect
vercel
```

Quando perguntado, responda:
- **Set up and deploy?** → Yes
- **Which scope?** → giovana's projects
- **Link to existing project?** → No (ou Yes se já criou)
- **Project name?** → emoconnect
- **Directory?** → ./
- **Override settings?** → Yes

Depois:
- **Build Command?** → `cd frontend && npm install && npm run build`
- **Output Directory?** → `frontend/dist`
- **Development Command?** → `npm run dev`

---

## ✅ Checklist

- [ ] Configurações atualizadas no Vercel
- [ ] Variáveis de ambiente adicionadas
- [ ] Build Command correto
- [ ] Output Directory correto
- [ ] Deploy executado com sucesso
- [ ] ALLOWED_ORIGINS adicionado após deploy
- [ ] Site testado e funcionando

---

**Agora vai funcionar! 🎉**
