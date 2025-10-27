# 🔍 GUIA DE VERIFICAÇÃO DO DEPLOY NO VERCEL

## ❌ PROBLEMA: "Internal Server Error" no Login/Cadastro

### 🎯 Causas Possíveis:

1. **Variáveis de ambiente não configuradas**
2. **Problemas de conexão com o banco de dados**
3. **Rotas não encontradas**
4. **Credenciais de admin incorretas**

---

## ✅ PASSO A PASSO PARA RESOLVER:

### 1️⃣ VERIFICAR VARIÁVEIS DE AMBIENTE NO VERCEL

Acesse: https://vercel.com/seu-usuario/emoconnect/settings/environment-variables

**Variáveis obrigatórias que DEVEM estar configuradas:**

```
NODE_ENV = production
PORT = 3000
ALLOWED_ORIGINS = https://emoconnect-bafs.vercel.app
DB_HOST = mysql-giisutton.alwaysdata.net
DB_USER = giisutton
DB_PASSWORD = Giisutton28@
DB_NAME = giisutton_emoconnect
JWT_SECRET = emoconnect_secret_2024_secure_key_production
JWT_EXPIRES_IN = 7d
```

⚠️ **IMPORTANTE:** Marque os 3 checkboxes (Production, Preview, Development) para cada variável!

---

### 2️⃣ VERIFICAR LOGS DO VERCEL

1. Acesse: https://vercel.com/seu-usuario/emoconnect/logs
2. Procure por erros como:
   - `Database connection failed`
   - `JWT_SECRET not configured`
   - `Error in serverless function`
3. Anote os erros para investigar

---

### 3️⃣ CRIAR USUÁRIO DE TESTE NO BANCO

**Opção A: Criar via PhpMyAdmin (AlwaysData)**

1. Acesse: https://phpmyadmin.alwaysdata.com/
2. Login com suas credenciais AlwaysData
3. Selecione o banco `giisutton_emoconnect`
4. Vá em "SQL" e execute:

```sql
-- Verificar se a tabela existe
SHOW TABLES;

-- Criar usuário de teste
INSERT INTO usuarios (nome, email, senha_hash, role, ativo)
VALUES (
    'Teste',
    'teste@emoconnect.com',
    '$2b$10$YourHashedPasswordHere',
    'user',
    TRUE
);
```

**Opção B: Cadastrar pela aplicação**

1. Acesse: https://emoconnect-bafs.vercel.app/cadastro
2. Preencha o formulário:
   - Nome: Seu Nome
   - Email: seuemail@example.com
   - Senha: SuaSenha123
3. Clique em "Cadastrar"

Se o cadastro funcionar, o login também funcionará!

---

### 4️⃣ TESTAR AS ROTAS DA API

Abra o Console do Navegador (F12) e execute:

```javascript
// Testar health check
fetch('https://emoconnect-bafs.vercel.app/api/health')
  .then(r => r.json())
  .then(console.log);

// Testar cadastro
fetch('https://emoconnect-bafs.vercel.app/api/v1/auth/cadastro', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nome: 'Teste',
    email: 'teste@example.com',
    senha: 'teste123'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

---

### 5️⃣ REDEPLOY APÓS CONFIGURAR VARIÁVEIS

1. Acesse: https://vercel.com/seu-usuario/emoconnect/deployments
2. Clique nos 3 pontinhos (...) do último deployment
3. Clique em "Redeploy"
4. ✅ Marque "Use existing Build Cache" (mais rápido)
5. Aguarde 2-3 minutos

---

## 🔧 SOLUÇÕES ESPECÍFICAS:

### Se o erro for "Database connection failed":

✅ Verifique se todas as variáveis DB_* estão corretas no Vercel
✅ Teste a conexão pelo PhpMyAdmin
✅ Verifique se o IP do Vercel está liberado no AlwaysData

### Se o erro for "Email ou senha incorretos":

✅ Use o cadastro ao invés do login
✅ Ou crie um usuário manualmente no banco de dados

### Se aparecer "CORS error":

✅ Verifique se ALLOWED_ORIGINS inclui a URL correta do Vercel
✅ Formato: `https://emoconnect-bafs.vercel.app` (sem barra no final)

---

## 🧪 TESTE FINAL:

1. Acesse: https://emoconnect-bafs.vercel.app/cadastro
2. Crie uma nova conta
3. Você será redirecionado para a Home
4. ✅ Se funcionou, SUCESSO! 🎉

---

## 📞 SE AINDA NÃO FUNCIONAR:

1. Tire screenshot dos logs do Vercel
2. Tire screenshot do Console do navegador (F12)
3. Verifique se todas as variáveis estão configuradas
4. Faça um redeploy completo (sem cache)

---

## 🎯 ATALHOS ÚTEIS:

- **Dashboard:** https://vercel.com/seu-usuario/emoconnect
- **Logs:** https://vercel.com/seu-usuario/emoconnect/logs
- **Variáveis:** https://vercel.com/seu-usuario/emoconnect/settings/environment-variables
- **PhpMyAdmin:** https://phpmyadmin.alwaysdata.com/
- **App:** https://emoconnect-bafs.vercel.app
