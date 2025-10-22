# 🚀 Deploy do EmoConnect no Vercel

## 📋 Pré-requisitos

1. ✅ Conta no Vercel (https://vercel.com)
2. ✅ Vercel CLI instalado (opcional, mas recomendado)
3. ✅ Repositório Git configurado (já feito!)

---

## 🎯 Opção 1: Deploy via Interface Web (Mais Fácil)

### Passo 1: Conectar ao Vercel
1. Acesse https://vercel.com
2. Faça login com sua conta do GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório **giisutton/emoconnect**

### Passo 2: Configurar o Projeto
```
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Passo 3: Configurar Variáveis de Ambiente

Na aba **"Environment Variables"**, adicione:

#### Backend (API)
```env
PORT=3000
NODE_ENV=production
DB_HOST=mysql-giovana.alwaysdata.net
DB_USER=giovana
DB_PASSWORD=gi170807
DB_NAME=giovana_tcc
JWT_SECRET=sua_chave_secreta_muito_segura_mude_isso
JWT_EXPIRES_IN=7d
ALLOWED_ORIGINS=https://seu-dominio.vercel.app
GEMINI_API_KEY=sua_chave_api_gemini
LOG_LEVEL=info
```

⚠️ **IMPORTANTE:** 
- Substitua `https://seu-dominio.vercel.app` pela URL que o Vercel gerar
- Use uma `JWT_SECRET` forte e única
- Configure sua chave da API Gemini

### Passo 4: Deploy
1. Clique em **"Deploy"**
2. Aguarde o build (leva ~2-3 minutos)
3. ✅ Pronto! Seu site estará no ar

---

## 🎯 Opção 2: Deploy via CLI

### Instalar Vercel CLI
```powershell
npm install -g vercel
```

### Login no Vercel
```powershell
vercel login
```

### Deploy
```powershell
# Na pasta raiz do projeto
cd c:\Users\Giovana\Documents\emoconnect
vercel
```

Siga as instruções no terminal:
1. **Set up and deploy?** → Yes
2. **Which scope?** → Sua conta
3. **Link to existing project?** → No
4. **Project name?** → emoconnect
5. **Directory?** → ./
6. **Override settings?** → No

### Deploy de Produção
```powershell
vercel --prod
```

---

## ⚙️ Configuração Específica para EmoConnect

### 1. Backend API
O backend precisa ser ajustado para funcionar no Vercel como serverless function.

**Criar:** `backend/api/index.js` (já configurado no vercel.json)

### 2. Frontend
O frontend já está pronto! O Vite build funciona perfeitamente no Vercel.

### 3. Banco de Dados
✅ Você já usa um banco MySQL remoto (alwaysdata), então está pronto!

---

## 🔧 Ajustes Necessários no Código

### 1. Atualizar CORS no Backend
O arquivo `backend/index.js` já está configurado para aceitar origins dinâmicas via `.env`.

Adicione no `.env` de produção:
```env
ALLOWED_ORIGINS=https://seu-dominio.vercel.app,https://www.seu-dominio.vercel.app
```

### 2. Atualizar URL da API no Frontend
Crie `frontend/.env.production`:
```env
VITE_API_URL=https://seu-dominio.vercel.app/api
```

---

## 📊 Estrutura de Deploy

```
emoconnect/
├── frontend/              # Deploy estático (Vite)
│   ├── dist/             # Build gerado
│   └── package.json
│
├── backend/              # API Serverless
│   ├── index.js
│   └── package.json
│
├── vercel.json           # Configuração do Vercel
└── .vercelignore         # Arquivos ignorados
```

---

## ✅ Checklist de Deploy

### Antes do Deploy
- [ ] Código commitado no Git
- [ ] Variáveis de ambiente preparadas
- [ ] JWT_SECRET alterado para produção
- [ ] CORS configurado com domínio do Vercel
- [ ] Build local testado (`npm run build`)

### Durante o Deploy
- [ ] Conectado ao repositório GitHub
- [ ] Variáveis de ambiente configuradas
- [ ] Build completado sem erros
- [ ] Domínio verificado

### Após o Deploy
- [ ] Site acessível
- [ ] Login funcionando
- [ ] API respondendo
- [ ] Banco de dados conectado
- [ ] Chat com IA operacional

---

## 🐛 Troubleshooting

### Erro: "Build Failed"
**Solução:**
1. Verifique os logs no Vercel
2. Rode `npm run build` localmente
3. Corrija erros e faça novo commit

### Erro: "API not responding"
**Solução:**
1. Verifique variáveis de ambiente
2. Confirme que `ALLOWED_ORIGINS` está correto
3. Verifique logs da função serverless

### Erro: "Database connection failed"
**Solução:**
1. Confirme credenciais do MySQL no Vercel
2. Teste conexão com banco remoto
3. Verifique firewall do servidor MySQL

### Erro: CORS
**Solução:**
1. Adicione domínio do Vercel em `ALLOWED_ORIGINS`
2. Inclua variantes (com e sem www)
3. Redeploy após mudanças

---

## 🌐 URLs Após Deploy

Depois do deploy, você terá:

- **Frontend:** `https://emoconnect-seu-username.vercel.app`
- **API:** `https://emoconnect-seu-username.vercel.app/api`
- **Health Check:** `https://emoconnect-seu-username.vercel.app/api/health`

---

## 🔒 Segurança em Produção

### ⚠️ MUITO IMPORTANTE:

1. **Nunca commite o arquivo .env**
   - Já está no `.gitignore` ✅

2. **Use JWT_SECRET forte**
   ```
   Exemplo: 8f9d2a1e5c7b4d3a9e6f1c8d2b5a7e4c9f1d3a6e8c2b5d7a4e1f9c6d8b3a5e2c7
   ```

3. **Configure HTTPS apenas**
   - Vercel já fornece SSL automático ✅

4. **Monitore logs**
   - Acesse Vercel Dashboard → Logs

5. **Rate limiting**
   - Já configurado no backend ✅

---

## 📈 Monitoramento

### Vercel Analytics
1. Acesse o dashboard do Vercel
2. Vá para **Analytics**
3. Monitore:
   - Tempo de resposta
   - Erros
   - Tráfego
   - Performance

### Logs em Tempo Real
```powershell
vercel logs --follow
```

---

## 🚀 Deploy Contínuo (CI/CD)

O Vercel já configura deploy automático!

**Sempre que você fizer push no GitHub:**
1. Vercel detecta automaticamente
2. Roda o build
3. Deploy em produção (branch main)
4. Deploy preview (outras branches)

---

## 💡 Dicas Extras

### Domínio Personalizado
1. Vá para **Settings → Domains** no Vercel
2. Adicione seu domínio
3. Configure DNS conforme instruções

### Performance
- Vercel usa CDN global automático ✅
- Cache otimizado ✅
- Compression ativado ✅

### Backup
- Vercel mantém histórico de deploys
- Você pode fazer rollback a qualquer momento

---

## 📞 Suporte

### Documentação Oficial
- Vercel: https://vercel.com/docs
- Deploy Node.js: https://vercel.com/docs/functions/serverless-functions/runtimes/node-js
- Deploy Vite: https://vercel.com/docs/frameworks/vite

### Problemas Comuns
- Logs: https://vercel.com/docs/observability/logging
- Environment Variables: https://vercel.com/docs/environment-variables

---

## ✨ Pronto para Deploy!

**Seu projeto está preparado para o Vercel!**

### Próximos Passos:
1. Acesse https://vercel.com
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente
4. Clique em Deploy
5. ✅ Aproveite seu site no ar!

---

**💚 EmoConnect - Agora acessível em todo o mundo! 🌍**
