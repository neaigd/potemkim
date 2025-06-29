#!/usr/bin/env python3
"""
Baixa um link “share” do Gemini e grava como Markdown.
Dependências: pip install requests beautifulsoup4 html2text
"""

import requests, bs4, pathlib
import html2text, html

URL = "https://gemini.google.com/share/1145c5b62104"
OUT = pathlib.Path("gemini_share.md") # Changed extension to .md

# Cabeçalho simples para evitar bloqueios por bot
headers = {"User-Agent": "Mozilla/5.0"}

# Download HTML
response = requests.get(URL, headers=headers, timeout=30)
response.raise_for_status() # Raise an exception for bad status codes
html_content = response.text
soup = bs4.BeautifulSoup(html_content, "html.parser")

# Remove <script> e <style>, que só atrapalham
for tag in soup(["script", "style"]):
    tag.decompose()

# Convert to Markdown
h = html2text.HTML2Text()
h.ignore_links = False          # mantém links clicáveis
# The 'handle' method expects a string, so we pass the string representation of the soup
markdown = h.handle(str(soup))

# Clean up excessive newlines that can sometimes result from html2text
lines = [line.strip() for line in markdown.splitlines()]
cleaned_markdown = "\n".join(filter(None, lines)) # Remove empty lines more aggressively for MD

OUT.write_text(cleaned_markdown, encoding="utf-8")
print(f"Markdown salvo em {OUT.resolve()}")
