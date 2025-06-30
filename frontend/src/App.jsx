import React, { useState, useEffect } from 'react';
import markdownit from 'markdown-it';
import chatMarkdown from './chat.md?raw'; // Importa o conteúdo do chat.md como string


const md = markdownit();

// Informações do vídeo e artigo (hardcoded por enquanto, podem vir de um JSON depois)
const videoInfo = {
  url: "https://www.youtube.com/embed/-eFvwZx9U0Q"
};

const articleInfo = {
  title: "Potemkin Understanding in Large Language Models",
  authors: "Marina Mancoridis, Bec Weeks, Keyon Vafa, Sendhil Mullainathan",
  institutions: "Massachusetts Institute of Technology, University of Chicago, Harvard University",
  abstract: "Large language models (LLMs) are regularly evaluated using benchmark datasets. But what justifies making inferences about an LLM's capabilities based on its answers to a curated set of questions? This paper first introduces a formal framework to address this question. The key is to note that the benchmarks used to test LLMs -- such as AP exams -- are also those used to test people. However, this raises an implication: these benchmarks are only valid tests if LLMs misunderstand concepts in ways that mirror human misunderstandings. Otherwise, success on benchmarks only demonstrates potemkin understanding: the illusion of understanding driven by answers irreconcilable with how any human would interpret a concept. We present two procedures for quantifying the existence of potemkins: one using a specially designed benchmark in three domains, the other using a general procedure that provides a lower-bound on their prevalence. We find that potemkins are ubiquitous across models, tasks, and domains. We also find that these failures reflect not just incorrect understanding, but deeper internal incoherence in concept representations.",
  link: "https://arxiv.org/pdf/2506.21521.pdf"
};

function parseChatMarkdown(markdownText) {
  const turns = [];
  const lines = markdownText.split('\n');
  let currentSpeaker = null;
  let currentTextLines = [];

  for (const line of lines) {
    if (line.startsWith('**Eu:**')) {
      if (currentSpeaker && currentTextLines.length > 0) {
        turns.push({
          speaker: currentSpeaker,
          text: currentTextLines.join('\n').trim()
        });
      }
      currentSpeaker = 'Eu';
      currentTextLines = [line.substring('**Eu:**'.length).trim()];
    } else if (line.startsWith('**Gemini:**')) {
      if (currentSpeaker && currentTextLines.length > 0) {
        turns.push({
          speaker: currentSpeaker,
          text: currentTextLines.join('\n').trim()
        });
      }
      currentSpeaker = 'Gemini';
      currentTextLines = [line.substring('**Gemini:**'.length).trim()];
    } else {
      currentTextLines.push(line);
    }
  }

  // Add the last turn
  if (currentSpeaker && currentTextLines.length > 0) {
    turns.push({
      speaker: currentSpeaker,
      text: currentTextLines.join('\n').trim()
    });
  }
  return turns;
}

const chatTurns = parseChatMarkdown(chatMarkdown);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center leading-tight">O Legado de Potemkin: Uma Análise sobre Coerência</h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg shadow-md mb-10 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Recursos Principais</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Vídeo: A Incoerência das IAs</h3>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={videoInfo.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="A Incoerência das IAs"
          ></iframe>
        </div>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Artigo Científico: {articleInfo.title}</h3>
        <p className="text-lg mb-2"><strong>Autores:</strong> {articleInfo.authors}</p>
        <p className="text-lg mb-2"><strong>Instituições:</strong> {articleInfo.institutions}</p>
        <p className="text-base italic mb-4"><strong>Abstract:</strong> {articleInfo.abstract}</p>
        <p>
          <a 
            href={articleInfo.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
          >
            Acessar Artigo (se disponível)
          </a>
        </p>
      </div>

      <h2 className="text-4xl font-bold text-gray-800 mb-8">Diálogo Completo</h2>

      <div className="w-full max-w-3xl">
        <pre>{JSON.stringify(chatTurns, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;