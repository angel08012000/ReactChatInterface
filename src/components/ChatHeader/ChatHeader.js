import React from 'react';
import styles from './ChatHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faExpand } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = ({ onMinimize, onFullScreen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.logo}>Chatbot</span>
      </div>
      <div className={styles.right}>
        <button onClick={onFullScreen} className={styles.button}>
            <FontAwesomeIcon icon={faExpand} className={styles.icon}/>
        </button>
        <button onClick={onMinimize} className={styles.button}>
            <FontAwesomeIcon icon={faXmark} className={styles.icon}/>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;