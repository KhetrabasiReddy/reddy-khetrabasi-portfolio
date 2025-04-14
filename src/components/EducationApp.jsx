import React from 'react';
import AppScreen from './AppScreen';

const EducationApp = ({ onClose }) => {
  return (
    <AppScreen title="Education" onClose={onClose}>
      <ul className="text-sm dark:text-white list-disc list-inside">
        <li>B.Tech in [Your Branch], [University Name], 2024</li>
        <li>12th - [School Name], [Board], Year</li>
        <li>10th - [School Name], [Board], Year</li>
      </ul>
    </AppScreen>
  );
};

export default EducationApp;
