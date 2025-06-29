#!/usr/bin/env bash
# (salve como get_gemini.sh e dê chmod +x)

URL="https://gemini.google.com/share/1145c5b62104"

# 1) Baixa o HTML
wget -q -O gemini_share.html "$URL"

# 2) Converte o HTML em texto “limpo”
#    • lynx -dump remove scripts/estilos e quebra em linhas legíveis
#    • -nolist evita numeração de links
lynx -dump -nolist gemini_share.html > gemini_share.txt

echo "Texto extraído em gemini_share.txt"
