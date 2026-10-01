'use client';

import React, { useEffect, useCallback } from 'react';
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
  background: rgba(12, 12, 12, 0.94);
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

const ContentContainer = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageElement = styled.img`
  max-width: 88vw;
  max-height: 78vh;
  object-fit: contain;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  animation: fadeIn 0.3s ease-out;

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
`;

const CaptionBar = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};

  h4 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.15rem;
    letter-spacing: 0.03em;
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLightMuted};
    margin-top: 0.2rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.white};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: rotate(90deg);
  }
`;

const NavButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === 'left' ? 'left: 1.5rem;' : 'right: 1.5rem;')}
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-50%) scale(1.08);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    ${({ $direction }) => ($direction === 'left' ? 'left: 0.5rem;' : 'right: 0.5rem;')}
  }
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

  if (!isOpen || !currentImage) return null;

  return (
    <Overlay $isOpen={isOpen} onClick={onClose} role="dialog" aria-modal="true">
      <CloseButton onClick={onClose} aria-label="Chiudi finestra">
        <FiX />
      </CloseButton>

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
    </Overlay>
  );
};
