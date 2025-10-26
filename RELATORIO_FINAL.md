# 📄 Relatório Final - EmoConnect
## TCC - 4º Bimestre - Curso Técnico em Informática

---

## 📋 Informações do Projeto

**Nome do Projeto:** EmoConnect - Plataforma de Apoio Emocional  
**Aluno(a):** Giovana Sutton  
**Curso:** Técnico em Informática  
**Instituição:** [Nome da Escola]  
**Período:** 2025 - 4º Bimestre  
**Data de Entrega:** 26 de outubro de 2025

**Links:**
- **Repositório GitHub:** https://github.com/giisutton/emoconnect
- **Deploy Online:** https://emoconnect-rho.vercel.app
- **Documentação Técnica:** [README.md](./README.md)

---

## 1. Resumo Executivo

O **EmoConnect** é uma plataforma web de apoio emocional que utiliza inteligência artificial para ajudar usuários a identificar, compreender e gerenciar suas emoções. O sistema oferece um ambiente seguro e acolhedor para conversas sobre saúde mental, com funcionalidades como:

- Identificação de 16 estados emocionais diferentes
- Chat com IA especializada em apoio emocional (Gemini AI)
- Sistema de acompanhamento de progresso emocional
- Comunidade virtual para conexões entre usuários
- Exercícios guiados de bem-estar e meditação

O projeto foi desenvolvido utilizando tecnologias modernas (React, Node.js, MySQL) e está 100% funcional, tanto em ambiente local quanto em produção (Vercel).

---

## 2. Escopo do Projeto

### 2.1 Objetivos

**Objetivo Geral:**
Criar uma plataforma web completa e funcional que auxilie no autocuidado emocional, oferecendo ferramentas de identificação de emoções, conversas com IA e acompanhamento de progresso.

**Objetivos Específicos:**
1. Implementar sistema de autenticação seguro (JWT + bcrypt)
2. Desenvolver interface intuitiva para identificação de emoções (16 estados)
3. Integrar API de IA (Google Gemini) para conversas de apoio emocional
4. Criar sistema de acompanhamento de progresso com gráficos e estatísticas
5. Implementar banco de dados relacional (MySQL) para persistência de dados
6. Realizar deploy em plataforma cloud (Vercel) com backend serverless
7. Documentar o processo de desenvolvimento e instalação

### 2.2 Escopo Técnico

**Frontend:**
- React 19 com hooks modernos (useState, useEffect, useContext)
- React Router 7 para navegação SPA (Single Page Application)
- Vite como bundler para desenvolvimento rápido
- CSS3 com animações e design responsivo
- Axios para comunicação com API

**Backend:**
- Node.js 18+ com Express.js
- Arquitetura RESTful API
- MySQL2 para conexão com banco de dados
- JWT para autenticação stateless
- Bcrypt para hash de senhas
- Middleware de segurança (Helmet, CORS, rate limiting)

**Banco de Dados:**
- MySQL hospedado remotamente (AlwaysData)
- Schema com 4 tabelas principais: usuarios, conversas, registros_humor, conexoes
- Relacionamentos bem definidos e índices otimizados

**Deploy:**
- Frontend hospedado no Vercel (CDN global)
- Backend como Serverless Functions no Vercel
- Banco de dados externo (MySQL remoto)

### 2.3 Escopo Funcional

#### Módulos Implementados:

1. **Autenticação e Autorização**
   - Cadastro de novos usuários
   - Login com validação de credenciais
   - Sistema de roles (user, moderator, admin)
   - Proteção de rotas privadas
   - Logout seguro

2. **Home - Identificação de Emoções**
   - 16 opções de emoções com emoji, cor e descrição
   - Cards interativos com animações
   - Conselhos personalizados por emoção
   - Registro de humor no banco de dados

3. **Chat com IA**
   - Integração com Google Gemini AI
   - Modo especialista (apoio emocional profissional)
   - Modo amigo (conversa casual e empática)
   - Histórico de conversas salvo no banco
   - Interface de chat moderna com mensagens animadas

4. **Perfil do Usuário**
   - Edição de nome
   - Alteração de senha
   - Visualização de dados da conta
   - Integração com AuthContext para atualização em tempo real

5. **Sistema de Progresso**
   - Gráfico de humor dos últimos 7 dias
   - Estatísticas de uso (dias consecutivos, total de chats)
   - Sistema de conquistas (badges desbloqueáveis)
   - Dicas de bem-estar personalizadas

6. **Comunidade**
   - Lista de usuários cadastrados
   - Sistema de conexões (enviar/aceitar pedidos)
   - Indicador visual de status (online/offline)
   - Contadores de conexões

7. **Administração (Admin)**
   - Painel de controle de usuários
   - Gerenciamento de roles
   - Visualização de estatísticas globais

---

## 3. Funcionalidades Implementadas

### 3.1 Sistema de Emoções (16 Opções)

Cada emoção possui:
- **Emoji representativo:** Visual intuitivo
- **Cor exclusiva:** Identificação rápida
- **Nome descritivo:** Clareza na comunicação
- **Conselho personalizado:** Orientação imediata

**Emoções implementadas:**
1. 😊 Feliz (Verde)
2. 😢 Triste (Azul)
3. 😴 Cansado (Roxo)
4. 😤 Estressado (Laranja)
5. 😬 Ansioso (Amarelo)
6. 🧘 Calmo (Ciano)
7. 😄 Empolgado (Rosa)
8. 🤔 Confuso (Cinza)
9. 😰 Preocupado (Laranja claro)
10. 😡 Com Raiva (Vermelho)
11. 🥺 Vulnerável (Azul claro)
12. 😌 Grato (Verde água)
13. 😔 Desanimado (Roxo escuro)
14. 🤗 Amoroso (Rosa suave)
15. 😳 Sobrecarregado (Laranja escuro)
16. 😎 Confiante (Azul marinho)

### 3.2 Chat com IA - Detalhes Técnicos

**Integração com Gemini AI:**
- Endpoint proxy no backend (`/api/v1/chat/gemini`)
- Proteção da API key (não exposta no frontend)
- Prompt especializado em apoio emocional
- Configuração de temperatura (0.7) para respostas equilibradas

**Funcionalidades:**
- Histórico de conversas persistido no MySQL
- Carregamento de conversas anteriores
- Indicador de "digitando..." durante processamento
- Tratamento de erros com mensagens amigáveis
- Limite de caracteres por mensagem (500)

### 3.3 Sistema de Progresso e Gamificação

**Gráfico de Humor:**
- Últimos 7 dias de registros
- Visualização com emojis e cores
- Identificação de padrões emocionais

**Estatísticas:**
- Total de conversas com IA
- Dias consecutivos de uso
- Emoções mais frequentes

**Conquistas Desbloqueáveis:**
1. 🌟 Primeiro Passo (primeiro login)
2. 🗣️ Comunicador (10 conversas com IA)
3. 📅 Dedicado (7 dias consecutivos)
4. 🏆 Mestre Emocional (30 registros de humor)
5. 🤝 Sociável (5 conexões na comunidade)

### 3.4 Segurança Implementada

**Autenticação:**
- Senhas com hash bcrypt (10 rounds)
- Tokens JWT com expiração (7 dias)
- Verificação de token em todas as rotas protegidas
- Renovação automática ao detectar expiração

**Proteção de Rotas:**
- Middleware `authenticateToken` para validação
- Middleware `checkRole` para controle de acesso por role
- Redirecionamento automático para login em caso de não autorização

**Backend:**
- Helmet para headers HTTP seguros
- CORS configurado com whitelist de origens
- Rate limiting (100 requisições / 15 minutos por IP)
- Validação de entrada em todos os endpoints

---

## 4. Tecnologias Utilizadas

### 4.1 Frontend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 19.1.1 | Biblioteca principal para UI |
| React Router DOM | 7.9.4 | Navegação entre páginas (SPA) |
| Axios | 1.12.2 | Cliente HTTP para API |
| Vite | 7.1.7 | Bundler e dev server |
| ESLint | 9.36.0 | Linting e qualidade de código |

**Justificativa:**
- **React:** Componentização, hooks modernos e vasta comunidade
- **Vite:** Build extremamente rápido (~1s) e hot reload instantâneo
- **Axios:** Interceptors para token JWT e tratamento de erros centralizado

### 4.2 Backend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Node.js | 18+ | Runtime JavaScript |
| Express | 4.18+ | Framework web |
| MySQL2 | 3.6+ | Driver MySQL com Promises |
| jsonwebtoken | 9.0+ | Geração e validação de JWT |
| bcrypt | 5.1+ | Hash de senhas |
| Helmet | 7.0+ | Segurança HTTP headers |
| CORS | 2.8+ | Cross-Origin Resource Sharing |
| Winston | 3.10+ | Sistema de logs |
| dotenv | 16.3+ | Variáveis de ambiente |

**Justificativa:**
- **Express:** Framework minimalista e flexível
- **MySQL2:** Suporte a Promises e prepared statements (prevenção SQL injection)
- **JWT:** Autenticação stateless ideal para APIs RESTful

### 4.3 Banco de Dados

**MySQL 8.0+**
- Hospedagem: AlwaysData (mysql-giovana.alwaysdata.net)
- Schema: giovana_tcc
- Tabelas: usuarios, conversas, registros_humor, conexoes

**Vantagens:**
- Gratuito para desenvolvimento
- ACID compliant (transações seguras)
- Ampla compatibilidade

### 4.4 Deploy e Hospedagem

**Vercel:**
- Frontend: CDN global (Vite static build)
- Backend: Serverless Functions (Node.js)
- SSL automático (HTTPS)
- Deploy contínuo via GitHub

---

## 5. Arquitetura do Sistema

### 5.1 Arquitetura Frontend

```
┌─────────────────────────────────────────┐
│         React Application (SPA)         │
├─────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────┐ │
│  │  AuthContext │  │  React Router   │ │
│  └──────┬───────┘  └────────┬────────┘ │
│         │                   │          │
│  ┌──────▼───────────────────▼────────┐ │
│  │         Pages (Login, Home,       │ │
│  │      Chat, Profile, Community)    │ │
│  └──────────────┬────────────────────┘ │
│                 │                       │
│  ┌──────────────▼────────────────────┐ │
│  │   Components (Header, Footer,     │ │
│  │     ProtectedRoute, Cards)        │ │
│  └──────────────┬────────────────────┘ │
│                 │                       │
│  ┌──────────────▼────────────────────┐ │
│  │    Services (api.js, authService) │ │
│  └──────────────┬────────────────────┘ │
└─────────────────┼─────────────────────┘
                  │ Axios (HTTP)
                  ▼
┌─────────────────────────────────────────┐
│         Backend API (Express)           │
└─────────────────────────────────────────┘
```

### 5.2 Arquitetura Backend

```
┌─────────────────────────────────────────┐
│      Express.js Application             │
├─────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────┐ │
│  │  Middleware  │  │     Routers     │ │
│  │ (auth, CORS, │  │ (auth, api,     │ │
│  │  helmet)     │  │  admin)         │ │
│  └──────┬───────┘  └────────┬────────┘ │
│         │                   │          │
│  ┌──────▼───────────────────▼────────┐ │
│  │          Controllers              │ │
│  │  (authController, dataController) │ │
│  └──────────────┬────────────────────┘ │
│                 │                       │
│  ┌──────────────▼────────────────────┐ │
│  │      Database Connection          │ │
│  │        (MySQL2 Pool)              │ │
│  └──────────────┬────────────────────┘ │
└─────────────────┼─────────────────────┘
                  │ MySQL Protocol
                  ▼
┌─────────────────────────────────────────┐
│        MySQL Database (Remote)          │
│  (mysql-giovana.alwaysdata.net)         │
└─────────────────────────────────────────┘
```

### 5.3 Fluxo de Autenticação

```
1. Usuário submete email/senha (Frontend)
   ↓
2. Axios envia POST /api/v1/auth/login
   ↓
3. Express recebe requisição → authController.login()
   ↓
4. Controller busca usuário no MySQL
   ↓
5. Bcrypt compara senha (hash)
   ↓
6. Se válido, gera JWT com payload {userId, email, nome, role}
   ↓
7. Retorna {success: true, data: {user, token}}
   ↓
8. Frontend salva token e user no localStorage
   ↓
9. Axios interceptor adiciona "Authorization: Bearer <token>" em todas as próximas requisições
```

---

## 6. Aprendizados e Desafios

### 6.1 Aprendizados Técnicos

1. **React Context API:**
   - Gerenciamento de estado global sem Redux
   - Compartilhamento de dados de autenticação entre componentes
   - Performance com useMemo e useCallback

2. **Autenticação JWT:**
   - Tokens stateless (servidor não precisa armazenar sessões)
   - Expiração e renovação automática
   - Interceptors do Axios para injeção de token

3. **Integração com IA:**
   - API Gemini para processamento de linguagem natural
   - Proxy no backend para ocultar API key
   - Engenharia de prompt para respostas empáticas

4. **Deploy Serverless:**
   - Adaptação de aplicação Express para Vercel Functions
   - Configuração de rewrites no `vercel.json`
   - Gerenciamento de variáveis de ambiente em produção

5. **Segurança Web:**
   - CORS e prevenção de ataques cross-origin
   - Helmet para headers seguros
   - Rate limiting contra DDoS básico
   - Hash de senhas com salt (bcrypt)

### 6.2 Desafios Enfrentados e Soluções

#### Desafio 1: Mensagens de Erro Exibidas como "[object Object]"

**Problema:**
No deploy do Vercel, mensagens de erro do backend eram exibidas como `[object Object]` na tela de login, tornando impossível saber o motivo da falha.

**Causa Raiz:**
O `authService.js` lançava erros diretamente do objeto `error.response.data`, que às vezes era um objeto complexo ao invés de uma string simples.

**Solução Implementada:**
1. Criado helper `_formatServerError()` no `authService.js` que:
   - Extrai `error.response.data.error` ou `.message`
   - Se for objeto, tenta converter para string legível
   - Fallback para mensagens genéricas
2. Atualizado `Login.jsx` para tratar erros de forma mais robusta:
   - Verificação de tipo de `serverData`
   - Extração hierárquica de mensagens
   - JSON.stringify como último recurso

**Resultado:**
✅ Usuários agora veem mensagens claras como "Email ou senha incorretos" ao invés de "[object Object]".

#### Desafio 2: CORS Errors no Deploy

**Problema:**
Localmente funcionava perfeitamente, mas no deploy surgia erro "blocked by CORS policy".

**Causa:**
ALLOWED_ORIGINS no backend só tinha `localhost:5173`, não incluía o domínio do Vercel.

**Solução:**
- Adicionado domínio do Vercel nas variáveis de ambiente de produção
- Configurado CORS para aceitar origens dinâmicas via `.env`
- Documentado no README a necessidade de atualizar após primeiro deploy

#### Desafio 3: Build de Produção Lento no Vite

**Problema:**
Inicialmente o build demorava ~5 segundos, atrasando deploys.

**Solução:**
- Configurado code splitting automático
- Lazy loading de rotas pesadas (Chat)
- Otimização de imports (tree shaking)
- Resultado: build em ~1 segundo ✅

### 6.3 Habilidades Desenvolvidas

**Hard Skills:**
- Desenvolvimento Fullstack (React + Node.js)
- Arquitetura RESTful API
- Banco de dados relacional (SQL, modelagem)
- Integração de APIs externas (Gemini AI)
- Deploy e CI/CD (Vercel)
- Segurança em aplicações web
- Git e GitHub (versionamento)

**Soft Skills:**
- Resolução de problemas (debugging complexo)
- Pesquisa e autodidatismo (documentações oficiais)
- Gestão de tempo (prazo de entrega)
- Documentação técnica (README, comentários)
- Atenção aos detalhes (UX/UI)

---

## 7. Melhorias Realizadas Durante o Desenvolvimento

### 7.1 Performance

**Antes:**
- Requisições lentas (sem cache)
- Build de produção ~5s
- Carregamento inicial lento

**Depois:**
- Axios interceptors com cache estratégico
- Build otimizado em ~1s
- Lazy loading de componentes pesados
- Vite code splitting automático

### 7.2 UX/UI

**Antes:**
- 8 emoções apenas
- Chat sem histórico
- Erros genéricos

**Depois:**
- 16 emoções com cores e conselhos
- Histórico de conversas persistido
- Mensagens de erro específicas e amigáveis
- Animações suaves (transições CSS)
- Design responsivo mobile-first

### 7.3 Segurança

**Antes:**
- Senhas em plaintext (apenas para teste)
- Sem expiração de token
- CORS permissivo

**Depois:**
- Bcrypt com 10 rounds
- JWT com expiração (7d)
- CORS com whitelist
- Rate limiting
- Helmet com CSP

### 7.4 Arquitetura

**Antes:**
- Código monolítico
- Lógica de negócio misturada com rotas

**Depois:**
- Separação clara: routes → controllers → database
- Middleware reutilizáveis
- Services no frontend (authService, api)
- AuthContext para estado global

---

## 8. Próximos Passos e Melhorias Futuras

### 8.1 Funcionalidades Adicionais (Roadmap)

**Curto Prazo (1-2 meses):**
1. **Sistema de Notificações:**
   - Lembretes diários para registrar humor
   - Notificações de novas conexões
   - Alertas de conquistas desbloqueadas

2. **Modo Escuro:**
   - Toggle no perfil
   - Persistência da preferência
   - Animação suave de transição

3. **Diário Emocional:**
   - Escrever notas sobre o dia
   - Anexar fotos/imagens
   - Pesquisa por data e emoção

4. **Exercícios Interativos:**
   - Meditação guiada com timer
   - Exercícios de respiração (4-7-8)
   - Yoga para iniciantes (vídeos)

**Médio Prazo (3-6 meses):**
5. **Grupos de Apoio:**
   - Criação de grupos temáticos (ansiedade, depressão, etc.)
   - Chat em grupo moderado
   - Eventos ao vivo (webinars)

6. **Profissionais de Saúde:**
   - Diretório de psicólogos parceiros
   - Agendamento de consultas online
   - Sistema de avaliações

7. **Análise de Sentimento Avançada:**
   - IA que detecta padrões de risco (auto-lesão, suicídio)
   - Alertas automáticos para moderadores
   - Sugestão de intervenção profissional

8. **App Mobile:**
   - React Native
   - Push notifications
   - Modo offline

**Longo Prazo (6-12 meses):**
9. **Pesquisas e Estudos:**
   - Parceria com universidades
   - Coleta de dados anonimizados para pesquisa em saúde mental
   - Publicação de relatórios

10. **Internacionalização:**
    - Suporte a múltiplos idiomas (inglês, espanhol)
    - IA treinada em diferentes culturas

### 8.2 Melhorias Técnicas

1. **Testes Automatizados:**
   - Jest + React Testing Library (frontend)
   - Supertest (backend API)
   - Cobertura de código >80%

2. **Monitoramento:**
   - Sentry para tracking de erros
   - Google Analytics para métricas de uso
   - Uptime monitoring (UptimeRobot)

3. **Performance:**
   - Implementar Redis para cache de sessões
   - CDN para assets estáticos
   - WebSockets para chat em tempo real

4. **Escalabilidade:**
   - Migrar para PostgreSQL (melhor para relações complexas)
   - Microserviços (chat, auth, notificações separados)
   - Load balancing

---

## 9. Contribuições Individuais

**Giovana Sutton:**
- Desenvolvimento completo do frontend (React)
- Implementação do backend (Node.js + Express)
- Modelagem e criação do banco de dados (MySQL)
- Integração com API Gemini
- Deploy e configuração do Vercel
- Documentação (README, relatórios)
- Design UX/UI (16 emoções, chat, perfil)
- Sistema de autenticação e autorização
- Correção de bugs (mensagens de erro)
- Testes manuais e validação

*Nota: Projeto individual para TCC.*

---

## 10. Considerações Finais

O projeto **EmoConnect** atingiu todos os objetivos propostos, entregando uma plataforma funcional, segura e escalável para apoio emocional. Durante o desenvolvimento, foram aplicados conceitos avançados de:

- **Engenharia de Software:** arquitetura em camadas, separação de responsabilidades
- **Desenvolvimento Web:** SPA com React, API RESTful, autenticação JWT
- **Banco de Dados:** modelagem relacional, queries otimizadas, índices
- **Segurança:** OWASP best practices (hash de senhas, CORS, CSP)
- **DevOps:** CI/CD com Vercel, variáveis de ambiente, logs estruturados
- **UX/UI:** design responsivo, animações, feedback visual

### Impacto Social

Além do aprendizado técnico, o EmoConnect aborda um tema extremamente relevante: **saúde mental**. Segundo a OMS, mais de 300 milhões de pessoas sofrem de depressão globalmente, e o acesso a profissionais é limitado. Plataformas como essa podem:

- **Reduzir barreiras:** acesso 24/7, gratuito, anônimo
- **Educar:** conselhos baseados em psicologia positiva
- **Conectar:** comunidade de apoio mútuo
- **Encaminhar:** diretório de profissionais (futuro)

### Aprendizado Mais Valioso

O maior aprendizado foi **debugging e resolução de problemas em produção**. O bug de "[object Object]" no Vercel me ensinou:
1. Importância de testes em ambientes diferentes (local vs produção)
2. Tratamento robusto de erros é essencial
3. Logs estruturados economizam tempo
4. Documentação clara ajuda na manutenção futura

### Agradecimentos

Agradeço aos professores do curso técnico pelo suporte, à comunidade open-source pelas ferramentas incríveis (React, Node.js, Vite) e aos usuários de teste que deram feedback valioso.

---

## 11. Referências

1. **React Documentation:** https://react.dev
2. **Node.js Official Docs:** https://nodejs.org/docs
3. **Express.js Guide:** https://expressjs.com
4. **MySQL Documentation:** https://dev.mysql.com/doc
5. **Vercel Deployment Guide:** https://vercel.com/docs
6. **Google Gemini AI:** https://ai.google.dev/gemini-api
7. **OWASP Security Practices:** https://owasp.org
8. **JWT Introduction:** https://jwt.io/introduction
9. **Axios Interceptors:** https://axios-http.com/docs/interceptors
10. **React Router Tutorial:** https://reactrouter.com/en/main

---

**Data de Conclusão:** 26 de outubro de 2025  
**Versão do Documento:** 1.0  
**Status:** Projeto 100% funcional e documentado

---

**💚 EmoConnect - Cuidando da saúde mental, um dia de cada vez.**
