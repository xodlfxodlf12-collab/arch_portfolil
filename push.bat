@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo [*] Starting GitHub Upload (git push)...
git add .
git commit -m "update: 코드 변경사항 반영"
git push origin main

echo.
echo [*] Done.
pause
