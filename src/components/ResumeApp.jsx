import React from 'react';
import AppScreen from './AppScreen';

const ResumeApp = ({ onClose }) => {
  return (
    <AppScreen title="Resume" onClose={onClose}>
      <a
        href="/path-to-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-700 underline dark:text-green-400"
      >
        Download My Resume (PDF)
      </a>
    </AppScreen>
  );
};

export default ResumeApp;
