import React from 'react';
import AppScreen from './AppScreen';

const LinkedIn = ({ onClose }) => {
  return (
    <AppScreen title="LinkedIn" onClose={onClose}>
      <a
        href="https://www.linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline dark:text-blue-400"
      >
        Visit my LinkedIn Profile
      </a>
    </AppScreen>
  );
};

export default LinkedIn;
