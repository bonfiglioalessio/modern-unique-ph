'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

export type RevealEffect = 'fade-up' | 'fade-in' | 'scale-settle';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  effect?: RevealEffect;
  distance?: number;
  className?: string;
  as?: React.ElementType;
}

interface RevealContainerProps {
  $isVisible: boolean;
  $delay: number;
  $duration: number;
  $effect: RevealEffect;
  $distance: number;
}

const getInitialTransform = (effect: RevealEffect, distance: number) => {
  switch (effect) {
    case 'fade-up':
      return `translate3d(0, ${distance}px, 0)`;
    case 'scale-settle':
      return `scale(1.03) translate3d(0, ${Math.round(distance / 2)}px, 0)`;
    case 'fade-in':
    default:
      return 'translate3d(0, 0, 0)';
  }
};

const RevealContainer = styled.div<RevealContainerProps>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible, $effect, $distance }) =>
    $isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform($effect, $distance)};
  transition:
    opacity ${({ $duration }) => $duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${({ $delay }) => $delay}ms,
    transform ${({ $duration }) => $duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${({ $delay }) => $delay}ms;

  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      will-change: opacity, transform;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    will-change: auto !important;
  }
`;

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 750,
  effect = 'fade-up',
  distance = 24,
  className,
  as,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediate reveal if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Safety fallback: if not triggered within 2 seconds of entering or loading, reveal
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <RevealContainer
      ref={containerRef}
      as={as}
      className={className}
      $isVisible={isVisible}
      $delay={delay}
      $duration={duration}
      $effect={effect}
      $distance={distance}
    >
      {children}
    </RevealContainer>
  );
};
