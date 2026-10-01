'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GalleryImage, galleryData } from '@/data/gallery';

interface InfinitePhotoRibbonProps {
  onImageClick?: (index: number) => void;
}

const marqueeAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const RibbonWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 1.5rem auto 4.5rem;
  position: relative;
  min-height: clamp(285px, 27.5vw, 400px);
  /* Soft fade gradient on the edges for a clean editorial look */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 4%,
    black 96%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 4%,
    black 96%,
    transparent 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 1rem auto 3rem;
    min-height: clamp(260px, 32vw, 320px);
    mask-image: none;
    -webkit-mask-image: none;
  }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  gap: 1.25rem;
  animation: ${marqueeAnimation} 38s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.85rem;
    animation-duration: 28s;
  }
`;

const PhotoCard = styled.div`
  position: relative;
  width: clamp(230px, 22vw, 320px);
  aspect-ratio: 4 / 5;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.cardSecondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.25rem 1rem 0.85rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);
    color: #ffffff;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};

    span {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.colors.accentLight};
      text-transform: uppercase;
      margin-bottom: 0.2rem;
    }

    strong {
      font-size: 0.95rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.serif};
      display: block;
    }
  }

  &:hover {
    img {
      transform: scale(1.04);
    }
    .caption {
      opacity: 1;
    }
  }
`;

export const InfinitePhotoRibbon: React.FC<InfinitePhotoRibbonProps> = ({ onImageClick }) => {
  // Curate 8 diverse high-impact images (couples, emotions, ceremonies, party, venue)
  const ribbonImages: GalleryImage[] = galleryData.slice(0, 8);
  // Duplicate for seamless infinite loop
  const loopImages = [...ribbonImages, ...ribbonImages];

  return (
    <RibbonWrapper aria-label="Galleria a scorrimento continuo">
      <Track>
        {loopImages.map((img, index) => {
          const originalIndex = index % ribbonImages.length;
          const isLcpCandidate = index < 2;
          return (
            <PhotoCard
              key={`${img.id}-${index}`}
              onClick={() => onImageClick && onImageClick(originalIndex)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={isLcpCandidate ? 'eager' : 'lazy'}
                fetchPriority={isLcpCandidate ? 'high' : 'auto'}
              />
              <div className="caption">
                <span>{img.categoryLabel}</span>
                <strong>{img.title}</strong>
              </div>
            </PhotoCard>
          );
        })}
      </Track>
    </RibbonWrapper>
  );
};
