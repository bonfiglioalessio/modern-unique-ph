'use client';

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { reviewsData, ReviewItem } from '@/data/reviews';
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

/* --- STYLED COMPONENTS --- */

const SectionWrapper = styled.section`
  padding: 4.5rem 1.5rem 4rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 1.25rem 2.5rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
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

const ScoreBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.15rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  .stars {
    color: #eab308;
    letter-spacing: 2px;
  }

  .source {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const SliderSurface = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 3.5rem 3.5rem 3rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.75rem 1.25rem 1.5rem;
  }
`;

const SlideTrack = styled.div`
  min-height: 220px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 180px;
  }
`;

const SlideContent = styled.div<{ $active: boolean }>`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  width: 100%;
  animation: fadeIn 350ms ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HighlightQuote = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.2rem, 4.5vw, 1.75rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 0.85rem;
  }
`;

const FullText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 820px;
  margin: 0 0 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }
`;

const AuthorMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  .author-name {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  .author-date {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .verified-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    padding: 0.2rem 0.6rem;
    border-radius: ${({ theme }) => theme.radius.xs};
  }
`;

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 1.5rem;
    padding-top: 1.25rem;
  }
`;

const DotsList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '28px' : '8px')};
  height: 8px;
  border-radius: 4px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.divider};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ArrowControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ArrowBtn = styled.button`
  width: 40px;
  height: 40px;
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
    width: 18px;
    height: 18px;
  }
`;

const ReadAllLink = styled(Link)`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-left: 1rem;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accentDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ReviewsSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <SectionWrapper>
      <HeaderRow>
        <HeaderText>
          <Eyebrow>Dicono di Me</Eyebrow>
          <Title>Le Parole degli Sposi</Title>
          <Subtitle>
            Niente scalette imposte: ecco cosa raccontano le coppie dopo aver vissuto insieme il loro matrimonio.
          </Subtitle>
        </HeaderText>

        <ScoreBadge>
          <span className="stars">★★★★★</span>
          <span>5.0 / 5</span>
          <span className="source">· Matrimonio.com</span>
        </ScoreBadge>
      </HeaderRow>

      <SliderSurface
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <SlideTrack>
          {reviewsData.map((item: ReviewItem, idx: number) => {
            const isActive = idx === activeIdx;
            return (
              <SlideContent key={item.id} $active={isActive} aria-hidden={!isActive}>
                {item.highlight && (
                  <HighlightQuote>“{item.highlight}”</HighlightQuote>
                )}
                <FullText>{item.text}</FullText>
                <AuthorMeta>
                  <span className="author-name">{item.author}</span>
                  {item.date && <span className="author-date">· {item.date}</span>}
                  <span className="verified-badge">
                    <FiCheckCircle /> Recensione Verificata
                  </span>
                </AuthorMeta>
              </SlideContent>
            );
          })}
        </SlideTrack>

        <ControlsRow>
          <DotsList>
            {reviewsData.map((item, idx) => (
              <Dot
                key={item.id}
                $active={idx === activeIdx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Vai alla recensione ${idx + 1}`}
              />
            ))}
            <ReadAllLink href="/recensioni">Tutte le recensioni →</ReadAllLink>
          </DotsList>

          <ArrowControls>
            <ArrowBtn onClick={prev} aria-label="Recensione precedente">
              <FiChevronLeft />
            </ArrowBtn>
            <ArrowBtn onClick={next} aria-label="Recensione successiva">
              <FiChevronRight />
            </ArrowBtn>
          </ArrowControls>
        </ControlsRow>
      </SliderSurface>
    </SectionWrapper>
  );
};
