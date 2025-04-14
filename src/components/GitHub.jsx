import React from 'react';
import AppScreen from './AppScreen';

const GitHub = ({ onClose }) => {
  return (
    <AppScreen title="GitHub" onClose={onClose}>
      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-700 underline dark:text-purple-300"
      >
        Check out my GitHub Repos
      </a>
    </AppScreen>
  );
};

export default GitHub;
