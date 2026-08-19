@echo off
title Montagem de Microcomputadores
color 0A

echo ============================================
echo   Montagem de Microcomputadores
echo   Ferramenta Didatica Interativa
echo ============================================
echo.

cd /d "%~dp0"

echo [1/3] Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Node.js nao encontrado!
    echo Baixe em: https://nodejs.org
    pause
    exit /b 1
)
echo OK!
echo.

echo [2/3] Instalando dependencias...
call npm install --silent
if errorlevel 1 (
    echo ERRO ao instalar dependencias!
    pause
    exit /b 1
)
echo OK!
echo.

echo [3/3] Compilando TypeScript...
call npx tsc
if errorlevel 1 (
    echo ERRO ao compilar TypeScript!
    pause
    exit /b 1
)
echo OK!
echo.

echo ============================================
echo   Abrindo navegador...
echo   http://localhost:8080
echo   Para fechar: Ctrl+C
echo ============================================
echo.

start "" "http://localhost:8080"

python -m http.server 8080 2>nul && goto :end
python3 -m http.server 8080 2>nul && goto :end
npx serve -l 8080

:end
