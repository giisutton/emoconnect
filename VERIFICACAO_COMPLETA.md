# 📋 Checklist de Verificação - EmoConnect

## ✅ Configuração do Ambiente

### Backend
- [x] Node.js instalado
- [x] Dependências instaladas (`npm install` na pasta backend)
- [x] Arquivo `.env` configurado com:
  - [x] `PORT=3000`
  - [x] Credenciais do banco de dados MySQL
  - [x] `JWT_SECRET` definido
  - [x] `ALLOWED_ORIGINS` incluindo localhost:5173
- [x] Banco de dados MySQL acessível

### Frontend
- [x] Node.js instalado
- [x] Dependências instaladas (`npm install` na pasta frontend)
- [x] Vite configurado com proxy para porta 3000
- [x] React Router configurado
- [x] AuthContext implementado

---

## 🔧 Arquivos Críticos Verificados

### Backend
```
✅ backend/index.js - Servidor Express configurado
✅ backend/.env - Variáveis de ambiente
✅ backend/package.json - Dependências corretas
✅ backend/config/database.js - Conexão MySQL
✅ backend/controllers/authController.js - Login/Cadastro
✅ backend/routes/auth.js - Rotas de autenticação
✅ backend/middleware/auth.js - Middleware JWT
```

### Frontend
```
✅ frontend/src/main.jsx - Entrada do app
✅ frontend/src/App.jsx - Rotas configuradas
✅ frontend/src/contexts/AuthContext.jsx - Gerenciamento de autenticação
✅ frontend/src/services/api.js - Axios configurado
✅ frontend/src/services/authService.js - Serviços de auth
✅ frontend/src/pages/Login.jsx - Página de login
✅ frontend/src/pages/Home.jsx - 16 emoções implementadas
✅ frontend/vite.config.js - Proxy configurado
```

---

## 🌐 URLs e Endpoints

### Frontend
- **URL Principal:** http://localhost:5173
- **Login:** http://localhost:5173/login
- **Cadastro:** http://localhost:5173/cadastro
- **Home:** http://localhost:5173/
- **Chat:** http://localhost:5173/chat
- **Perfil:** http://localhost:5173/perfil

### Backend
- **URL Base:** http://localhost:3000
- **Health Check:** http://localhost:3000/api/health
- **Login:** POST http://localhost:3000/api/v1/auth/login
- **Cadastro:** POST http://localhost:3000/api/v1/auth/cadastro
- **Perfil:** GET http://localhost:3000/api/v1/auth/me

---

## 🔐 Credenciais de Teste

### Administrador
```
Email: admin@emoconnect.com
Senha: Admin@2025
```

### Usuário de Teste
```
Email: teste@email.com
Senha: senha123
```

---

## 🚀 Como Iniciar

### Opção 1: Script Automático (Recomendado)
```powershell
# Execute na pasta raiz do projeto
.\start-all.ps1
```

### Opção 2: Manual (Dois Terminais)

**Terminal 1 - Backend:**
```powershell
cd c:\Users\Giovana\Documents\emoconnect\backend
node index.js
```

**Terminal 2 - Frontend:**
```powershell
cd c:\Users\Giovana\Documents\emoconnect\frontend
npm run dev
```

---

## ✅ Verificações de Funcionamento

### 1. Backend está rodando?
```powershell
# Verifique se a porta 3000 está aberta
netstat -ano | findstr ":3000"
```

**Saída esperada no terminal:**
```
✅ EmoConnect server running on port 3000
✅ Banco de dados conectado com sucesso
```

### 2. Frontend está rodando?
```powershell
# Verifique se a porta 5173 está aberta
netstat -ano | findstr ":5173"
```

**Saída esperada no terminal:**
```
VITE v7.x.x ready in Xms
➜ Local: http://localhost:5173/
```

### 3. Proxy funcionando?
- Abra http://localhost:5173
- Abra o DevTools (F12)
- Vá para a aba Network
- Tente fazer login
- As requisições devem ir para `/api/v1/auth/login`

### 4. Login funcionando?
- Acesse http://localhost:5173/login
- Use: `admin@emoconnect.com` / `Admin@2025`
- Deve redirecionar para a home após login

---

## 🐛 Troubleshooting

### Problema: Backend não inicia
**Solução:**
```powershell
cd backend
npm install
node index.js
```

### Problema: "Cannot find module"
**Solução:**
```powershell
# Backend
cd backend
rm -r node_modules
rm package-lock.json
npm install

# Frontend
cd frontend
rm -r node_modules
rm package-lock.json
npm install
```

### Problema: Erro de CORS
**Verificar:**
1. Backend está rodando?
2. Proxy configurado no `vite.config.js`?
3. `ALLOWED_ORIGINS` no `.env` inclui `http://localhost:5173`?

### Problema: Erro 401 no login
**Verificar:**
1. Banco de dados está acessível?
2. Credenciais corretas no `.env`?
3. Usuário existe no banco?
4. `JWT_SECRET` está definido?

### Problema: Página em branco
**Verificar:**
1. Console do navegador (F12) para erros
2. Frontend está rodando?
3. Rota existe no `App.jsx`?

---

## 📊 Status do Projeto

### ✅ Implementado
- [x] Sistema de autenticação (Login/Cadastro)
- [x] 16 emoções com conselhos personalizados
- [x] Chat com IA (integração Gemini)
- [x] Perfil de usuário editável
- [x] Comunidade e conexões
- [x] Progresso e estatísticas
- [x] Exercício de respiração
- [x] Atividades de bem-estar
- [x] Design responsivo
- [x] Animações e transições

### 🔄 Funcionalidades Principais
- **Home:** 16 emoções, dicas de bem-estar, comunidade
- **Chat:** Conversas com IA especializada em saúde mental
- **Perfil:** Edição de informações pessoais
- **Progresso:** Estatísticas e conquistas

---

## 🎯 Próximos Passos (Opcional)

### Melhorias Backend
- [ ] Implementar recuperação de senha
- [ ] Adicionar upload de avatar
- [ ] Sistema de notificações
- [ ] Chat entre usuários

### Melhorias Frontend
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados
- [ ] Internacionalização (i18n)

---

## 📞 Suporte

Se encontrar problemas:

1. **Verifique os logs:**
   - Backend: Olhe o terminal onde rodou `node index.js`
   - Frontend: Olhe o console do navegador (F12)

2. **Reinicie os servidores:**
   - Ctrl+C nos terminais
   - Execute `.\start-all.ps1` novamente

3. **Limpe o cache:**
   - Navegador: Ctrl+Shift+Delete
   - Node: Delete `node_modules` e rode `npm install`

---

## ✨ Sistema 100% Funcional

**Tudo verificado e pronto para uso! 🎉**

- ✅ Backend rodando na porta 3000
- ✅ Frontend rodando na porta 5173
- ✅ Banco de dados conectado
- ✅ Sistema de autenticação funcionando
- ✅ 16 emoções implementadas
- ✅ Chat, Perfil e Comunidade operacionais
- ✅ Design moderno e responsivo

**Para iniciar o projeto, execute:**
```powershell
.\start-all.ps1
```

**Ou manualmente em dois terminais separados!**
