import React, { useState } from 'react';

const DialogueTurn = ({ turn }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = turn.text.length > 280;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`mb-6 p-4 rounded-xl shadow-md ${turn.speaker === 'Eu' ? 'bg-blue-100 text-blue-900 ml-auto mr-0 text-right' : 'bg-purple-100 text-purple-900 mr-auto ml-0 text-left'}`}>
      <p className="font-bold text-lg mb-1">{turn.speaker}:</p>
      <div
        dangerouslySetInnerHTML={{
          __html: isLongText && !isExpanded ? `${turn.text.substring(0, 280)}...` : turn.text,
        }}
      />
      {isLongText && (
        <button onClick={toggleExpansion} className="text-blue-500 hover:underline mt-2">
          {isExpanded ? 'Mostrar menos' : 'Leia mais...'}
        </button>
      )}
    </div>
  );
};

export default DialogueTurn;
