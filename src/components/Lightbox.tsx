'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { GalleryImage } from '@/types/gallery';
import { useLockedBody } from '@/hooks';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 10, 12, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.25s ease;
  touch-action: pan-y pinch-zoom;
`;

const ContentContainer = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 94vw;
    max-height: 80vh;
    padding-bottom: 4.5rem; /* Room for floating bottom dock */
  }
`;

const ImageElement = styled.img`
  max-width: 88vw;
  max-height: 75vh;
  object-fit: contain;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  user-select: none;
  -webkit-user-drag: none;
  animation: fadeIn 0.25s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0.3;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 94vw;
    max-height: 65vh;
  }
`;

const CaptionBar = styled.div`
  margin-top: 0.85rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};

  h4 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.15rem;
    letter-spacing: 0.02em;
    margin: 0;
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLightMuted};
    margin-top: 0.25rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: calc(1.25rem + env(safe-area-inset-top, 0px));
  right: 1.25rem;
  background: rgba(26, 26, 30, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: ${({ theme }) => theme.colors.white};
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  cursor: pointer;
  z-index: 2200;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: rotate(90deg);
  }

  &:active {
    transform: scale(0.92);
  }
`;

const DesktopCounter = styled.div`
  position: absolute;
  top: calc(1.4rem + env(safe-area-inset-top, 0px));
  left: 1.5rem;
  background: rgba(26, 26, 30, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  z-index: 2200;
  font-variant-numeric: tabular-nums;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

/* Desktop Side Nav Buttons (hidden on mobile in favor of bottom dock) */
const NavButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === 'left' ? 'left: 1.75rem;' : 'right: 1.75rem;')}
  background: rgba(26, 26, 30, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: ${({ theme }) => theme.colors.white};
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2100;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-50%) scale(1.08);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

/* Ergonomic Mobile Bottom Floating Dock */
const MobileBottomDock = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px));
    left: 50%;
    transform: translateX(-50%);
    background: rgba(22, 22, 26, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 9999px;
    padding: 0.35rem 0.6rem;
    gap: 1.25rem;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
    z-index: 2200;
  }
`;

const DockButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.15s ease;

  &:active {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(0.92);
  }
`;

const DockCounter = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.9);
  font-variant-numeric: tabular-nums;
  user-select: none;
`;

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentImage = isOpen ? images[currentIndex] : null;

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev],
  );

  // Body scroll lock via custom hook
  useLockedBody(isOpen);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Check for dominant horizontal swipe with threshold of 45px
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        onNext();
      } else {
        onPrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen || !currentImage) return null;

  return (
    <Overlay
      $isOpen={isOpen}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizzatore fotografia"
    >
      <DesktopCounter>
        {currentIndex + 1} / {images.length}
      </DesktopCounter>

      <CloseButton onClick={onClose} aria-label="Chiudi anteprima">
        <FiX />
      </CloseButton>

      {/* Desktop Left Arrow */}
      <NavButton
        $direction="left"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Foto precedente"
      >
        <FiChevronLeft />
      </NavButton>

      <ContentContainer onClick={(e) => e.stopPropagation()}>
        <ImageElement src={currentImage.src} alt={currentImage.alt} />
        <CaptionBar>
          <h4>{currentImage.title}</h4>
          {currentImage.location && <p>{currentImage.location}</p>}
        </CaptionBar>
      </ContentContainer>

      {/* Desktop Right Arrow */}
      <NavButton
        $direction="right"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Foto successiva"
      >
        <FiChevronRight />
      </NavButton>

      {/* Mobile Floating Bottom Dock (Always visible, ergonomic touch targets) */}
      <MobileBottomDock onClick={(e) => e.stopPropagation()}>
        <DockButton
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Foto precedente"
        >
          <FiChevronLeft />
        </DockButton>
        <DockCounter>
          {currentIndex + 1} / {images.length}
        </DockCounter>
        <DockButton
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Foto successiva"
        >
          <FiChevronRight />
        </DockButton>
      </MobileBottomDock>
    </Overlay>
  );
};
