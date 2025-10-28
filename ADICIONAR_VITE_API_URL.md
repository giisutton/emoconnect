# 🚨 FALTANDO VARIÁVEL IMPORTANTE NO VERCEL!

## ⚠️ **PROBLEMA IDENTIFICADO:**
Falta a variável **`VITE_API_URL`** nas configurações do Vercel!

---

## ✅ **SOLUÇÃO RÁPIDA:**

### 1. **Adicione esta variável no Vercel:**
   - Acesse: https://vercel.com/giisutton/emoconnect/settings/environment-variables
   - Clique em **"Add New"**
   - Preencha:
     - **Name:** `VITE_API_URL`
     - **Value:** `/api`
     - **Environment:** Marque **Production**, **Preview** e **Development**
   - Clique em **Save**

### 2. **Faça o Redeploy:**
   - Vá em **Deployments** → Último deploy
   - Clique nos 3 pontinhos → **Redeploy**
   - Marque **"Redeploy"** → Confirme

---

## 🔍 **POR QUE PRECISA DISSO?**

O frontend (React/Vite) precisa saber qual é a URL base da API.
Sem essa variável, o código não consegue montar as URLs corretamente:
- ❌ Sem `VITE_API_URL`: requisições falham (404)
- ✅ Com `VITE_API_URL=/api`: requisições vão para `/api/auth/login`

---

## 📸 **COMO ADICIONAR:**

1. Na tela de Environment Variables do Vercel
2. Clique no botão **"Add New"** (canto superior direito)
3. Preencha:
   ```
   Name: VITE_API_URL
   Value: /api
   ```
4. Selecione todos os ambientes (Production, Preview, Development)
5. Clique em **Save**
6. Faça **Redeploy** do último commit

---

## ⏱️ **DEPOIS DE ADICIONAR:**
- Aguarde 2-3 minutos para o deploy concluir
- Limpe o cache do browser (Ctrl + Shift + Delete)
- Teste o login novamente em: https://emoconnect-rho.vercel.app/login

🎯 **Isso deve resolver o problema!**
