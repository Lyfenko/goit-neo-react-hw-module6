import React from 'react';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <FaUserAlt className={styles.icon} />
        <p>{name}</p>
      </div>
      <div className={styles.contactInfo}>
        <FaPhoneAlt className={styles.icon} />
        <p>{number}</p>
      </div>
      <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
    </li>
  );
};

export default Contact;
