import React from 'react';
import styles from './ContactSection.module.css'; // Import CSS module

const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className={`${styles['contact-section']} glassmorphism-section`}>
      <h2 className="section-title">Get in Touch</h2>
      <p className={styles['contact-intro']}>
        Have a project in mind or just want to chat? Feel free to reach out!
      </p>
      <div className={styles['contact-details']}>
        <p><a href="mailto:nasserallah.hourichi@gmail.com" className={styles['contact-link']}>nasserallah.hourichi@gmail.com</a></p>
        <p><a href="tel:+21626120071" className={styles['contact-link']}>+216 26120071</a></p>
        <div className={styles['social-links']}>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className={styles['social-icon']}>
            <img src="src/assets/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className={styles['social-icon']}>
            <img src="src/assets/icons/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;