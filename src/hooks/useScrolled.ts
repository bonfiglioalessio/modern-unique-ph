import { useState, useEffect } from 'react';

/**
 * Hook to detect whether the window has been scrolled past a given threshold.
 * Uses a passive event listener for optimal scroll performance.
 */
export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > threshold;
      setScrolled((prev) => (prev !== isPastThreshold ? isPastThreshold : prev));
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
