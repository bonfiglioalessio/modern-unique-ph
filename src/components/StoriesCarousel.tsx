'use client';

import React, { useRef } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

export interface StoryItem {
  id: string;
  names: string;
  location: string;
  image: string;
  tag: string;
  description: string;
}

const storiesData: StoryItem[] = [
  {
    id: 'rachael-isabella',
    names: 'Rachael & Isabella',
    location: 'Sanremo · Vista Mare',
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/5FHtD3r3uz7COAic2wc29z/67e8f3a6c0fbf9b264ee48b4fe5e2022/Rachael_Isabella-681_copia_2.jpg',
    tag: 'Destination Wedding',
    description: 'Dall’estero alla costa ligure per una cerimonia intima a cielo aperto davanti all’orizzonte blu.',
  },
  {
    id: 'chiara-andrea',
    names: 'Chiara & Andrea',
    location: 'Ospedaletti · Riviera dei Fiori',
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/4UQPITqAu9CuMQKZGpfx32/86ca449ad1f716f7a4d17708277f5c2a/unique-315.jpg',
    tag: 'Luce d’Oro',
    description: 'Fuga al tramonto sulla spiaggia ligure tra risate, onde e una luce calda e dorata indimenticabile.',
  },
  {
    id: 'elena-marco',
    names: 'Elena & Marco',
    location: 'Villa Ormond · Sanremo',
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/rUpNKXH599uCfkrRBhLO8/3a48f6727281db4c2b6c18a3428a958b/unique-0303_copia.jpg',
    tag: 'Villa Storica',
    description: 'La raffinatezza dei giardini d’epoca unita all’energia sfrenata del dopocena con gli amici di sempre.',
  },
  {
    id: 'sofia-luca',
    names: 'Sofia & Luca',
    location: 'Bordighera Alta · Liguria',
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/4xHbYkiZvevJWyaEDEJmTj/556d7e50a768560c6b087ddf9d07ff73/fotografie-di-matrimonio-emozionanti.jpg',
    tag: 'Emozioni Spontanee',
    description: 'I vicoli in pietra del borgo antico, gli sguardi rubati durante i preparativi e la commozione dei genitori.',
  },
  {
    id: 'giulia-matteo',
    names: 'Giulia & Matteo',
    location: 'Poggio & Bussana · Sanremo',
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/7JGWEETzlsP4dmO5ZNjaPQ/28b1c47aad082a2347a3492a8269a645/unique-0001-2.jpg',
    tag: 'Festa & Balli',
    description: 'Musica dal vivo, cocktail e balli a piedi nudi fino a tarda notte senza formalità né pose forzate.',
  },
];

/* --- STYLED COMPONENTS --- */

const SectionWrapper = styled.section`
  padding: 4.5rem 0 3.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 0 2.5rem;
  }
`;

const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
`;

const HeaderText = styled.div`
  max-width: 600px;
`;

const Eyebrow = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.8rem, 3.2vw, 2.75rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin: 0 0 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0;
`;

const CarouselNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-self: flex-end;
  }
`;

const NavButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.cardSecondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ScrollTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 1.5rem;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for a clean editorial look */
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    padding-bottom: 1rem;
  }
`;

const StoryCard = styled.article`
  flex: 0 0 clamp(260px, 78vw, 380px);
  scroll-snap-align: start;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitions.default};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 clamp(320px, 31%, 380px);
  }

  &:hover {
    transform: translateY(-4px);

    .image-wrapper img {
      transform: scale(1.05);
    }

    .expand-icon {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.cardSecondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .tag {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.35rem 0.75rem;
    background: rgba(12, 13, 18, 0.75);
    backdrop-filter: blur(8px);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    border-radius: ${({ theme }) => theme.radius.xs};
  }

  .expand-icon {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(12, 13, 18, 0.75);
    backdrop-filter: blur(8px);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.85);
    transition: all ${({ theme }) => theme.transitions.default};

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const CardContent = styled.div`
  padding: 1.25rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StoryNames = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.35rem;
`;

const StoryLocation = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 0.65rem;
`;

const StoryDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

interface StoriesCarouselProps {
  onImageClick?: (index: number) => void;
}

export const StoriesCarousel: React.FC<StoriesCarouselProps> = ({ onImageClick }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const cardWidth = 360;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <SectionWrapper>
      <ContentContainer>
        <HeaderContainer>
          <HeaderText>
            <Eyebrow>Reportage Recenti</Eyebrow>
            <Title>Storie di Matrimonio in Riviera</Title>
            <Subtitle>
              Scorri per scoprire alcuni dei racconti fotografici realizzati tra Sanremo, la Costa Azzurra e l’entroterra ligure.
            </Subtitle>
          </HeaderText>

          <CarouselNav>
            <NavButton onClick={() => scroll('left')} aria-label="Scorri indietro">
              <FiChevronLeft />
            </NavButton>
            <NavButton onClick={() => scroll('right')} aria-label="Scorri avanti">
              <FiChevronRight />
            </NavButton>
          </CarouselNav>
        </HeaderContainer>

        <ScrollTrack ref={trackRef}>
          {storiesData.map((story, index) => (
            <StoryCard
              key={story.id}
              onClick={() => onImageClick && onImageClick(index)}
              aria-label={`Guarda il reportage di ${story.names}`}
            >
              <ImageWrapper className="image-wrapper">
                <img src={story.image} alt={story.names} loading="lazy" />
                <span className="tag">{story.tag}</span>
                <span className="expand-icon">
                  <FiMaximize2 />
                </span>
              </ImageWrapper>
              <CardContent>
                <StoryNames>{story.names}</StoryNames>
                <StoryLocation>{story.location}</StoryLocation>
                <StoryDescription>{story.description}</StoryDescription>
              </CardContent>
            </StoryCard>
          ))}
        </ScrollTrack>
      </ContentContainer>
    </SectionWrapper>
  );
};
