import React from 'react';

const DialogueTurn = ({ turn }) => {
  return (
    <div
      className={`mb-6 p-4 rounded-xl shadow-md ${turn.speaker === 'Eu' ? 'bg-blue-100 text-blue-900 ml-auto mr-0 text-right' : 'bg-purple-100 text-purple-900 mr-auto ml-0 text-left'}`}>
      <p className="font-bold text-lg mb-1">{turn.speaker}:</p>
      <div dangerouslySetInnerHTML={{ __html: turn.text }} />
    </div>
  );
};

export default DialogueTurn;
