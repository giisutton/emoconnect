# 🚨 RESOLVER ERRO NO VERCEL - PASSO A PASSO

## O QUE FAZER AGORA:

### 🔧 PASSO 1: Fazer Deploy das Correções

Os arquivos foram corrigidos! Agora precisa fazer deploy:

```powershell
# 1. Adicionar alterações ao Git
git add .

# 2. Fazer commit
git commit -m "fix: corrigir rotas API e handler Vercel"

# 3. Enviar para o GitHub
git push origin main
```

O Vercel vai detectar automaticamente e fazer o deploy! ⏳ Aguarde 2-3 minutos.

---

### ✅ PASSO 2: Verificar Variáveis de Ambiente

**IMPORTANTE:** Acesse o Vercel e verifique se TODAS essas variáveis estão configuradas:

🔗 Link direto: https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/settings/environment-variables

**Variáveis que DEVEM existir:**

| Nome | Valor | Ambientes |
|------|-------|-----------|
| `NODE_ENV` | `production` | ✅ Todos |
| `PORT` | `3000` | ✅ Todos |
| `ALLOWED_ORIGINS` | `https://emoconnect-bafs.vercel.app` | ✅ Todos |
| `DB_HOST` | `mysql-giisutton.alwaysdata.net` | ✅ Todos |
| `DB_USER` | `giisutton` | ✅ Todos |
| `DB_PASSWORD` | `Giisutton28@` | ✅ Todos |
| `DB_NAME` | `giisutton_emoconnect` | ✅ Todos |
| `JWT_SECRET` | `emoconnect_secret_2024_secure_key_production` | ✅ Todos |
| `JWT_EXPIRES_IN` | `7d` | ✅ Todos |

⚠️ **SE ALGUMA VARIÁVEL ESTIVER FALTANDO:**
1. Clique em "Add New"
2. Cole o Nome e o Valor
3. ✅ Marque: Production, Preview, Development
4. Clique em "Save"

---

### 🧪 PASSO 3: Testar a API

Depois que o deploy terminar, execute este teste:

```powershell
# Testar se a API está funcionando
node test_vercel_api.js
```

Você verá se o cadastro e login estão funcionando! ✅

---

### 🎯 PASSO 4: Usar a Aplicação

**IMPORTANTE:** Como o email `admin@emoconnect.com` pode já estar cadastrado no banco, você tem 2 opções:

#### Opção A: Criar Nova Conta (RECOMENDADO) ✅

1. Acesse: https://emoconnect-bafs.vercel.app/cadastro
2. Preencha:
   - **Nome:** Seu nome
   - **Email:** seu_email@gmail.com (use seu email real)
   - **Senha:** Uma senha forte (mínimo 6 caracteres)
3. Clique em "Cadastrar"
4. ✅ Você será logado automaticamente!

#### Opção B: Resetar Usuário Admin no Banco

Se quiser usar `admin@emoconnect.com`, você precisa deletar o usuário existente:

1. Acesse: https://phpmyadmin.alwaysdata.com/
2. Login com suas credenciais AlwaysData
3. Selecione o banco `giisutton_emoconnect`
4. Clique em "usuarios" (tabela)
5. Encontre o usuário com email `admin@emoconnect.com`
6. Clique em "Delete" (ícone de lixeira)
7. Agora pode cadastrar novamente!

---

## 🐛 SE AINDA DER ERRO:

### 1. Ver Logs do Vercel
```
https://vercel.com/giovanas-projects-5b696832/emoconnect-bafs/logs
```

### 2. Abrir Console do Navegador
- Pressione `F12`
- Vá em "Console"
- Tente fazer login/cadastro
- Anote os erros que aparecerem

### 3. Testar Health Check

Abra no navegador:
```
https://emoconnect-bafs.vercel.app/api/health
```

Você deve ver algo assim:
```json
{
  "status": "ok",
  "service": "EmoConnect API",
  "timestamp": "2024-10-27T...",
  "uptime": 123.45,
  "version": "1.0.0",
  "environment": "production"
}
```

---

## 📊 CHECKLIST:

- [ ] Fazer commit e push das correções
- [ ] Aguardar deploy do Vercel (2-3 min)
- [ ] Verificar todas as variáveis de ambiente
- [ ] Executar `node test_vercel_api.js`
- [ ] Acessar `/cadastro` e criar nova conta
- [ ] Testar login com a conta criada
- [ ] ✅ FUNCIONA!

---

## 💡 DICAS:

- **Sempre use CADASTRO primeiro**, não login!
- Se você não sabe qual senha foi usada para `admin@emoconnect.com`, crie um novo usuário
- O email deve ser único no banco de dados
- A senha precisa ter no mínimo 6 caracteres

---

## 🎉 QUANDO TUDO FUNCIONAR:

Você poderá:
- ✅ Cadastrar novos usuários
- ✅ Fazer login
- ✅ Acessar a página Home
- ✅ Usar o chat com IA (se configurou `GEMINI_API_KEY`)
- ✅ Ver seu perfil

---

**Feito por: GitHub Copilot**
**Data: 27/10/2025**
