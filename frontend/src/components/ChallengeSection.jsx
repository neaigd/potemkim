import React from 'react';
import ChallengeBlock from './ChallengeBlock';

function ChallengeSection({ challengeBlocks }) {
  return (
    <section className="w-full mt-10 p-6 bg-card-background rounded-lg shadow-md dark:bg-dark-card-background">
      <h2 className="text-2xl font-semibold text-text-primary dark:text-dark-text-primary mb-4">Desafios Propostos</h2>
      <div className="space-y-4">
        {challengeBlocks.map((challenge, index) => (
          <ChallengeBlock key={index} challenge={challenge} />
        ))}
      </div>
    </section>
  );
}

export default ChallengeSection;