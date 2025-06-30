import markdown
import os

# Defina o caminho absoluto para o diretório do script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Caminhos para os arquivos de entrada e saída
input_file = os.path.join(script_dir, 'chat.md')
output_file = os.path.join(script_dir, 'index.html')

# Informações do vídeo e artigo
video_url = "https://www.youtube.com/embed/-eFvwZx9U0Q"
article_title = "Potemkin Understanding in Large Language Models"
article_authors = "Marina Mancoridis, Bec Weeks, Keyon Vafa, Sendhil Mullainathan"
article_institutions = "Massachusetts Institute of Technology, University of Chicago, Harvard University"
# Placeholder para o abstract - será preenchido após a busca
article_abstract = "Large language models (LLMs) are regularly evaluated using benchmark datasets. But what justifies making inferences about an LLM's capabilities based on its answers to a curated set of questions? This paper first introduces a formal framework to address this question. The key is to note that the benchmarks used to test LLMs -- such as AP exams -- are also those used to test people. However, this raises an implication: these benchmarks are only valid tests if LLMs misunderstand concepts in ways that mirror human misunderstandings. Otherwise, success on benchmarks only demonstrates potemkin understanding: the illusion of understanding driven by answers irreconcilable with how any human would interpret a concept. We present two procedures for quantifying the existence of potemkins: one using a specially designed benchmark in three domains, the other using a general procedure that provides a lower-bound on their prevalence. We find that potemkins are ubiquitous across models, tasks, and domains. We also find that these failures reflect not just incorrect understanding, but deeper internal incoherence in concept representations." 
article_link = "https://arxiv.org/pdf/2506.21521.pdf"

# Ler o conteúdo do arquivo Markdown
with open(input_file, 'r', encoding='utf-8') as f:
    markdown_text = f.read()

# Converter Markdown para HTML
# Usar um processamento customizado para as falas
processed_html_content = []
for line in markdown_text.split('\n'):
    if line.startswith('**Eu:**'):
        processed_html_content.append(f'<div class="fala-eu">{markdown.markdown(line[len("**Eu:**"):].strip())}</div>')
    elif line.startswith('**Gemini:**'):
        processed_html_content.append(f'<div class="fala-gemini">{markdown.markdown(line[len("**Gemini:**"):].strip())}</div>')
    else:
        processed_html_content.append(markdown.markdown(line))

html_content = '\n'.join(processed_html_content)

# Estrutura HTML com CSS incorporado para estilização
html_template = """
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O Legado de Potemkin: Uma Análise sobre Coerência</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 960px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }}
        h1, h2, h3 {{
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
            margin-top: 30px;
        }}
        .recursos-principais {{
            background-color: #eaf2f8;
            border-left: 5px solid #3498db;
            padding: 15px;
            margin-bottom: 30px;
            border-radius: 5px;
        }}
        .recursos-principais h2 {{
            border-bottom: none;
            margin-top: 0;
            padding-bottom: 0;
        }}
        .fala-eu, .fala-gemini {{
            margin-bottom: 15px;
            padding: 10px 15px;
            border-radius: 8px;
            line-height: 1.5;
        }}
        .fala-eu {{
            background-color: #e0f7fa; /* Light Cyan */
            border: 1px solid #b2ebf2; /* Cyan 100 */
            text-align: right;
            margin-left: 10%;
        }}
        .fala-gemini {{
            background-color: #f3e5f5; /* Light Purple */
            border: 1px solid #e1bee7; /* Purple 100 */
            text-align: left;
            margin-right: 10%;
        }}
        blockquote {{
            border-left: 5px solid #3498db;
            padding-left: 15px;
            margin-left: 0;
            color: #555;
            background-color: #ecf0f1;
        }}
        code {{
            background-color: #ecf0f1;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: "Courier New", Courier, monospace;
        }}
        a {{
            color: #2980b9;
            text-decoration: none;
        }}
        a:hover {{
            text-decoration: underline;
        }}
        .video-container {{
            position: relative;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            height: 0;
            overflow: hidden;
            max-width: 100%;
            background: #000;
            margin-bottom: 20px;
        }}
        .video-container iframe {{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }}
    </style>
</head>
<body>
    <h1>O Legado de Potemkin: Uma Análise sobre Coerência</h1>

    <div class="recursos-principais">
        <h2>Recursos Principais</h2>
        <h3>Vídeo: A Incoerência das IAs</h3>
        <div class="video-container">
            <iframe src="{video_url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h3>Artigo Científico: {article_title}</h3>
        <p><strong>Autores:</strong> {article_authors}</p>
        <p><strong>Instituições:</strong> {article_institutions}</p>
        <p><strong>Abstract:</strong> {article_abstract}</p>
        <p><a href="{article_link}" target="_blank">Acessar Artigo (se disponível)</a></p>
    </div>

    <h2>Diálogo Completo</h2>
    {content}
</body>
</html>
"""

# Inserir o conteúdo convertido no template
final_html = html_template.format(
    video_url=video_url,
    article_title=article_title,
    article_authors=article_authors,
    article_institutions=article_institutions,
    article_abstract=article_abstract,
    article_link=article_link,
    content=html_content
)

# Salvar o arquivo HTML final
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"Página HTML gerada com sucesso em: {output_file}")