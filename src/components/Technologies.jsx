import React from 'react';
import AppScreen from './AppScreen';

const Technologies = ({ onClose }) => {
  const techStack = [
    'Java', 'Spring Boot', 'Hibernate', 'JPA',
    'HTML', 'CSS', 'JavaScript', 'React',
    'SQL', 'REST API', 'JDBC'
  ];

  return (
    <AppScreen title="Tech Stack" onClose={onClose}>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-xs rounded-full dark:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </AppScreen>
  );
};

export default Technologies;
