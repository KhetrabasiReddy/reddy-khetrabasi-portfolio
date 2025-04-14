/*import React from 'react';

const AppIcon = ({ name, color, icon }) => {
  return (
    <div
      className={`${color} rounded-xl h-16 flex items-center justify-center text-xl font-bold shadow-inner cursor-pointer hover:scale-105 transition-transform`}
      title={name}
    >
      <span>{icon}</span>
    </div>
  );
};

export default AppIcon;
*/


import React from 'react';

const AppIcon = ({ name, image, onClick }) => {
  return (
    <div
      className="rounded-xl h-16 w-16 p-2 bg-gray-100 dark:bg-gray-700 shadow-inner flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
      title={name}
      onClick={onClick}
    >
      <img src={image} alt={name} className="h-8 w-8 object-contain mb-1" />
      <span className="text-[10px] text-center text-black dark:text-white font-medium">{name}</span>
    </div>
  );
};

export default AppIcon;
