#!/usr/bin/env python3
"""
Baixa um link “share” do Gemini e grava apenas o texto visível.
Dependências: pip install requests beautifulsoup4
"""

import requests, bs4, pathlib

URL = "https://gemini.google.com/share/1145c5b62104"
OUT = pathlib.Path("gemini_share.txt")

# Cabeçalho simples para evitar bloqueios por bot
headers = {"User-Agent": "Mozilla/5.0"}

html = requests.get(URL, headers=headers, timeout=30).text
soup = bs4.BeautifulSoup(html, "html.parser")

# Remove <script> e <style>, que só atrapalham
for tag in soup(["script", "style"]):
    tag.decompose()

# Extrai texto, preservando quebras de linha razoáveis
text = soup.get_text(separator="\n")
# Limpa linhas vazias consecutivas
text = "\n".join(line.strip() for line in text.splitlines() if line.strip())

OUT.write_text(text, encoding="utf-8")
print(f"Texto salvo em {OUT.resolve()}")
