"use client";

import { useEffect, useState } from "react";
import styles from "../index.module.scss";

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
};

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1800,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Apagando os caracteres
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Escrevendo os caracteres
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
      }, typingSpeed);
    }

    // Quando a palavra estiver totalmente escrita, aguarda e muda para apagar
    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    }

    // Quando a palavra for totalmente apagada, muda para escrever a próxima palavra
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={styles.typewriterContainer}>
      {currentText}
      <span className={styles.typewriterCursor} aria-hidden="true" />
    </span>
  );
}
