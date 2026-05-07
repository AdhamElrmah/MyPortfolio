import React, { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = "",
  style,
}) => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];

    if (!isDeleting) {
      // Typing
      if (text.length < currentPhrase.length) {
        timeoutRef.current = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Pause at end of phrase
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className} style={style}>
      {text}
      <span className="animate-pulse text-[#C3E41D]">|</span>
    </span>
  );
};
