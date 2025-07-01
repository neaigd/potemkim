import React, { useState, useEffect } from 'react';
import markdownit from 'markdown-it';
import Header from './components/Header';
import ResourcesSection from './components/ResourcesSection';
import ChatSection from './components/ChatSection';
import ChallengeSection from './components/ChallengeSection';
import { videoInfo, articleInfo, chatTurns, challengeBlocks } from './data/chatContent.js';

const md = markdownit();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen bg-background text-primary flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-accent-blue text-white dark:bg-accent-blue shadow-lg z-50"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <Header />
      <ResourcesSection videoInfo={videoInfo} articleInfo={articleInfo} />
      <ChatSection chatTurns={chatTurns} md={md} />
      <ChallengeSection challengeBlocks={challengeBlocks} />
    </div>
  );
}

export default App;