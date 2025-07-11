import React, { useState } from 'react';

const DialogueTurn = ({ turn, md }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongText = turn.text.length > 280;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isLongText && !isExpanded ? `${turn.text.substring(0, 280)}...` : turn.text;

  return (
    <div
      className={`mb-6 p-4 rounded-xl shadow-md ${turn.speaker === 'Eu' ? 'bg-accent-blue/10 text-primary dark:bg-accent-blue/20 dark:text-primary ml-auto mr-0 text-right' : 'bg-accent-purple/10 text-primary dark:bg-accent-purple/20 dark:text-primary mr-auto ml-0 text-left'}`} >
      <p className="font-bold text-lg mb-1">{turn.speaker}:</p>
      <div className="prose prose-base max-w-none overflow-wrap-break-word word-break-break-word">
        <div
          dangerouslySetInnerHTML={{ __html: md.render(displayedText) }}
        />
      </div>
      {isLongText && (
        <button onClick={toggleExpansion} className="text-accent-blue hover:underline mt-2">
          {isExpanded ? 'Mostrar menos' : 'Leia mais...'}
        </button>
      )}
    </div>
  );
};

export default DialogueTurn;