/*import React from 'react';
import AppIcon from './AppIcon';

const AppGrid = () => {
  const apps = [
    { name: 'LinkedIn', color: 'bg-blue-500', icon: '🔗' },
    { name: 'GitHub', color: 'bg-gray-800', icon: '🐱' },
    { name: 'Twitter', color: 'bg-sky-500', icon: '🐦' },
    { name: 'Projects', color: 'bg-green-500', icon: '📁' },
    { name: 'Tech Stack', color: 'bg-purple-500', icon: '🧠' },
    { name: 'Resume', color: 'bg-yellow-400', icon: '📄' },
    { name: 'Contact', color: 'bg-pink-500', icon: '📞' },
    { name: 'Education', color: 'bg-orange-400', icon: '🎓' },
    { name: 'Camera', color: 'bg-red-500', icon: '📷' }, // easter egg
    { name: 'Theme', color: 'bg-black text-white', icon: '🌓' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {apps.map((app, index) => (
        <AppIcon key={index} name={app.name} color={app.color} icon={app.icon} />
      ))}
    </div>
  );
};

export default AppGrid;*/



import React from 'react';
import AppIcon from './AppIcon';

import linkedin from '../assets/linkedin-image.png';//
import github from '../assets/github-image.png';//
import contact from '../assets/contact-image.png';//
import aboutMe from '../assets/about-me-image.png';//
import technologies from '../assets/technologies-image.png';//
import education from '../assets/education-image.png';//
import projectApp from '../assets/project-app-image.png';//
import themeToggle from '../assets/theme-toggle-image.png';//
// import themeCustomizer from '../assets/theme-customizer-image.png';
import camera from '../assets/camera-image.png';//
import resume from '../assets/resume-image.png';

const AppGrid = ({ onAppClick }) => {
  const apps = [
    { name: 'About Me', image: aboutMe },
    { name: 'LinkedIn', image: linkedin},
    { name: 'GitHub', image: github },
    { name: 'Contact', image: contact },
    { name: 'Resume', image: resume },
    { name: 'Education', image: education },
    { name: 'Technologies', image: technologies },
    { name: 'Project App', image: projectApp },
    { name: 'Theme Toggle', image: themeToggle },
    // { name: 'Theme Customizer', image: themeCustomizer },
    { name: 'Camera', image: camera },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {apps.map((app, index) => (
        <AppIcon
          key={index}
          name={app.name}
          image={app.image}
          onClick={() => onAppClick(app.name)}
        />
      ))}
    </div>
  );
};

export default AppGrid;
