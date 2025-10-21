# 🧠 EmoConnect Backend

API REST para o sistema EmoConnect - Plataforma de apoio à saúde mental.

## 📋 Pré-requisitos

- **Node.js** 18+
- **MySQL** 8.0+
- **npm** ou **yarn**

## 🚀 Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e configure suas credenciais:

```bash
copy .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Banco de Dados
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=giovana_tcc

# JWT
JWT_SECRET=chave_muito_segura_aqui
JWT_EXPIRES_IN=7d

# Gemini AI (opcional)
GEMINI_API_KEY=sua_chave_api

# Servidor
PORT=3000
NODE_ENV=development
```

### 3. Criar banco de dados

Execute o script de inicialização do banco:

```bash
npm run init-db
```

Este comando irá:

- Criar todas as tabelas necessárias
- Criar índices e foreign keys
- Inserir usuário admin padrão

**Credenciais do Admin:**

- Email: `admin@emoconnect.com`
- Senha: `Admin@2025`

## 🏃 Executar o projeto

### Desenvolvimento (com auto-reload)

```bash
npm run dev
```

### Produção

```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`

## 📡 Endpoints da API

### 🔐 Autenticação (`/api/v1/auth`)

| Método | Endpoint    | Descrição               | Auth |
| ------ | ----------- | ----------------------- | ---- |
| POST   | `/cadastro` | Criar nova conta        | ❌   |
| POST   | `/login`    | Fazer login             | ❌   |
| GET    | `/me`       | Dados do usuário logado | ✅   |
| PUT    | `/perfil`   | Atualizar perfil        | ✅   |
| PUT    | `/senha`    | Alterar senha           | ✅   |

### 📊 Dados (`/api/v1/data`)

Todas as rotas requerem autenticação (Bearer Token)

| Método | Endpoint                          | Descrição                   |
| ------ | --------------------------------- | --------------------------- |
| GET    | `/humores/:usuario_id`            | Buscar humores              |
| POST   | `/humores`                        | Salvar humor                |
| GET    | `/atividades/:usuario_id`         | Buscar atividades           |
| POST   | `/atividades`                     | Salvar atividade            |
| GET    | `/mensagens/:usuario_id/:contato` | Buscar mensagens            |
| POST   | `/mensagens`                      | Salvar mensagem             |
| GET    | `/progresso/:usuario_id`          | Buscar progresso            |
| POST   | `/progresso`                      | Salvar progresso            |
| POST   | `/respiracao`                     | Salvar sessão de respiração |

### 👥 Admin (`/api/v1/admin`)

Rotas administrativas (requerem role `admin` ou `moderator`)

| Método | Endpoint        | Descrição           |
| ------ | --------------- | ------------------- |
| GET    | `/usuarios`     | Listar usuários     |
| GET    | `/usuarios/:id` | Detalhes de usuário |
| PUT    | `/usuarios/:id` | Atualizar usuário   |
| DELETE | `/usuarios/:id` | Desativar usuário   |

### 🤖 IA - Gemini (`/api/v1/chat`)

| Método | Endpoint  | Descrição   | Auth |
| ------ | --------- | ----------- | ---- |
| POST   | `/gemini` | Chat com IA | ❌   |

## 🗂️ Estrutura do Projeto

```
backend/
├── config/
│   └── database.js          # Configuração do MySQL
├── controllers/
│   ├── authController.js    # Lógica de autenticação
│   └── dataController.js    # Lógica de dados
├── database/
│   ├── schema.sql           # Schema do banco
│   ├── init.js              # Script de inicialização
│   └── migrations/          # Migrações futuras
├── middleware/
│   ├── auth.js              # Middleware de autenticação JWT
│   └── checkRole.js         # Middleware de autorização
├── routes/
│   ├── auth.js              # Rotas de autenticação
│   ├── api.js               # Rotas de dados
│   └── admin.js             # Rotas administrativas
├── .env.example             # Exemplo de variáveis de ambiente
├── .gitignore               # Arquivos ignorados pelo git
├── index.js                 # Ponto de entrada da aplicação
└── package.json             # Dependências e scripts
```

## 🔒 Segurança

- ✅ Senhas criptografadas com bcrypt
- ✅ Autenticação JWT
- ✅ Helmet para headers de segurança
- ✅ Rate limiting (100 req/15min)
- ✅ CORS configurável
- ✅ Validação de inputs
- ✅ Prepared statements (proteção SQL injection)
- ✅ Autorização por roles

## 🛠️ Tecnologias

- **Express** - Framework web
- **MySQL2** - Driver MySQL
- **JWT** - Autenticação
- **Bcrypt** - Criptografia de senhas
- **Helmet** - Segurança HTTP
- **Winston** - Sistema de logs
- **Dotenv** - Variáveis de ambiente

## 📝 Logs

Logs são salvos em:

- `logs/error.log` - Apenas erros
- `logs/combined.log` - Todos os eventos

## 🐛 Troubleshooting

### Erro: "JWT_SECRET não configurado"

➡️ Crie o arquivo `.env` e defina `JWT_SECRET`

### Erro: "Cannot connect to MySQL"

➡️ Verifique se o MySQL está rodando
➡️ Confirme usuário/senha no `.env`

### Erro: "Database does not exist"

➡️ Execute `npm run init-db`

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique os logs em `logs/`
2. Confira as configurações do `.env`
3. Execute `npm run init-db` novamente

---

Desenvolvido com ❤️ para EmoConnect
