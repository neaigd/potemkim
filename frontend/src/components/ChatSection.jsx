import React from 'react';
import DialogueTurn from './DialogueTurn';

function ChatSection({ chatTurns, md }) {
  return (
    <>
      <h2 className="text-4xl font-bold text-primary mb-8">Diálogo Completo</h2>
      <div className="flex flex-col">
        {chatTurns.map((turn, index) => (
          <DialogueTurn key={index} turn={turn} md={md} />
        ))}
      </div>
    </>
  );
}

export default ChatSection;