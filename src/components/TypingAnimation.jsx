import { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, speed = 100, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const fullText = texts[0]; // Only use the first text
    
    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Typing is complete, hide cursor after pause
      const timeout = setTimeout(() => {
        setShowCursor(false);
        setIsTyping(false);
      }, pauseTime);

      return () => clearTimeout(timeout);
    }
  }, [currentText, isTyping, texts, speed, pauseTime]);

  return (
    <span className="typing-text">
      {currentText}
      {showCursor && <span className="cursor">|</span>}
    </span>
  );
};

export default TypingAnimation;
