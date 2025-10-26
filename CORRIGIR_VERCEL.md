# 🔧 Guia de Correção - Erro de Login no Vercel

## Problema Identificado
Login no deploy do Vercel exibe mensagem de erro como `[object Object]` ou não funciona corretamente.

---

## ✅ Correções Já Aplicadas

### 1. Frontend - Tratamento de Erros
- ✅ Criado helper `_formatServerError()` no `authService.js`
- ✅ Atualizado tratamento de erros no `Login.jsx`
- ✅ Todas as mensagens de erro agora são legíveis

### 2. Configuração do Build
- ✅ `vercel.json` atualizado com `buildCommand` e `outputDirectory`
- ✅ `.vercelignore` configurado para otimizar deploy
- ✅ Frontend build testado localmente (1 segundo, sem erros)

---

## 🚨 Configurações Necessárias no Vercel

### Passo 1: Acessar Dashboard do Vercel
1. Vá para https://vercel.com/dashboard
2. Selecione o projeto `emoconnect`
3. Vá em **Settings → Environment Variables**

### Passo 2: Configurar Variáveis de Ambiente

⚠️ **CRÍTICO:** Adicione TODAS estas variáveis:

#### Backend - Servidor
```
PORT = 3000
NODE_ENV = production
LOG_LEVEL = info
```

#### Backend - Banco de Dados
```
DB_HOST = mysql-giovana.alwaysdata.net
DB_USER = giovana
DB_PASSWORD = gi170807
DB_NAME = giovana_tcc
```

#### Backend - Autenticação (IMPORTANTE!)
```
JWT_SECRET = emoconnect_prod_secret_2025_super_seguro_nao_compartilhar
JWT_EXPIRES_IN = 7d
```

⚠️ **ATENÇÃO:** Use um JWT_SECRET forte e único para produção! O exemplo acima é apenas ilustrativo.

#### Backend - CORS (MUITO IMPORTANTE!)
```
ALLOWED_ORIGINS = https://emoconnect-rho.vercel.app,https://www.emoconnect-rho.vercel.app
```

⚠️ **SUBSTITUA** `emoconnect-rho.vercel.app` pela URL EXATA do seu deploy!

#### Backend - IA (Opcional)
```
GEMINI_API_KEY = sua_chave_gemini_aqui
```

### Passo 3: Descobrir a URL Exata do Deploy

**Opção A: Pelo Dashboard**
1. Vá em **Deployments**
2. Clique no último deploy
3. Copie a URL (ex: `https://emoconnect-xxx.vercel.app`)

**Opção B: Pelo Terminal**
```powershell
vercel ls
```

### Passo 4: Atualizar ALLOWED_ORIGINS

Depois de descobrir a URL:
1. Volte em **Settings → Environment Variables**
2. Edite `ALLOWED_ORIGINS`
3. Coloque as URLs completas:
   ```
   https://sua-url-exata.vercel.app,https://www.sua-url-exata.vercel.app
   ```
4. Salve

### Passo 5: Forçar Re-deploy

Após configurar as variáveis:

**Opção A: Pelo Dashboard**
1. Vá em **Deployments**
2. Clique nos três pontinhos (...) do último deploy
3. Clique em **Redeploy**
4. Marque **Use existing Build Cache** = OFF
5. Clique em **Redeploy**

**Opção B: Pelo Terminal**
```powershell
cd c:\Users\Giovana\emoconnect
git add .
git commit -m "fix: configuração de variáveis de ambiente para produção"
git push origin main
```

O Vercel detectará o push e fará deploy automaticamente.

---

## 🧪 Testar o Deploy

### 1. Aguardar Build Completo
- Acompanhe em **Deployments**
- Aguarde até aparecer "Ready" (✓)
- Geralmente leva 1-2 minutos

### 2. Testar Login

Abra o navegador em modo anônimo (Ctrl+Shift+N):

```
https://sua-url.vercel.app/login
```

**Teste de Cadastro:**
1. Clique em "Cadastre-se"
2. Preencha: nome, email, senha
3. Clique em "Cadastrar"
4. ✅ Deve redirecionar para Home

**Teste de Login:**
1. Volte para `/login`
2. Use o email/senha que cadastrou
3. Clique em "Entrar"
4. ✅ Deve redirecionar para Home

**Teste de Erro:**
1. Tente login com senha errada
2. ✅ Deve aparecer: "Email ou senha incorretos"
3. ❌ NÃO deve aparecer: "[object Object]"

### 3. Testar Chat (Opcional)

Se configurou `GEMINI_API_KEY`:
1. Vá para `/chat`
2. Selecione "Modo Especialista"
3. Digite uma mensagem
4. Envie
5. ✅ IA deve responder

---

## 🐛 Troubleshooting

### Erro 1: "CORS policy: No 'Access-Control-Allow-Origin'"

**Causa:** `ALLOWED_ORIGINS` incorreto ou não configurado.

**Solução:**
1. Verifique a URL exata do deploy
2. Confirme que `ALLOWED_ORIGINS` tem essa URL
3. Re-deploy

**Exemplo:**
```
# ❌ ERRADO
ALLOWED_ORIGINS = localhost:5173

# ✅ CORRETO
ALLOWED_ORIGINS = https://emoconnect-rho.vercel.app
```

### Erro 2: "Failed to fetch" ou "Network Error"

**Causa:** Backend não está respondendo.

**Solução:**
1. Vá em **Deployments → Functions**
2. Clique em `/api/index`
3. Veja os logs
4. Procure por erros de:
   - Variáveis de ambiente não configuradas
   - Conexão com MySQL
   - JWT_SECRET ausente

### Erro 3: "[object Object]" ainda aparece

**Causa:** Código não atualizado no deploy.

**Solução:**
1. Confirme que o commit com as correções foi feito:
   ```powershell
   git log --oneline -n 5
   ```
2. Confirme que o push foi feito:
   ```powershell
   git status
   ```
3. Force um novo deploy:
   ```powershell
   vercel --prod --force
   ```

### Erro 4: "Database connection failed"

**Causa:** Credenciais do MySQL incorretas ou banco não acessível.

**Solução:**
1. Teste conexão local:
   ```powershell
   cd backend
   node -e "import('./config/database.js').then(m => m.testConnection())"
   ```
2. Verifique se `DB_HOST`, `DB_USER`, `DB_PASSWORD` estão corretos
3. Confirme que o MySQL remoto aceita conexões externas

### Erro 5: Login funciona, mas Chat não

**Causa:** `GEMINI_API_KEY` não configurada.

**Solução:**
1. Adicione a variável no Vercel
2. Ou remova temporariamente a funcionalidade de chat
3. Re-deploy

---

## 📊 Verificação Completa

Use este checklist:

- [ ] Todas as variáveis de ambiente configuradas no Vercel
- [ ] `ALLOWED_ORIGINS` tem a URL exata do deploy
- [ ] `JWT_SECRET` é forte e único (não "dev_secret_for_local")
- [ ] Código com correções commitado e pushed
- [ ] Deploy completado com sucesso (status "Ready")
- [ ] Teste de cadastro funciona
- [ ] Teste de login funciona
- [ ] Mensagens de erro são legíveis (não "[object Object]")
- [ ] Console do navegador (F12) não tem erros de CORS
- [ ] `/api/health` retorna status 200

---

## 🔍 Como Ver Logs no Vercel

### Logs em Tempo Real

**Dashboard:**
1. Vá em **Deployments**
2. Clique no deploy ativo
3. Clique em **Functions**
4. Selecione `/api/index`
5. Veja os logs ao vivo

**Terminal:**
```powershell
vercel logs --follow
```

### Logs de Erro Específicos

Procure por:
- `❌ ERRO CRÍTICO: JWT_SECRET não configurado`
- `❌ Erro no login:`
- `CORS policy`
- `Database connection`

---

## 🚀 Comandos Úteis

### Ver Status do Deploy
```powershell
vercel ls
```

### Ver Logs
```powershell
vercel logs
```

### Forçar Re-deploy
```powershell
vercel --prod --force
```

### Testar Endpoint da API
```powershell
curl https://sua-url.vercel.app/api/health
```

Ou no navegador:
```
https://sua-url.vercel.app/api/health
```

Deve retornar:
```json
{
  "status": "ok",
  "service": "EmoConnect API",
  "timestamp": "2025-10-26T...",
  "uptime": 123,
  "version": "1.0.0",
  "environment": "production"
}
```

---

## 📞 Próximos Passos

### Se Tudo Funcionar ✅
1. Teste todas as funcionalidades (login, chat, perfil)
2. Compartilhe o link do deploy
3. Atualize o README com a URL final
4. Prepare a apresentação

### Se Ainda Tiver Erro ❌
1. Copie os logs do Vercel (Functions → `/api/index`)
2. Abra o console do navegador (F12 → Console)
3. Copie os erros em vermelho
4. Me envie para análise detalhada

---

## 💡 Dica Final

**Sempre teste em modo anônimo (Ctrl+Shift+N)** para evitar cache do navegador!

---

**Última Atualização:** 26 de outubro de 2025  
**Status:** Correções aplicadas, aguardando configuração no Vercel
