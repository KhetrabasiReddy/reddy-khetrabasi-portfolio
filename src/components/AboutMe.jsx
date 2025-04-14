import React from 'react';
import AppScreen from './AppScreen';

const AboutMe = ({ onClose }) => {
  return (
    <AppScreen title="About Me" onClose={onClose}>
      <p className="text-sm dark:text-white">
        Yo! I'm Khetrabasi, a passionate full-stack dev. I love building cool UI like this smartphone portfolio 🔥
      </p>
    </AppScreen>
  );
};

export default AboutMe;
