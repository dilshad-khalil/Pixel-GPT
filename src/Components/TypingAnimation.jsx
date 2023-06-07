import React, { useEffect, useState } from 'react'

const TypingAnimation = ({animateText}) => {
  const [text, setText] = useState('');

  const typeText = (textToType) => {
    for (let i = 0; i < textToType.length; i++) {
      setTimeout(() => {
        setText((prevText) => prevText + textToType[i]);
      }, i * 20);
    }
  };

  useEffect(() => {
    typeText(animateText);
  }, []);

  return <>{text}</>;
}

export default TypingAnimation