import React, { useState, useEffect } from 'react';

interface TypedTextProps {
  messages: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  messages,
  typeSpeed = 50,
  deleteSpeed = 30,
  pauseDuration = 3000,
  className = ''
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const currentMessage = messages[currentMessageIndex];

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentMessage.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next message
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, isTyping, currentMessageIndex, messages, typeSpeed, deleteSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Reset animation when messages change (language switch)
  useEffect(() => {
    setCurrentMessageIndex(0);
    setDisplayedText('');
    setIsTyping(true);
  }, [messages]);

  return (
    <div className={className}>
      <span>{displayedText}</span>
      <span className={`text-blue-600 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </div>
  );
};

export default TypedText;