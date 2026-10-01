import { useEffect } from 'react';

/**
 * Hook to lock and restore body scroll (e.g. when a modal, drawer or lightbox is open).
 */
export function useLockedBody(locked = false): void {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}
