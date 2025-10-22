# 🚀 Guia Rápido - EmoConnect React

## ✅ Conversão Completa!

A pasta `static` com arquivos HTML foi convertida para uma aplicação React moderna!

## 📦 Como Executar

### 1️⃣ Instalar Dependências (se ainda não instalou)
```powershell
cd c:\Users\Giovana\Documents\emoconnect\frontend
npm install
```

### 2️⃣ Iniciar o Backend (em um terminal separado)
```powershell
cd c:\Users\Giovana\Documents\emoconnect\backend
npm start
```

### 3️⃣ Iniciar o Frontend React
```powershell
cd c:\Users\Giovana\Documents\emoconnect\frontend
npm run dev
```

### 4️⃣ Acessar a Aplicação
Abra seu navegador em: **http://localhost:5173**

## 🎯 O que foi convertido?

### ✅ Páginas HTML → React
- `static/html/login.html` → `src/pages/Login.jsx`
- `static/html/cadastro.html` → `src/pages/Register.jsx`
- `static/html/index.html` → `src/pages/Home.jsx`
- `static/html/chat.html` → `src/pages/Chat.jsx`
- `static/html/perfil.html` → `src/pages/Profile.jsx`

### ✅ Componentes Criados
- `Header.jsx` - Cabeçalho com navegação
- `Footer.jsx` - Rodapé
- `ProtectedRoute.jsx` - Proteção de rotas autenticadas

### ✅ Serviços e Contextos
- `AuthContext.jsx` - Gerenciamento de autenticação
- `authService.js` - Serviço de autenticação
- `api.js` - Cliente HTTP configurado

### ✅ Funcionalidades
- ✅ Sistema de login/cadastro
- ✅ Rotas protegidas
- ✅ Seleção de humor
- ✅ Interface de chat
- ✅ Gerenciamento de perfil
- ✅ Tema claro/escuro
- ✅ Design responsivo

## 📂 Nova Estrutura

```
frontend/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── services/        # APIs e serviços
│   ├── contexts/        # Contextos React
│   ├── hooks/           # Hooks customizados
│   └── utils/           # Utilitários
├── public/
└── index.html
```

## 🔧 Tecnologias Usadas

- ⚛️ **React 19** - Framework UI
- 🚦 **React Router** - Roteamento
- 📡 **Axios** - Requisições HTTP
- ⚡ **Vite** - Build tool ultra-rápido
- 🎨 **CSS Modules** - Estilos por componente

## 🎨 Estilos

Todos os estilos CSS foram preservados e organizados:
- Cada componente tem seu próprio arquivo CSS
- `App.css` e `index.css` para estilos globais
- Tema escuro mantido

## 🔐 Autenticação

```jsx
import { useAuth } from './contexts/AuthContext';

function MeuComponente() {
  const { user, login, logout, isAuthenticated } = useAuth();
  
  // usar as funções...
}
```

## 🛣️ Rotas Disponíveis

- `/login` - Página de login (pública)
- `/cadastro` - Página de cadastro (pública)
- `/` - Home (protegida)
- `/chat` - Chat (protegida)
- `/perfil` - Perfil (protegida)

## 📝 Próximos Passos Opcionais

1. Adicionar mais funcionalidades do JavaScript original
2. Implementar testes
3. Adicionar TypeScript
4. Otimizar performance

## 💡 Dicas

- O backend precisa estar rodando na porta 3000
- O frontend usa proxy automático para `/api`
- Tokens são salvos no localStorage
- Rotas protegidas redirecionam para login

## 🐛 Problemas Comuns

### Erro de CORS
✅ O Vite está configurado com proxy para `/api` → `http://localhost:3000`

### Página em branco
1. Verifique o console do navegador (F12)
2. Certifique-se que o backend está rodando
3. Limpe o cache: `npm run dev -- --force`

### Token expirado
✅ Redirecionamento automático para login

---

🎉 **Pronto para usar!** Agora você tem uma SPA React moderna!
