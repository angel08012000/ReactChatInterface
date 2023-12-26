import React, { useState } from 'react';
import styles from './ChatInput.module.css';

const ChatInput = ({onSendMessage}) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      // sending message to your backend
      if (message.trim() !== '') {
        onSendMessage(message);
        setMessage(''); // 清空輸入欄位
      }
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