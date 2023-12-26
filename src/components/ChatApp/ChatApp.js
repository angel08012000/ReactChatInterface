import React, { useState } from 'react';
import styles from './ChatApp.module.css';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatInput from '../ChatInput/ChatInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function ChatApp(){
    const [chatOpen, setChatOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleChat = () => {
        if(!chatOpen) setIsFullScreen(false);
        setChatOpen(!chatOpen);
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

  return (
    <div className={`${styles.chatApp} ${isFullScreen ? styles.fullScreen : (chatOpen ? styles.notFullScreen : '')}`}>
      {chatOpen && (
        <>
          <ChatHeader onMinimize={toggleChat} onFullScreen={toggleFullScreen} />
          <ChatMessages />
          <ChatInput />
        </>
      )}
        <div onClick={toggleChat}>
            {!chatOpen && (
                <FontAwesomeIcon className={styles.chatIcon} icon={faRobot} size='lg'/>
            )}
        </div>

    </div>
  );
}

export default ChatApp;