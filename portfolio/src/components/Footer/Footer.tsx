import React from 'react';
import styles from './Footer.module.css'; // Import CSS module

const Footer: React.FC = () => {
  return (
    <footer className={styles['main-footer']}>
      <p>&copy; {new Date().getFullYear()} Nasserallah Hourichi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;