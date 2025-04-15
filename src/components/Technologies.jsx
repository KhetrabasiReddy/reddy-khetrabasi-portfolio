// import React from 'react';
// import AppScreen from './AppScreen';

// const Technologies = ({ onClose }) => {
//   const techStack = [
//     'Java', 'Spring Boot', 'Hibernate', 'JPA',
//     'HTML', 'CSS', 'JavaScript', 'React',
//     'SQL', 'REST API', 'JDBC'
//   ];

//   return (
//     <AppScreen title="Tech Stack" onClose={onClose}>
//       <div className="flex flex-wrap gap-2">
//         {techStack.map((tech, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-xs rounded-full dark:text-white"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </AppScreen>
//   );
// };

// export default Technologies;

import React from 'react';
import AppScreen from './AppScreen';

const techCategories = {
  Frontend: [
    { name: 'HTML', image: '/public/techImages/html-img.png' },
    { name: 'CSS', image: '/public/techImages/css-img.png' },
    { name: 'JavaScript', image: '/public/techImages/java-script-img.png' },
    { name: 'React', image: '/public/techImages//react-img.png' },
    { name: 'Bootstrap', image: '/public/techImages/bootstrap-img.png' },
  ],
  Backend: [
    { name: 'Java', image: '/public/techImages/java-img.png' },
    { name: 'Spring Boot', image: '/public/techImages/spring-boot-img.png' },
    { name: 'Hibernate', image: '/public/techImages/hibernate-ar21.svg' }, // if you add
    { name: 'JPA', image: '/public/techImages/jpa-img.jpg' },             // if you add
    { name: 'JDBC', image: '/public/techImages/jdbc-img.webp' },           // if you add
    { name: 'MySQL', image: '/public/techImages/mysql-img.png' },
    { name: 'REST API', image: '/public/techImages/restapi-img.png' },    // if you add
  ],
  Tools: [
    { name: 'Git', image: '/public/techImages/git-img.png',},
    { name: 'Postman', image: '/public/techImages/postman-img.png'},
    { name: 'ChatGPT', image: '/public/techImages/chatgpt-img.svg'}
  ]
};

const Technologies = ({ onClose }) => {
  return (
    <AppScreen title="Tech Stack" onClose={onClose}>
      {Object.entries(techCategories).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="text-md font-semibold dark:text-white mb-2">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {items.map(({ name, image }, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-20 text-center"
              >
                <img
                  src={image}
                  alt={name}
                  className="cursor-pointer w-10 h-10 object-contain mb-1 transition-transform duration-300 hover:scale-110"
                />
                <span className="text-xs dark:text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AppScreen>
  );
};

export default Technologies;

