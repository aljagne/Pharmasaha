import React, { useEffect, useRef } from 'react';

interface StaggerTextProps {
  text: string;
  className?: string;
  delayStart?: number;
  staggerDuration?: number;
  wordMode?: boolean;
  once?: boolean;
}

export default function StaggerText({
  text,
  className = '',
  delayStart = 0,
  staggerDuration = 0.05,
  wordMode = false,
}: StaggerTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('stagger-revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const elements = wordMode ? text.split(' ') : text.split('');

  return (
    <div
      ref={ref}
      className={`stagger-container flex flex-wrap ${className}`}
    >
      {elements.map((element, index) => (
        <span
          key={index}
          className="stagger-item inline-block"
          style={{
            transitionDelay: `${delayStart + index * staggerDuration}s`,
            marginRight: wordMode ? '0.25em' : '0em',
          }}
        >
          {element === ' ' ? '\u00A0' : element}
        </span>
      ))}
    </div>
  );
}
