'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const NumberSpan = styled.span`
  font-variant-numeric: tabular-nums;
  display: inline-block;
`;

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
}) => {
  // Extract numeric number and any suffix (like '+', '★', '%')
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);

    // Respect reduced-motion preferences
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(targetNumber);
      setHasStarted(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Safety fallback: if not triggered within 800ms, start anyway
    const fallbackTimer = setTimeout(() => {
      setHasStarted(true);
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [targetNumber]);

  useEffect(() => {
    if (!hasStarted || targetNumber === 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * targetNumber);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, targetNumber, duration]);

  return (
    <NumberSpan ref={elementRef}>
      {mounted ? (hasStarted ? count : 0) : targetNumber}
      {suffix}
    </NumberSpan>
  );
};
