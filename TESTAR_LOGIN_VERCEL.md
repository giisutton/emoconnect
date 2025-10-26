# 🧪 TESTE DO LOGIN NO VERCEL - Passo a Passo

## ✅ O QUE FOI CORRIGIDO:

1. ✅ Backend agora NÃO tenta usar `app.listen()` em produção (Vercel é serverless)
2. ✅ Mensagens de erro normalizadas (não aparece mais "[object Object]")
3. ✅ Configuração do Vercel ajustada (buildCommand, rewrites)

---

## 🚨 PASSO 1: CONFIGURAR VARIÁVEIS DE AMBIENTE

**ESTE É O PASSO MAIS IMPORTANTE!**

Acesse: https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/settings/environment-variables

Adicione as 11 variáveis conforme descrito em `VARIAVEIS_VERCEL.md`:

- NODE_ENV
- PORT  
- ALLOWED_ORIGINS
- DB_HOST
- DB_USER
- DB_PASSWORD
- DB_NAME
- JWT_SECRET
- JWT_EXPIRES_IN
- LOG_LEVEL
- GEMINI_API_KEY (opcional)

**⚠️ SEM ESSAS VARIÁVEIS, O LOGIN NÃO VAI FUNCIONAR!**

---

## 🔄 PASSO 2: AGUARDAR DEPLOY AUTOMÁTICO

1. Acesse: https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/deployments
2. Aguarde o deployment com commit `ffbdd23` ficar "Ready" (✓)
3. Tempo estimado: 2-3 minutos

---

## 🧪 PASSO 3: TESTAR LOGIN

### 3.1. Abrir em Janela Anônima
- Chrome: `Ctrl + Shift + N`
- Edge: `Ctrl + Shift + P`
- Firefox: `Ctrl + Shift + P`

### 3.2. Acessar
https://emoconnect-bafs.vercel.app/login

### 3.3. Abrir DevTools
- Pressione `F12`
- Vá na aba "Console"
- Vá na aba "Network"

### 3.4. Teste 1: Login com Senha Errada
```
Email: teste@example.com
Senha: senha_errada_123
```

**✅ ESPERADO:**
- Mensagem: "Email ou senha incorretos"
- **NÃO** deve aparecer "[object Object]"
- Console: Nenhum erro em vermelho de CORS

**❌ SE DER ERRO:**
- Copie a mensagem de erro
- Tire print do Console
- Tire print da aba Network (filtro: `/api/v1/auth/login`)

### 3.5. Teste 2: Cadastrar Novo Usuário

Clique em "Cadastre-se" e preencha:
```
Nome: Teste Giovana
Email: teste.giovana@example.com
Senha: senha123
Confirmar: senha123
```

**✅ ESPERADO:**
- Cadastro concluído
- Redirecionamento para página Home

**❌ SE DER ERRO:**
- Copie a mensagem
- Tire print

### 3.6. Teste 3: Login com Usuário Cadastrado

Faça login com o usuário que você acabou de criar.

**✅ ESPERADO:**
- Login bem-sucedido
- Redirecionamento para Home
- Seu nome aparece no header

---

## 🐛 CHECKLIST DE PROBLEMAS COMUNS

### Problema: Site não carrega (tela branca)
**Solução:**
1. Aguarde 5 minutos (deploy pode estar processando)
2. Limpe cache: `Ctrl + Shift + Delete`
3. Tente em janela anônima

### Problema: "401 Unauthorized" ou "Network Error"
**Solução:**
1. Verifique se TODAS as variáveis de ambiente foram adicionadas
2. Especialmente: `ALLOWED_ORIGINS` deve incluir `https://emoconnect-bafs.vercel.app`
3. Faça Redeploy após adicionar as variáveis

### Problema: Ainda aparece "[object Object]"
**Solução:**
1. Verifique se o deployment é o mais recente (commit `ffbdd23`)
2. Limpe o cache do navegador
3. Force hard reload: `Ctrl + F5`

### Problema: "CORS Error" no Console
**Solução:**
1. Variável `ALLOWED_ORIGINS` está configurada?
2. Valor correto: `https://emoconnect-bafs.vercel.app,https://emoconnect-bafs.vercel.app`
3. Redeploy após corrigir

---

## 📊 VERIFICAÇÕES ADICIONAIS

### Testar Health Check da API:
Abra: https://emoconnect-bafs.vercel.app/api/health

**✅ ESPERADO:**
```json
{
  "status": "ok",
  "service": "EmoConnect API",
  "timestamp": "2025-10-26T...",
  "uptime": 0.123,
  "version": "1.0.0",
  "environment": "production"
}
```

### Verificar Logs do Vercel:
1. Acesse: https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/logs
2. Procure por erros em vermelho
3. Especialmente: "Cannot find module", "ECONNREFUSED", "401", "500"

---

## 💪 PRÓXIMOS PASSOS (APÓS LOGIN FUNCIONAR)

1. ✅ Testar todas as funcionalidades (Chat, Perfil, Registro de Humor)
2. ✅ Verificar se não há erros no Console
3. ✅ Criar apresentação (slides)
4. ✅ Ensaiar apresentação 3x
5. ✅ Preparar demo ao vivo

---

## 🆘 SE NADA FUNCIONAR

Me envie:
1. Print da página de Environment Variables do Vercel
2. Print da aba Console (F12) com os erros
3. Print da aba Network (F12) filtrando por `/api/`
4. Link dos logs: https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/logs

---

**Última atualização:** 26/10/2025 - Commit ffbdd23
