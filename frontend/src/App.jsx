import React from 'react';
import markdownit from 'markdown-it';
import chatMarkdown from './chat.md?raw';
import Header from './components/Header';
import ResourcesSection from './components/ResourcesSection';
import ChatSection from './components/ChatSection';

const md = markdownit();

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-8">
      <Header />
      <ResourcesSection videoInfo={videoInfo} articleInfo={articleInfo} />
      <ChatSection chatTurns={chatTurns} md={md} />
    </div>
  );
}

export default App;