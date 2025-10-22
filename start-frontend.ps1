# Script para iniciar o Frontend do EmoConnect
Write-Host "🎨 Iniciando Frontend EmoConnect..." -ForegroundColor Cyan
Write-Host ""

# Navegar para a pasta frontend
Set-Location "c:\Users\Giovana\Documents\emoconnect\frontend"

# Verificar se as dependências estão instaladas
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
}

# Iniciar o servidor de desenvolvimento
Write-Host "✅ Iniciando Vite na porta 5173..." -ForegroundColor Green
Write-Host ""
npm run dev
