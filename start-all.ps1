# Script para iniciar AMBOS os servidores do EmoConnect
Write-Host "🚀 Iniciando EmoConnect - Sistema Completo" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se as pastas existem
if (-not (Test-Path "backend")) {
    Write-Host "❌ Pasta 'backend' não encontrada!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "frontend")) {
    Write-Host "❌ Pasta 'frontend' não encontrada!" -ForegroundColor Red
    exit 1
}

Write-Host "📋 Iniciando servidores em janelas separadas..." -ForegroundColor Yellow
Write-Host ""

# Iniciar Backend em nova janela
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; Write-Host '🔧 BACKEND - Porta 3000' -ForegroundColor Green; Write-Host ''; node index.js"

# Aguardar 3 segundos
Start-Sleep -Seconds 3

# Iniciar Frontend em nova janela
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; Write-Host '🎨 FRONTEND - Porta 5173' -ForegroundColor Cyan; Write-Host ''; npm run dev"

Write-Host "✅ Servidores iniciados com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 URLs disponíveis:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "   Backend:  http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "💡 Dica: Feche as janelas dos terminais para parar os servidores" -ForegroundColor Yellow
Write-Host ""
Write-Host "Pressione qualquer tecla para sair..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
