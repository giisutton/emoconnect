# 🚨 VERIFICAR CONFIGURAÇÕES DO VERCEL

## ⚠️ **PROBLEMA ATUAL:**
O login está dando erro 404 novamente após o cleanup dos arquivos.

## 🔍 **CAUSA PROVÁVEL:**
As variáveis de ambiente do Vercel podem ter sido perdidas ou não estão configuradas corretamente.

---

## ✅ **PASSOS PARA RESOLVER:**

### 1. **Acesse o Vercel Dashboard:**
   - https://vercel.com/giisutton/emoconnect
   - Vá em **Settings** → **Environment Variables**

### 2. **Verifique se estas variáveis existem:**

#### **Para a função serverless (api/index.js):**
```
DB_HOST=mysql-giovana.alwaysdata.net
DB_USER=giovana
DB_PASSWORD=gi170807
DB_NAME=giovana_tcc
JWT_SECRET=sua_chave_secreta_muito_segura_mude_isso
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3000
```

#### **Para o frontend (VITE):**
```
VITE_API_URL=/api
```

### 3. **Configure cada variável:**
   - Clique em **Add New**
   - **Name:** (nome da variável, ex: `DB_HOST`)
   - **Value:** (valor, ex: `mysql-giovana.alwaysdata.net`)
   - **Environment:** Selecione **Production**, **Preview**, e **Development**
   - Clique em **Save**

### 4. **Após adicionar TODAS as variáveis:**
   - Vá em **Deployments**
   - Encontre o último deploy (commit: `b8c35da`)
   - Clique nos 3 pontinhos → **Redeploy** → **Use existing Build Cache** → **Redeploy**

---

## 📝 **CHECKLIST:**

- [ ] Acessar Vercel Settings → Environment Variables
- [ ] Verificar se `DB_HOST` existe
- [ ] Verificar se `DB_USER` existe
- [ ] Verificar se `DB_PASSWORD` existe
- [ ] Verificar se `DB_NAME` existe
- [ ] Verificar se `JWT_SECRET` existe
- [ ] Verificar se `JWT_EXPIRES_IN` existe
- [ ] Verificar se `NODE_ENV=production` existe
- [ ] Verificar se `VITE_API_URL=/api` existe
- [ ] Fazer Redeploy após confirmar tudo

---

## 🎯 **ALTERNATIVA RÁPIDA:**

Se as variáveis já estão lá, pode ser cache. Tente:

1. **Limpar cache do browser:** `Ctrl + Shift + Delete` → Limpar cache
2. **Abrir em aba anônima:** `Ctrl + Shift + N`
3. **Testar o login novamente**

---

## ⚡ **DEPLOY FEITO:**
✅ Commit `b8c35da` foi enviado
✅ Vercel deve estar fazendo o deploy agora
⏳ Aguarde 2-3 minutos e teste novamente

---

## 🔗 **LINKS ÚTEIS:**
- **App:** https://emoconnect-rho.vercel.app/login
- **Dashboard:** https://vercel.com/giisutton/emoconnect
- **Settings:** https://vercel.com/giisutton/emoconnect/settings/environment-variables
