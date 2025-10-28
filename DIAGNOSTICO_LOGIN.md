# Script de Diagnóstico do Erro de Login - EmoConnect

## 🔍 Análise Realizada

### ✅ Backend
- **Banco de dados:** Conectado e funcionando
- **Usuário admin:** Existe e está ativo
- **Credenciais:** `admin@emoconnect.com` / `admin123` - **CORRETAS**
- **Rota de login:** Testada diretamente e funcionando perfeitamente
- **Resposta da API:** Status 200, token gerado corretamente

### ✅ Estrutura
- **Backend rodando:** Porta 3000
- **Frontend rodando:** Porta 5173  
- **Proxy Vite:** Configurado para `/api` → `http://localhost:3000`

### ❓ Problema Identificado
O erro "Erro ao fazer login" aparece no frontend, mas o backend está funcionando perfeitamente quando testado diretamente.

## 🔧 Possíveis Causas

### 1. Problema de CORS/Proxy no Navegador
O Vite está configurado para fazer proxy, mas pode haver um problema na requisição do navegador.

### 2. Console do Navegador
Verificar mensagens de erro no console (F12 → Console)

### 3. Aba Network do DevTools
Verificar se a requisição POST /api/v1/auth/login está sendo feita e qual é a resposta

## 🧪 Como Diagnosticar

### Abra o DevTools (F12) e siga os passos:

1. **Aba Console:**
   ```javascript
   // Limpe o console
   console.clear();
   
   // Tente fazer login manualmente
   fetch('http://localhost:5173/api/v1/auth/login', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           email: 'admin@emoconnect.com',
           senha: 'admin123'
       })
   })
   .then(r => r.json())
   .then(data => console.log('✅ Resposta:', data))
   .catch(err => console.error('❌ Erro:', err));
   ```

2. **Aba Network:**
   - Filtre por "login"
   - Tente fazer login novamente
   - Clique na requisição POST /api/v1/auth/login
   - Veja:
     - **Headers:** Status code
     - **Payload:** Dados enviados
     - **Response:** Resposta do servidor

3. **Verificar se há erro de CORS:**
   - Procure por mensagens com "CORS"
   - Procure por mensagens com "blocked"

## 🔧 Soluções Possíveis

### Solução 1: Adicionar variável de ambiente no Vite
Criar arquivo `.env` no frontend com:
```env
VITE_API_URL=http://localhost:3000/api/v1
```

### Solução 2: Desabilitar proxy e usar URL completa
Editar `frontend/src/services/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:3000/api/v1';
```

### Solução 3: Verificar se backend está aceitando conexões
```powershell
# Verificar se porta 3000 está escutando
Get-NetTCPConnection -LocalPort 3000 -State Listen
```

### Solução 4: Reiniciar frontend e backend
```powershell
# Terminal 1 - Parar e reiniciar backend
cd backend
node index.js

# Terminal 2 - Parar e reiniciar frontend  
cd frontend
npm run dev
```

## 📊 Teste Manual no Console do Navegador

Abra a página do EmoConnect (http://localhost:5173/login) e cole no console:

```javascript
// Teste 1: Verificar se a API está acessível
fetch('/api/health')
    .then(r => r.json())
    .then(d => console.log('✅ API Health:', d))
    .catch(e => console.error('❌ API inacessível:', e));

// Teste 2: Tentar login com fetch direto
fetch('/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: 'admin@emoconnect.com',
        senha: 'admin123'
    })
})
.then(async r => {
    const data = await r.json();
    console.log('Status:', r.status);
    console.log('Data:', data);
    return data;
})
.catch(e => console.error('Erro:', e));

// Teste 3: Verificar configuração do axios
import axios from 'axios';
console.log('Axios baseURL:', axios.defaults.baseURL);
```

## 📝 Próximos Passos

1. **Execute os testes no console do navegador**
2. **Capture prints da aba Network**
3. **Verifique se há mensagens de erro**
4. **Compartilhe os resultados para análise**

## 🎯 Arquivos Verificados

- ✅ `backend/controllers/authController.js` - Login funcionando
- ✅ `backend/routes/auth.js` - Rotas configuradas
- ✅ `frontend/src/services/api.js` - Axios configurado
- ✅ `frontend/src/services/authService.js` - Serviço de auth
- ✅ `frontend/vite.config.js` - Proxy configurado
- ✅ `backend/.env` - Variáveis de ambiente OK

## 🔑 Credenciais Testadas

- **Email:** admin@emoconnect.com
- **Senha:** admin123
- **Status no Banco:** ✅ Ativo
- **Hash no Banco:** ✅ Válido
- **Teste Direto Backend:** ✅ Funcionando
