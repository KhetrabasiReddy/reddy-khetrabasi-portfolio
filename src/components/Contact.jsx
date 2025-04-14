import React from 'react';
import AppScreen from './AppScreen';

const Contact = ({ onClose }) => {
  return (
    <AppScreen title="Contact" onClose={onClose}>
      <ul className="text-sm dark:text-white">
        <li>Email: khetrabasi@example.com</li>
        <li>Phone: +91 9876543210</li>
        <li>Location: Bangalore, India</li>
      </ul>
    </AppScreen>
  );
};

export default Contact;
