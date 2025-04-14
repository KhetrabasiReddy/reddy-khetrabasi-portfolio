import React from 'react';
import AppScreen from './AppScreen';

const ProjectApp = ({ onClose }) => {
  const projects = [
    {
      title: 'Bookstore App',
      description: 'Spring Boot + Thymeleaf based CRUD app',
    },
    {
      title: 'Portfolio Phone UI',
      description: 'React-powered smartphone styled portfolio UI',
    }
  ];

  return (
    <AppScreen title="Projects" onClose={onClose}>
      <ul className="space-y-2">
        {projects.map((project, idx) => (
          <li key={idx} className="dark:text-white">
            <p className="font-semibold">{project.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
          </li>
        ))}
      </ul>
    </AppScreen>
  );
};

export default ProjectApp;
