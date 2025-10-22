# Script para iniciar o Backend do EmoConnect
Write-Host "🚀 Iniciando Backend EmoConnect..." -ForegroundColor Cyan
Write-Host ""

# Navegar para a pasta backend
Set-Location "c:\Users\Giovana\Documents\emoconnect\backend"

# Verificar se as dependências estão instaladas
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
}

# Verificar se o arquivo .env existe
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  AVISO: Arquivo .env não encontrado!" -ForegroundColor Red
    Write-Host "   Por favor, configure o arquivo .env antes de iniciar." -ForegroundColor Yellow
    exit 1
}

# Iniciar o servidor
Write-Host "✅ Iniciando servidor na porta 3000..." -ForegroundColor Green
Write-Host ""
node index.js
