"use client";

import { useEffect, useRef, useState } from "react";

interface CounterNumberProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export default function CounterNumber({
  value,
  duration = 2000,
  className = "",
}: CounterNumberProps) {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    const strVal = String(value);
    const match = strVal.match(/^([^\d]*)([\d]+)([^\d]*)$/);
    if (match) {
      return `${match[1]}0${match[3]}`;
    }
    return strVal;
  });

  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const strVal = String(value);
    const match = strVal.match(/^([^\d]*)([\d]+)([^\d]*)$/);

    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const prefix = match[1];
    const targetNum = parseInt(match[2], 10);
    const suffix = match[3];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // easeOutCubic: 1 - Math.pow(1 - progress, 3)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeProgress * targetNum);

            setDisplayValue(`${prefix}${currentNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(`${prefix}${targetNum}${suffix}`);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
