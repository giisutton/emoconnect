# 🚀 Como Iniciar o Projeto EmoConnect

## ✅ Pré-requisitos
- Node.js instalado (v18 ou superior)
- MySQL rodando (ou acesso ao banco remoto)
- Portas 3000 e 5173 disponíveis

---

## 📋 Passo a Passo

### 1️⃣ Iniciar o Backend (Terminal 1)

```powershell
# Navegue até a pasta backend
cd c:\Users\Giovana\Documents\emoconnect\backend

# Inicie o servidor
node index.js
```

**Você deve ver:**
```
✅ EmoConnect server running on port 3000
✅ Banco de dados conectado com sucesso
```

---

### 2️⃣ Iniciar o Frontend (Terminal 2)

```powershell
# Navegue até a pasta frontend
cd c:\Users\Giovana\Documents\emoconnect\frontend

# Inicie o servidor de desenvolvimento
npm run dev
```

**Você deve ver:**
```
VITE v7.x.x ready in Xms
➜ Local: http://localhost:5173/
```

---

## 🔐 Credenciais de Teste

### Admin
- **Email:** admin@emoconnect.com
- **Senha:** Admin@2025

### Usuário Teste
- **Email:** teste@email.com
- **Senha:** senha123

---

## 🌐 URLs do Projeto

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **Health Check:** http://localhost:3000/api/health

---

## ⚙️ Configurações Importantes

### Backend (.env)
```env
PORT=3000
DB_HOST=mysql-giovana.alwaysdata.net
DB_USER=giovana
DB_PASSWORD=gi170807
DB_NAME=giovana_tcc
JWT_SECRET=sua_chave_secreta_muito_segura_mude_isso
```

### Frontend (vite.config.js)
```javascript
server: {
  port: 5173,
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    }
  }
}
```

---

## 🔧 Resolução de Problemas

### ❌ Backend não inicia
```powershell
# Verifique se as dependências estão instaladas
cd backend
npm install

# Tente iniciar novamente
node index.js
```

### ❌ Frontend não inicia
```powershell
# Verifique se as dependências estão instaladas
cd frontend
npm install

# Tente iniciar novamente
npm run dev
```

### ❌ Erro de CORS
- Verifique se o backend está rodando
- Confirme que o proxy está configurado no `vite.config.js`
- Verifique `ALLOWED_ORIGINS` no `.env` do backend

### ❌ Erro de Login
1. Verifique se o backend está rodando
2. Abra o console do navegador (F12)
3. Verifique a aba Network para ver se as requisições estão chegando
4. Confira as credenciais do banco de dados no `.env`

---

## 📦 Estrutura do Projeto

```
emoconnect/
├── backend/          # API Node.js + Express
│   ├── index.js      # Entrada do servidor
│   ├── .env          # Variáveis de ambiente
│   └── package.json
│
├── frontend/         # React + Vite
│   ├── src/
│   │   ├── pages/    # Páginas (Home, Login, Chat, etc)
│   │   ├── services/ # API calls
│   │   └── contexts/ # AuthContext
│   ├── package.json
│   └── vite.config.js
│
└── static/          # Arquivos HTML antigos (não usado no React)
```

---

## 🎯 Próximos Passos

1. ✅ Backend configurado e rodando
2. ✅ Frontend configurado e rodando
3. ✅ Sistema de autenticação funcionando
4. ✅ 16 emoções disponíveis
5. ✅ Chat, Perfil e Comunidade implementados

**Tudo pronto para uso! 🎉**

---

## 📞 Suporte

Se encontrar algum problema:
1. Verifique se ambos os servidores estão rodando
2. Abra o console do navegador (F12) para ver erros
3. Verifique os logs do backend no terminal
4. Confirme que as portas 3000 e 5173 não estão sendo usadas por outros programas
