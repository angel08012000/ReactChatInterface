import React, { useState } from 'react';
import styles from './ChatInput.module.css';

const ChatInput = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      // sending message to your backend
      
      setMessage('');
    };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type something..."
        className={styles.input}
      />
      <button onClick={handleSendMessage} className={styles.button}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;