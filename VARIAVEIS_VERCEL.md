# ✅ VARIÁVEIS DE AMBIENTE PARA VERCEL

## 🚨 URGENTE - Configure estas variáveis no Dashboard do Vercel

Acesse: https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/settings/environment-variables

### Variáveis Obrigatórias:

1. **NODE_ENV**
   - Value: `production`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

2. **PORT**
   - Value: `3000`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

3. **ALLOWED_ORIGINS**
   - Value: `https://emoconnect-bafs.vercel.app,https://emoconnect-bafs.vercel.app`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

4. **DB_HOST**
   - Value: `mysql-giisutton.alwaysdata.net`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

5. **DB_USER**
   - Value: `giisutton`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

6. **DB_PASSWORD**
   - Value: `Giisutton28@`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

7. **DB_NAME**
   - Value: `giisutton_emoconnect`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

8. **JWT_SECRET**
   - Value: `emoconnect_secret_2024_secure_key_production`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

9. **JWT_EXPIRES_IN**
   - Value: `7d`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

10. **LOG_LEVEL**
    - Value: `info`
    - Environments: ✅ Production, ✅ Preview, ✅ Development

11. **GEMINI_API_KEY** (Opcional - para chat com IA)
    - Value: (sua chave da API Gemini)
    - Environments: ✅ Production, ✅ Preview

---

## 🔧 Como Adicionar:

1. Acesse o link acima
2. Clique em "Add New" 
3. Cole o nome da variável (ex: `NODE_ENV`)
4. Cole o valor (ex: `production`)
5. Marque os 3 checkboxes: Production, Preview, Development
6. Clique em "Save"
7. Repita para todas as 11 variáveis

---

## ⚡ Após configurar:

1. Vá para: https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/deployments
2. Clique nos 3 pontinhos (...) do último deployment
3. Clique em "Redeploy"
4. Aguarde 2-3 minutos
5. Teste o login em: https://emoconnect-bafs.vercel.app/login

---

## 🐛 Se ainda não funcionar:

Verifique os logs em:
https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/logs
