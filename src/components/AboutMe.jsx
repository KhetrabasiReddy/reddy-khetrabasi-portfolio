// import React from 'react';
// import AppScreen from './AppScreen';

// const AboutMe = ({ onClose }) => {
//   return (
//     <AppScreen title="About Me" onClose={onClose}>
//       <p className="text-sm dark:text-white">
//         Yo! I'm Khetrabasi, a passionate full-stack dev. I love building cool UI like this smartphone portfolio 🔥
//       </p>
//     </AppScreen>
//   );
// };

// export default AboutMe;
import React from 'react';
import AppScreen from './AppScreen';
import { motion } from 'framer-motion';

const aboutParagraphs = [
  {
    text: "👋 Yo! I'm Khetrabasi Reddy — a passionate Full Stack Developer based in Bangalore.",
    animation: { x: -30 }
  },
  {
    text: "🧠 I love to learn new things, break them down, and build something even cooler.",
    animation: { scale: 0.8 }
  },
  {
    text: "🎨 UI/UX is where creativity meets code — and I live for that moment.",
    animation: { y: 20 }
  },
  {
    text: "⚙️ Backend? I got you. From REST APIs to role-based auth and enterprise logic.",
    animation: { rotate: -5 }
  },
  {
    text: "📚 Tech Stack: React, Spring Boot, MySQL, Tailwind, Git, REST APIs",
    animation: { x: 30 }
  },
  {
    text: "🌈 Always building, always improving — one commit at a time.",
    animation: { scale: 1.2 }
  },
  {
    text: "🙏 Thanks for checking out my smartphone portfolio. You're awesome!",
    animation: { y: -20 }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35
    }
  }
};

const AboutMe = ({ onClose }) => {
  return (
    <AppScreen title="About Me" onClose={onClose}>
      <div className="p-4 flex flex-col items-center space-y-4">
        {/* Profile Photo with animation */}
        <motion.img
          src="/Khetrabasi.jpg" // 🔁 change path if your image is somewhere else
          alt="Khetrabasi Reddy"
          className="w-28 h-28 rounded-full shadow-lg object-cover"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />

        {/* Animated About Text */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {aboutParagraphs.map((para, idx) => (
            <motion.p
              key={idx}
              className="text-base font-medium text-gray-800 dark:text-gray-100 text-center"
              initial={{ opacity: 0, ...para.animation }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {para.text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </AppScreen>
  );
};

export default AboutMe;
