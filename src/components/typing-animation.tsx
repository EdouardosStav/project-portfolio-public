
import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export function TypingAnimation({
  texts,
  typingSpeed = 150,  // Slowed down from 100 to 150ms
  deleteSpeed = 75,   // Slowed down from 50 to 75ms
  delayBetween = 3000, // Increased from 2000 to 3000ms for more pause between words
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsRunning(true);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const currentText = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentIndex,
    texts,
    typingSpeed,
    deleteSpeed,
    delayBetween,
    isRunning,
  ]);

  return (
    <span>
      {displayText}
      <span className="inline-block h-5 w-0.5 ml-1 bg-primary animate-pulse"></span>
    </span>
  );
}
