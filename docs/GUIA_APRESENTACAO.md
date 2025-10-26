# 🎤 Guia de Apresentação - EmoConnect
## Apresentação Av2 - A partir de 30/10/2025

---

## 📋 Informações da Apresentação

**Duração Recomendada:** 10-15 minutos  
**Formato:** Apresentação de slides + demonstração ao vivo  
**Materiais Necessários:**
- Notebook com acesso à internet
- Projetor/TV
- Navegador aberto em https://emoconnect-rho.vercel.app
- (Opcional) Backup local rodando (start-all.ps1)

---

## 🎯 Estrutura da Apresentação (Slides)

### Slide 1: Capa
```
╔═══════════════════════════════════════════╗
║                                           ║
║       🌟 EmoConnect                       ║
║                                           ║
║   Plataforma de Apoio Emocional com IA    ║
║                                           ║
║   Giovana Sutton                          ║
║   Curso Técnico em Informática            ║
║   2025 - 4º Bimestre                      ║
║                                           ║
╚═══════════════════════════════════════════╝
```

**Roteiro (30 segundos):**
> "Bom dia/Boa tarde! Meu nome é Giovana Sutton e hoje vou apresentar o EmoConnect, uma plataforma web de apoio emocional que desenvolvi como projeto de TCC. O sistema utiliza inteligência artificial para ajudar usuários a cuidar de sua saúde mental."

---

### Slide 2: Contexto e Motivação
```
📊 POR QUE O EMOCONNECT?

❗ Problema:
• 300+ milhões sofrem de depressão (OMS)
• Acesso limitado a profissionais
• Estigma social sobre saúde mental
• Dificuldade em identificar emoções

💡 Solução:
• Plataforma acessível 24/7
• Gratuita e anônima
• Chat com IA especializada
• Comunidade de apoio
```

**Roteiro (1 minuto):**
> "A motivação para criar o EmoConnect veio de dados alarmantes da Organização Mundial da Saúde: mais de 300 milhões de pessoas sofrem de depressão globalmente, e o acesso a profissionais é limitado por custos, estigma e disponibilidade. O EmoConnect oferece uma solução acessível: uma plataforma gratuita, disponível 24 horas por dia, onde qualquer pessoa pode identificar suas emoções, conversar com uma IA treinada em apoio emocional e conectar-se com uma comunidade."

---

### Slide 3: Objetivos do Projeto
```
🎯 OBJETIVOS

Geral:
Criar uma plataforma web completa para
autocuidado emocional com IA

Específicos:
✅ Sistema de autenticação seguro (JWT)
✅ Identificação de 16 estados emocionais
✅ Chat com IA (Google Gemini)
✅ Acompanhamento de progresso
✅ Banco de dados relacional (MySQL)
✅ Deploy em cloud (Vercel)
```

**Roteiro (45 segundos):**
> "O objetivo geral foi criar uma plataforma completa e funcional. Os objetivos específicos incluíram implementar autenticação segura, desenvolver um sistema para identificar 16 emoções diferentes, integrar IA para conversas empáticas, criar um banco de dados para persistir informações e realizar o deploy em uma plataforma cloud para que qualquer pessoa possa acessar."

---

### Slide 4: Tecnologias Utilizadas
```
💻 STACK TECNOLÓGICO

Frontend:
• React 19 (biblioteca UI)
• Vite (bundler rápido)
• React Router (navegação SPA)
• Axios (cliente HTTP)

Backend:
• Node.js 18 + Express
• MySQL (banco de dados)
• JWT (autenticação)
• Bcrypt (segurança)

Inteligência Artificial:
• Google Gemini AI
```

**Roteiro (1 minuto):**
> "Para o desenvolvimento, utilizei um stack moderno e robusto. No frontend, React 19 com Vite para um desenvolvimento extremamente rápido. No backend, Node.js com Express para criar uma API RESTful segura. O banco de dados é MySQL hospedado remotamente. A autenticação utiliza JWT, que é um padrão stateless ideal para APIs. E para a inteligência artificial, integrei o Google Gemini, uma das IAs mais avançadas disponíveis."

---

### Slide 5: Principais Funcionalidades (Parte 1)
```
✨ FUNCIONALIDADES - PARTE 1

1. 🎭 Sistema de Emoções (16 opções)
   • Cada emoção com emoji, cor e conselho
   • Registro no banco de dados
   • Histórico de 7 dias

2. 🤖 Chat com IA Especializada
   • Modo Especialista (apoio profissional)
   • Modo Amigo (conversa casual)
   • Histórico de conversas salvo
```

**Roteiro (1 minuto):**
> "A primeira funcionalidade principal é o sistema de 16 emoções. O usuário seleciona como está se sentindo — feliz, triste, ansioso, confiante, etc. — e o sistema registra no banco e fornece conselhos personalizados. A segunda é o chat com IA, onde implementei dois modos: o modo especialista, que simula uma conversa com um psicólogo, e o modo amigo, mais casual. Todo o histórico é salvo para acompanhamento."

---

### Slide 6: Principais Funcionalidades (Parte 2)
```
✨ FUNCIONALIDADES - PARTE 2

3. 📈 Sistema de Progresso
   • Gráfico de humor (últimos 7 dias)
   • Estatísticas de uso
   • Conquistas desbloqueáveis

4. 🤝 Comunidade
   • Perfis de usuários
   • Sistema de conexões
   • Chat entre membros (futuro)
```

**Roteiro (45 segundos):**
> "Também implementei um sistema de progresso que mostra um gráfico dos últimos 7 dias de humor, estatísticas de uso e conquistas desbloqueáveis para gamificação. E há uma seção de comunidade onde usuários podem se conectar, criar uma rede de apoio mútuo."

---

### Slide 7: Arquitetura do Sistema
```
🏗️ ARQUITETURA

┌─────────────────────────────────┐
│     Frontend (React + Vite)     │
│     Hospedado no Vercel CDN     │
└────────────┬────────────────────┘
             │ HTTP/HTTPS
             ▼
┌─────────────────────────────────┐
│  Backend (Express Serverless)   │
│    Vercel Functions (Node.js)   │
└────────────┬────────────────────┘
             │ MySQL Protocol
             ▼
┌─────────────────────────────────┐
│   Banco de Dados (MySQL)        │
│   AlwaysData (remoto)           │
└─────────────────────────────────┘
```

**Roteiro (1 minuto):**
> "A arquitetura segue o modelo cliente-servidor. O frontend React é servido via CDN global do Vercel, garantindo acesso rápido de qualquer lugar do mundo. O backend roda como Serverless Functions, também no Vercel, que escalam automaticamente conforme a demanda. O banco de dados MySQL está hospedado remotamente no AlwaysData. Toda comunicação entre frontend e backend usa HTTPS com autenticação via token JWT."

---

### Slide 8: Segurança Implementada
```
🔒 SEGURANÇA

✅ Senhas com Hash (Bcrypt)
✅ Tokens JWT com Expiração (7 dias)
✅ CORS com Whitelist de Origens
✅ Helmet (Headers HTTP Seguros)
✅ Rate Limiting (100 req/15min)
✅ Validação de Entrada (SQL Injection)
✅ HTTPS Automático (SSL)

Boas Práticas OWASP ✔️
```

**Roteiro (1 minuto):**
> "A segurança foi uma prioridade desde o início. Todas as senhas são armazenadas com hash bcrypt, nunca em texto puro. Os tokens JWT expiram após 7 dias, forçando renovação. Configurei CORS para aceitar apenas domínios específicos, implementei rate limiting para prevenir ataques de força bruta, e o Helmet adiciona headers de segurança HTTP. O Vercel fornece SSL automático, então todo tráfego é criptografado via HTTPS. Segui as boas práticas da OWASP, que é referência mundial em segurança web."

---

### Slide 9: Desafios e Aprendizados
```
🎓 DESAFIOS E APRENDIZADOS

Maior Desafio:
❌ Mensagens de erro exibidas como
   "[object Object]" no deploy do Vercel

✅ Solução:
• Criado helper para formatar erros
• Melhorado tratamento no frontend
• Logs estruturados no backend

Aprendizado:
"Testar em ambiente de produção é
essencial - bugs podem não aparecer
em desenvolvimento local."
```

**Roteiro (1 minuto 30 segundos):**
> "O maior desafio foi um bug que só apareceu em produção: mensagens de erro apareciam como '[object Object]' na tela de login, sem nenhuma informação útil. Depois de horas debugando, descobri que o backend às vezes retornava objetos complexos ao invés de strings simples, e o frontend não sabia como exibi-los. A solução foi criar um helper no serviço de autenticação que normaliza qualquer tipo de erro para uma mensagem legível. Esse desafio me ensinou que testar em ambiente de produção é absolutamente essencial — bugs podem não aparecer localmente."

---

### Slide 10: Resultados Alcançados
```
📊 RESULTADOS

✅ Projeto 100% Funcional
✅ Deploy Online (Vercel)
✅ Banco de Dados Operacional
✅ 16 Emoções Implementadas
✅ Chat com IA Integrado
✅ Autenticação Segura
✅ Build de Produção: ~1 segundo
✅ Zero Erros de Compilação
✅ Documentação Completa

🔗 Link: emoconnect-rho.vercel.app
📦 GitHub: github.com/giisutton/emoconnect
```

**Roteiro (1 minuto):**
> "Os resultados superaram as expectativas. O projeto está 100% funcional, com deploy online no Vercel acessível por qualquer pessoa com internet. Consegui implementar todas as funcionalidades planejadas: 16 emoções, chat com IA, sistema de progresso e comunidade. A autenticação é segura seguindo padrões da indústria. O build de produção é extremamente rápido, levando apenas 1 segundo, graças ao Vite. E toda a documentação está completa no README do GitHub, facilitando manutenção futura."

---

### Slide 11: Próximos Passos (Futuro)
```
🚀 ROADMAP FUTURO

Curto Prazo (1-2 meses):
• Sistema de notificações
• Modo escuro
• Diário emocional

Médio Prazo (3-6 meses):
• Grupos de apoio temáticos
• Diretório de profissionais
• App mobile (React Native)

Longo Prazo (6-12 meses):
• Parceria com universidades
• Internacionalização (EN, ES)
• Análise avançada com ML
```

**Roteiro (1 minuto):**
> "Quanto ao futuro, tenho um roadmap ambicioso. No curto prazo, planejo implementar notificações push, modo escuro e um diário emocional completo. No médio prazo, quero criar grupos de apoio temáticos — um para ansiedade, outro para depressão, etc. — e um diretório de psicólogos parceiros. Também desenvolver um app mobile com React Native. No longo prazo, a ideia é fazer parcerias com universidades para pesquisas em saúde mental, internacionalizar a plataforma e implementar análise de sentimento avançada com machine learning."

---

### Slide 12: Agradecimentos
```
💚 AGRADECIMENTOS

• Professores do curso técnico
• Comunidade open-source
  (React, Node.js, Vite)
• Usuários de teste
• Família e amigos

"Este projeto não seria possível sem o
apoio de todos vocês. Obrigada!"

📧 Contato: [seu_email@exemplo.com]
🔗 LinkedIn: [seu_perfil]
```

**Roteiro (30 segundos):**
> "Para finalizar, gostaria de agradecer aos professores pelo suporte durante todo o curso, à comunidade open-source que fornece ferramentas incríveis gratuitamente, aos usuários de teste que deram feedback valioso, e à minha família e amigos pelo apoio. Muito obrigada!"

---

### Slide 13: Demonstração ao Vivo
```
🖥️ DEMONSTRAÇÃO AO VIVO

Vamos ver o EmoConnect funcionando!

🔗 emoconnect-rho.vercel.app
```

**Roteiro (Transição para demo):**
> "Agora vou mostrar o sistema funcionando ao vivo. Abri aqui o deploy online no Vercel..."

---

## 🎬 Roteiro de Demonstração ao Vivo (5-7 minutos)

### Preparação Antes da Apresentação

1. **Abrir abas no navegador:**
   - Aba 1: https://emoconnect-rho.vercel.app (página de login)
   - Aba 2: https://github.com/giisutton/emoconnect (repositório)
   - Aba 3 (backup): http://localhost:5173 (se tiver rodando localmente)

2. **Ter credenciais prontas:**
   - Email: `teste@emoconnect.com`
   - Senha: `teste123`
   - (Ou criar conta nova ao vivo para mostrar o fluxo de cadastro)

3. **Zoom/aumento do navegador:**
   - Aumentar para 125% ou 150% para facilitar visualização no projetor

---

### Passo 1: Tela de Login (1 minuto)

**Ações:**
1. Mostrar a tela de login
2. Destacar design limpo e intuitivo
3. Clicar em "Cadastre-se" para mostrar tela de registro

**Narração:**
> "Esta é a tela de login do EmoConnect. Notem o design limpo, moderno e acolhedor — escolhi tons de roxo e azul que são associados a tranquilidade. Aqui embaixo tem um link para cadastro. Vou clicar para mostrar a tela de registro..."

**Ações no Cadastro:**
1. Mostrar campos (nome, email, senha, confirmação)
2. Voltar para login
3. Digitar credenciais de teste
4. Fazer login

**Narração:**
> "Na tela de cadastro, o usuário preenche nome, email e senha com confirmação. Há validações em tempo real — a senha precisa ter no mínimo 6 caracteres. Vou voltar para o login e entrar com uma conta de teste já criada..."

---

### Passo 2: Home - Sistema de Emoções (2 minutos)

**Ações:**
1. Mostrar a tela principal com 16 cards de emoções
2. Passar o mouse sobre alguns cards (mostrar hover effect)
3. Clicar em uma emoção (ex: "Ansioso 😬")
4. Mostrar o modal com conselho personalizado
5. Fechar modal
6. Clicar em outra emoção diferente (ex: "Confiante 😎")

**Narração:**
> "Após o login, o usuário é direcionado para a Home, onde vê 16 opções de emoções. Cada uma tem um emoji, uma cor única e uma descrição. Quando passo o mouse, vocês veem um efeito de hover suave. Vou clicar em 'Ansioso'... Aparece um modal com um conselho personalizado para quem está sentindo ansiedade. O sistema também registra esse sentimento no banco de dados para acompanhamento futuro. Vou clicar em outra emoção... 'Confiante'. Notem que o conselho é totalmente diferente, adaptado a cada estado emocional."

---

### Passo 3: Chat com IA (2 minutos)

**Ações:**
1. Navegar para a página "Chat"
2. Mostrar a interface do chat
3. Selecionar "Modo Especialista"
4. Digitar uma mensagem: "Estou me sentindo muito ansioso hoje, o que devo fazer?"
5. Enviar e esperar resposta da IA
6. Mostrar a resposta recebida
7. (Opcional) Enviar outra mensagem para mostrar continuidade da conversa

**Narração:**
> "Agora vou navegar para o Chat com IA. Aqui temos dois modos: Especialista, que simula uma conversa com um profissional de saúde mental, e Amigo, mais casual. Vou selecionar o modo Especialista. Agora vou digitar uma mensagem... 'Estou me sentindo muito ansioso hoje, o que devo fazer?'. Envio... E vejam a resposta. A IA Gemini foi treinada para responder de forma empática e profissional, oferecendo técnicas práticas como respiração profunda, exercícios físicos e mindfulness. Todo esse histórico é salvo no banco de dados, então o usuário pode voltar depois e reler as conversas."

---

### Passo 4: Perfil e Progresso (1 minuto)

**Ações:**
1. Navegar para "Perfil"
2. Mostrar dados do usuário
3. Scroll para a seção "Progresso"
4. Mostrar gráfico de humor (últimos 7 dias)
5. Mostrar estatísticas (total de conversas, dias consecutivos)
6. Mostrar conquistas desbloqueadas

**Narração:**
> "Na página de Perfil, o usuário pode editar suas informações e visualizar seu progresso. Aqui temos um gráfico mostrando o humor dos últimos 7 dias — é possível identificar padrões, como 'toda segunda-feira me sinto ansioso'. Abaixo, estatísticas de uso: total de conversas com a IA, dias consecutivos utilizando a plataforma. E aqui embaixo, o sistema de conquistas — badges que o usuário desbloqueia conforme usa a plataforma. Isso adiciona um elemento de gamificação que incentiva o uso contínuo."

---

### Passo 5: Comunidade (30 segundos)

**Ações:**
1. Navegar para "Comunidade"
2. Mostrar lista de usuários
3. Scroll pela página
4. (Opcional) Mostrar botão de "Conectar"

**Narração:**
> "E finalmente, a seção de Comunidade. Aqui os usuários podem ver outros membros da plataforma, enviar pedidos de conexão e criar uma rede de apoio. No futuro, planejo implementar chat privado entre membros e grupos de apoio temáticos."

---

### Passo 6: Código no GitHub (Opcional - 1 minuto)

**Ações:**
1. Alternar para aba do GitHub
2. Mostrar estrutura do repositório
3. Destacar README completo
4. Scroll para mostrar documentação
5. (Opcional) Abrir um arquivo de código (ex: `authService.js`)

**Narração:**
> "Rapidamente, quero mostrar o repositório no GitHub. Todo o código está organizado, versionado e bem documentado. O README contém instruções completas de instalação, configuração de variáveis de ambiente, comandos para rodar localmente e documentação técnica. Aqui vocês podem ver a estrutura de pastas — backend, frontend, database. E aqui, por exemplo, o arquivo de serviço de autenticação que comentei sobre o bug de '[object Object]'."

---

### Passo 7: Finalização da Demo (30 segundos)

**Ações:**
1. Voltar para o deploy online
2. Fazer logout
3. Voltar para a apresentação de slides

**Narração:**
> "E pronto! Essa foi uma demonstração completa do EmoConnect funcionando ao vivo. Qualquer pessoa pode acessar agora mesmo pelo link emoconnect-rho.vercel.app e começar a usar. Vou fazer logout aqui e voltar para finalizar a apresentação..."

---

## 📊 Slide Final: Perguntas
```
❓ PERGUNTAS?

Giovana Sutton
📧 Email: [seu_email@exemplo.com]
🔗 GitHub: github.com/giisutton/emoconnect
🌐 Deploy: emoconnect-rho.vercel.app

Obrigada pela atenção! 💚
```

**Roteiro:**
> "E isso conclui minha apresentação. Estou aberta para perguntas! Muito obrigada pela atenção de todos."

---

## 💡 Dicas para a Apresentação

### Antes da Apresentação

1. **Ensaiar:** Pratique a apresentação pelo menos 3 vezes
2. **Tempo:** Cronometre para garantir que fica entre 10-15 minutos
3. **Backup:** Tenha o projeto rodando localmente (start-all.ps1) caso a internet falhe
4. **Print Screens:** Tire screenshots de cada tela como backup se o site cair
5. **Testar Projetor:** Chegue cedo para testar resolução e zoom do navegador

### Durante a Apresentação

1. **Postura:** Fale com confiança — você domina o projeto!
2. **Contato Visual:** Olhe para a plateia, não só para o projesor
3. **Velocidade:** Fale devagar e articulado
4. **Pausas:** Faça pausas após conceitos importantes
5. **Demonstração:** Não tenha medo de erros — mostre que sabe debugar se algo falhar

### Perguntas Frequentes e Respostas

**Q: Quanto tempo levou para desenvolver?**  
A: "Aproximadamente 2 meses de desenvolvimento ativo, incluindo pesquisa, codificação, testes e deploy."

**Q: Por que escolheu React ao invés de outras bibliotecas/frameworks?**  
A: "React tem uma curva de aprendizado suave, vasta comunidade, documentação excelente e é amplamente usado na indústria. Além disso, os hooks modernos tornam o código muito limpo e funcional."

**Q: Como garantiu a segurança das senhas?**  
A: "Utilizo bcrypt, que é um algoritmo de hash com salt. As senhas nunca são armazenadas em texto puro — apenas o hash. Mesmo se alguém acessar o banco de dados, não conseguirá ler as senhas."

**Q: A IA pode substituir um psicólogo?**  
A: "Absolutamente não. O EmoConnect é uma ferramenta de APOIO emocional, não tratamento. Em casos graves, o sistema deve encaminhar para profissionais qualificados. É um complemento, não uma substituição."

**Q: Quanto custa manter o sistema no ar?**  
A: "Atualmente, o custo é ZERO. Vercel oferece hospedagem gratuita para projetos pessoais, e o banco MySQL está em um tier gratuito do AlwaysData. Se escalar, haverá custos, mas para milhares de usuários ainda seria muito barato."

**Q: Como você testou o sistema?**  
A: "Testes manuais extensivos localmente, testes em ambiente de produção (Vercel), e pedi feedback de amigos e familiares. No futuro, pretendo implementar testes automatizados com Jest e React Testing Library."

**Q: O que foi mais difícil?**  
A: "Definitivamente o bug de '[object Object]' no deploy. Gastei horas debugando porque funcionava perfeitamente local, mas quebrava em produção. Me ensinou muito sobre diferenças entre ambientes e a importância de tratamento robusto de erros."

**Q: Por que não usou TypeScript?**  
A: "Decisão de escopo. JavaScript já era suficiente para o projeto, e adicionar TypeScript aumentaria significativamente a complexidade e tempo de desenvolvimento. Para uma v2.0, TypeScript seria uma ótima adição."

---

## 📁 Estrutura Sugerida dos Slides (Arquivo)

Crie um arquivo PowerPoint (.pptx) ou Google Slides com:

- **Capa:** Título, seu nome, curso
- **Slides de Conteúdo:** 10-12 slides conforme estrutura acima
- **Slide de Demo:** Apenas título "Demonstração ao Vivo"
- **Slide de Perguntas:** Seus contatos

**Design:**
- Fundo: Gradiente roxo/azul (cores do EmoConnect)
- Fonte: Sans-serif moderna (Open Sans, Roboto, Montserrat)
- Tamanho: Títulos 36pt, texto 24pt (legível de longe)
- Ícones: Emojis coloridos para visual amigável
- Imagens: Screenshots do sistema nas principais funcionalidades

---

## ✅ Checklist Final Antes da Apresentação

- [ ] Slides prontos e revisados
- [ ] Ensaio completo realizado (3x)
- [ ] Deploy online testado e funcionando
- [ ] Conta de teste criada (email/senha memorizada)
- [ ] Backup local rodando (start-all.ps1)
- [ ] Screenshots de todas as telas (backup)
- [ ] Navegador com abas abertas (deploy, GitHub)
- [ ] Zoom aumentado no navegador (125-150%)
- [ ] Notebook carregado (bateria cheia)
- [ ] Adaptador HDMI/VGA (se necessário)
- [ ] Água/voz descansada

---

**💚 Boa sorte na apresentação! Você vai arrasar! 🚀**

---

## 📝 Template de Script Completo (15 minutos)

### Abertura (30 segundos)
"Bom dia/Boa tarde a todos! Meu nome é Giovana Sutton e hoje vou apresentar o EmoConnect, meu projeto de TCC. É uma plataforma web de apoio emocional que utiliza inteligência artificial. A apresentação vai durar cerca de 15 minutos, incluindo uma demonstração ao vivo. No final, fico à disposição para perguntas."

### Introdução ao Problema (1 minuto)
"Antes de mostrar o projeto, quero contextualizar por que ele existe. Segundo a Organização Mundial da Saúde, mais de 300 milhões de pessoas sofrem de depressão no mundo. Aqui no Brasil, a ansiedade afeta 1 em cada 4 adultos. O acesso a profissionais de saúde mental é limitado por custos — uma sessão com psicólogo pode custar R$ 150-300 —, por estigma social, e por disponibilidade de horários. Foi pensando nisso que criei o EmoConnect: uma ferramenta gratuita, acessível 24 horas por dia, que ajuda pessoas a cuidar de sua saúde emocional."

### Objetivos (1 minuto)
"O objetivo geral do projeto foi desenvolver uma plataforma web completa e funcional para autocuidado emocional, integrando inteligência artificial. Os objetivos específicos incluíram: implementar um sistema de autenticação seguro usando JWT, criar um sistema de identificação de 16 estados emocionais diferentes, integrar a API do Google Gemini para conversas empáticas, desenvolver um banco de dados relacional com MySQL, e realizar o deploy em uma plataforma cloud para que qualquer pessoa possa acessar."

### Tecnologias (1 minuto 30 segundos)
"Para alcançar esses objetivos, utilizei um stack tecnológico moderno. No frontend, React 19, que é a biblioteca JavaScript mais popular atualmente, com mais de 200 mil estrelas no GitHub. Vite como bundler, que é extremamente rápido — o build leva apenas 1 segundo. React Router para navegação sem recarregar a página, e Axios para comunicação com a API. No backend, Node.js 18 com Express, que é o framework web mais usado em Node. MySQL como banco de dados relacional, hospedado remotamente. Para autenticação, JSON Web Tokens, que é um padrão da indústria para APIs stateless. E para segurança, bcrypt para hash de senhas com salt. A inteligência artificial é o Google Gemini, uma das IAs mais avançadas disponíveis atualmente."

### Funcionalidades Principais (2 minutos)
"O EmoConnect tem 4 módulos principais. Primeiro, o sistema de identificação de emoções: 16 opções diferentes — feliz, triste, ansioso, confiante, vulnerável, grato, entre outras. Cada emoção tem um emoji, uma cor exclusiva e um conselho personalizado. Quando o usuário seleciona uma emoção, o sistema registra no banco de dados para acompanhamento futuro. Segundo, o chat com IA especializada. Implementei dois modos: o modo especialista, que simula uma conversa com um psicólogo, e o modo amigo, mais casual. A IA foi configurada com um prompt específico para responder de forma empática e profissional. Terceiro, o sistema de progresso: um gráfico mostrando o humor dos últimos 7 dias, estatísticas de uso e conquistas desbloqueáveis — gamificação para incentivar uso contínuo. E quarto, a comunidade: uma rede social simples onde usuários podem se conectar e criar uma rede de apoio mútuo."

### Arquitetura (1 minuto 30 segundos)
"A arquitetura do sistema segue o modelo cliente-servidor com três camadas. A primeira camada é o frontend React, servido via CDN global do Vercel. Isso significa que os arquivos estáticos estão replicados em servidores ao redor do mundo, garantindo acesso rápido de qualquer lugar. A segunda camada é o backend Express rodando como Serverless Functions no Vercel. Serverless significa que não há um servidor sempre rodando — o código é executado sob demanda, escalando automaticamente. É muito econômico e eficiente. A terceira camada é o banco de dados MySQL hospedado remotamente no AlwaysData. Toda comunicação entre frontend e backend usa HTTPS com autenticação via token JWT. Quando o usuário faz login, recebe um token que é enviado em todas as requisições subsequentes, provando sua identidade."

### Segurança (1 minuto 30 segundos)
"Segurança foi uma prioridade desde o início. Implementei 7 camadas de proteção. Primeira: todas as senhas são armazenadas com hash bcrypt, que é um algoritmo de uma via — impossível reverter o hash para obter a senha original. Segunda: tokens JWT com expiração de 7 dias, forçando renovação periódica. Terceira: CORS configurado com whitelist — apenas domínios específicos podem fazer requisições à API. Quarta: Helmet, que adiciona headers HTTP de segurança, prevenindo ataques como XSS e clickjacking. Quinta: rate limiting de 100 requisições por IP a cada 15 minutos, prevenindo ataques de força bruta. Sexta: validação de entrada em todos os endpoints usando prepared statements do MySQL2, prevenindo SQL injection. E sétima: SSL automático fornecido pelo Vercel — todo tráfego é criptografado via HTTPS. Segui as boas práticas da OWASP, que é a referência mundial em segurança de aplicações web."

### Desafios (1 minuto 30 segundos)
"Como todo projeto, enfrentei desafios. O maior deles foi um bug que só apareceu em produção: quando o usuário errava email ou senha, a mensagem de erro aparecia como '[object Object]' na tela, sem nenhuma informação útil. Localmente funcionava perfeitamente. Passei horas debugando, analisando logs do Vercel, até descobrir a causa: o backend às vezes retornava objetos complexos com múltiplos níveis ao invés de strings simples, e o frontend tentava exibir esses objetos diretamente. A solução foi criar um helper no serviço de autenticação que normaliza qualquer tipo de erro — seja string, objeto, array — para uma mensagem legível. Também melhorei o tratamento de erros no componente de login, fazendo verificação hierárquica: primeiro tenta extrair 'error', depois 'message', depois tenta JSON.stringify, e por último exibe uma mensagem genérica. Esse desafio me ensinou uma lição valiosa: sempre testar em ambiente de produção, pois bugs podem não aparecer em desenvolvimento local devido a diferenças de configuração."

### Resultados (1 minuto)
"Os resultados superaram minhas expectativas. O projeto está 100% funcional com deploy online acessível em emoconnect-rho.vercel.app. Consegui implementar todas as funcionalidades planejadas: 16 emoções, chat com IA, progresso e comunidade. A autenticação é segura seguindo padrões da indústria. O build de produção é extremamente rápido — apenas 1 segundo graças ao Vite. Não há nenhum erro de compilação. E toda a documentação está completa no README do GitHub, com mais de 300 linhas de instruções, incluindo instalação local, configuração de variáveis de ambiente, comandos para deploy e troubleshooting. O repositório está organizado, versionado com Git e pode ser clonado e rodado localmente por qualquer desenvolvedor."

### Demonstração (5-7 minutos)
[Seguir roteiro de demonstração detalhado acima]

### Futuro (1 minuto)
"Quanto ao futuro, tenho um roadmap ambicioso dividido em três fases. No curto prazo, nos próximos 1 a 2 meses, planejo implementar sistema de notificações push para lembrar usuários de registrar seu humor, modo escuro para uso noturno e um diário emocional completo onde usuários podem escrever notas e anexar fotos. No médio prazo, 3 a 6 meses, quero criar grupos de apoio temáticos — um para ansiedade, outro para depressão, etc. —, um diretório de psicólogos parceiros com agendamento online e desenvolver um app mobile com React Native para acesso em smartphones. No longo prazo, 6 a 12 meses, a visão é fazer parcerias com universidades para pesquisas em saúde mental, internacionalizar a plataforma com suporte a inglês e espanhol e implementar análise avançada de sentimento com machine learning, detectando padrões de risco e sugerindo intervenção profissional quando necessário."

### Encerramento (30 segundos)
"Para concluir, gostaria de agradecer aos professores pelo suporte durante todo o curso técnico, à comunidade open-source que fornece ferramentas incríveis como React, Node.js e Vite gratuitamente, aos usuários de teste que deram feedback valioso e à minha família e amigos pelo apoio incondicional. O código completo está no GitHub em github.com/giisutton/emoconnect, e o deploy pode ser acessado agora mesmo em emoconnect-rho.vercel.app. Estou aberta para perguntas. Muito obrigada pela atenção!"

---

**Tempo Total:** ~15 minutos (ajustável conforme ritmo de fala)

**Última revisão:** 26 de outubro de 2025
