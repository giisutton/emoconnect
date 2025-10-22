# EmoConnect Frontend - React

Frontend da aplicação EmoConnect convertido de HTML estático para React com Vite.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **React Router DOM** - Roteamento de páginas
- **Axios** - Cliente HTTP para requisições
- **Vite** - Build tool e dev server
- **Font Awesome** - Ícones

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/              # Páginas da aplicação
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   ├── Chat.jsx
│   │   └── Profile.jsx
│   ├── services/           # Serviços e APIs
│   │   ├── api.js
│   │   └── authService.js
│   ├── contexts/           # Contextos React
│   │   └── AuthContext.jsx
│   ├── hooks/              # Hooks customizados
│   ├── utils/              # Utilitários
│   ├── App.jsx             # Componente principal
│   ├── App.css
│   ├── main.jsx            # Ponto de entrada
│   └── index.css
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Páginas Convertidas

### ✅ Páginas de Autenticação
- **Login** (`/login`) - Página de login com validação
- **Cadastro** (`/cadastro`) - Registro de novos usuários com seleção de avatar

### ✅ Páginas Principais (Protegidas)
- **Home** (`/`) - Dashboard principal com seleção de humor, dicas de bem-estar e comunidade
- **Chat** (`/chat`) - Interface de chat com IA e usuários
- **Perfil** (`/perfil`) - Gerenciamento de perfil, posts e configurações

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 16+ instalado
- Backend rodando na porta 3000

### Instalar Dependências
```bash
cd frontend
npm install
```

### Executar em Desenvolvimento
```bash
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 🔐 Autenticação

A autenticação é gerenciada através do **AuthContext** que provê:
- `login(email, senha)` - Fazer login
- `register(nome, email, senha, avatar)` - Criar conta
- `logout()` - Fazer logout
- `user` - Dados do usuário logado
- `isAuthenticated` - Status de autenticação

### Uso nos Componentes

```jsx
import { useAuth } from '../contexts/AuthContext';

function MeuComponente() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Olá, {user.nome}!</p>
      ) : (
        <p>Faça login</p>
      )}
    </div>
  );
}
```

## 🛣️ Rotas

### Rotas Públicas
- `/login` - Página de login
- `/cadastro` - Página de registro

### Rotas Protegidas (requerem autenticação)
- `/` - Home
- `/chat` - Chat
- `/perfil` - Perfil

As rotas protegidas redirecionam para `/login` se o usuário não estiver autenticado.

## 🎨 Estilos

Cada componente e página tem seu próprio arquivo CSS:
- `Component.jsx` → `Component.css`
- Estilos globais em `App.css` e `index.css`

### Tema Escuro
O botão de tema no header permite alternar entre tema claro e escuro (salvo no localStorage).

## 🌐 API

O frontend se comunica com o backend através do Axios configurado em `src/services/api.js`:

- **Base URL**: `/api/v1` (proxy configurado no Vite para `http://localhost:3000`)
- **Autenticação**: Token JWT enviado no header `Authorization: Bearer <token>`
- **Interceptors**: Renovação automática do token e tratamento de erros 401

### Exemplo de Requisição

```javascript
import api from '../services/api';

// Requisição autenticada automática
const response = await api.get('/auth/me');
```

## 📝 Diferenças do HTML Original

### Melhorias Implementadas
1. **SPA (Single Page Application)** - Navegação sem recarregar a página
2. **State Management** - Gerenciamento de estado com React Context
3. **Componentização** - Código reutilizável e modular
4. **Roteamento** - React Router para navegação
5. **Build Otimizado** - Vite para builds rápidos e otimizados
6. **TypeScript Ready** - Estrutura preparada para migração TypeScript

### Funcionalidades Mantidas
- ✅ Autenticação completa (login, cadastro, logout)
- ✅ Proteção de rotas
- ✅ Seleção de humor diário
- ✅ Dicas de bem-estar
- ✅ Interface de chat
- ✅ Perfil do usuário
- ✅ Tema claro/escuro
- ✅ Design responsivo

### Funcionalidades JavaScript Não Convertidas
Algumas funcionalidades JavaScript específicas dos arquivos `static/js/*.js` não foram totalmente implementadas e precisam ser adicionadas conforme necessário:
- Exercícios de respiração (overlay)
- Gráficos de progresso emocional
- Sistema de posts no mural
- Integração completa com IA no chat
- Galeria de fotos do perfil

## 🚧 Próximos Passos

1. **Implementar Funcionalidades JavaScript Restantes**
   - Sistema de posts
   - Gráficos de humor
   - Exercício de respiração

2. **Adicionar Testes**
   - Jest + React Testing Library
   - Testes unitários
   - Testes de integração

3. **Melhorias de Performance**
   - Code splitting
   - Lazy loading de componentes
   - Otimização de imagens

4. **Migração TypeScript** (opcional)
   - Tipagem estática
   - Melhor IntelliSense

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
npm run lint     # Executa o linter
```

## 🐛 Troubleshooting

### Erro de CORS
Se houver erros de CORS, verifique se:
1. O backend está rodando na porta 3000
2. O proxy está configurado corretamente no `vite.config.js`

### Token Expirado
Se o token expirar, o usuário será automaticamente redirecionado para `/login?expired=true`

### Página em Branco
1. Verifique o console do navegador
2. Certifique-se de que todas as dependências estão instaladas
3. Tente limpar o cache: `npm run dev -- --force`

## 📄 Licença

Este projeto faz parte do EmoConnect.

---

Desenvolvido com ❤️ usando React + Vite
