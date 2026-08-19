#!/bin/bash
clear
echo "============================================"
echo "  Montagem de Microcomputadores"
echo "  Ferramenta Didatica Interativa"
echo "============================================"
echo ""

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "[1/3] Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "ERRO: Node.js nao encontrado!"
    echo "Instale com: sudo apt install nodejs npm"
    exit 1
fi
echo "OK - Node.js $(node --version) encontrado!"
echo ""

echo "[2/3] Instalando dependencias..."
npm install --silent 2>/dev/null
echo "OK - Dependencias instaladas!"
echo ""

echo "[3/3] Compilando TypeScript..."
npx tsc 2>/dev/null
echo "OK - Compilacao concluida!"
echo ""

echo "============================================"
echo "  Servidor iniciando na porta 8080..."
echo "  Acesse: http://localhost:8080"
echo "  Para fechar: Ctrl+C"
echo "============================================"
echo ""

(sleep 1 && xdg-open http://localhost:8080 2>/dev/null) &
python3 -m http.server 8080
