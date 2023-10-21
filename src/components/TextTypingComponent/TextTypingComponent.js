import React, { useState, useEffect } from "react";

const TextTypingComponent = () => {
  const [text, setText] = useState("");
  const messages = [
    "Front-End Developer in Yerevan specializing <br> in user-friendly web interfaces seeking <br> opportunities for growth and learning"
  ];
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;

    if (isTyping) {
      interval = setInterval(() => {
        if (text.length < messages[index].length) {
          setText((prevText) => prevText + messages[index][text.length]);
        } else {
          setIsTyping(false);
          clearInterval(interval);
          setTimeout(() => {
            setIsTyping(true);
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setText("");
          }, 2000); // Wait for 2 seconds before clearing the text and typing the next message
        }
      }, 50); // Typing speed: 50 milliseconds per character
    }

    return () => {
      clearInterval(interval);
    };
  }, [text, index, isTyping]);

  return (
    <p
      style={{ fontSize: "16px", color: "#5a5959", whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default TextTypingComponent;
