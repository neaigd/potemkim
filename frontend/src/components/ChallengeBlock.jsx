import React, { useRef, useEffect, useState } from 'react';

const ChallengeBlock = ({ children }) => {
  const challengeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(challengeRef.current);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (challengeRef.current) {
      observer.observe(challengeRef.current);
    }

    return () => {
      if (challengeRef.current) {
        observer.unobserve(challengeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={challengeRef}
      className={`transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        mt-6 p-6 rounded-lg shadow-lg border border-light-border bg-light-card-background
        dark:border-dark-border dark:bg-dark-card-background
      `}
    >
      {children}
    </div>
  );
};

export default ChallengeBlock;