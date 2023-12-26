import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './ChatMessages.module.css';

const ChatMessages = ({messages}) => {
  return (
    <div className={styles.container}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.message} ${message.from === 'system' ? styles.systemMessage : styles.userMessage}`}>
          <div className={`${styles.avatar} ${message.from === 'system' ? styles.systemAvatar : styles.userAvatar}`}>
            {message.from === 'system' ? (
              <FontAwesomeIcon icon={faRobot} />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </div>

          {message.text && <div className={`${styles.text} ${message.from === 'system' ? styles.systemText : styles.userText}`}>{message.text}</div>}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;