'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { aboutData } from '@/data/about';
import { FiArrowRight } from 'react-icons/fi';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

const AboutGrid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AboutPhotoWrap = styled.div`
  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.lg};
  }
`;

const AboutContent = styled.div`
  .label {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.5rem;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(1.85rem, 3vw, 2.5rem);
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`;

const TextAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const HomeAboutSection: React.FC = () => {
  return (
    <SectionWrapper>
      <AboutGrid>
        <AboutPhotoWrap>
          <img
            src={aboutData.image}
            alt="Simone Bonfiglio fotografo matrimonio Sanremo"
            loading="lazy"
          />
        </AboutPhotoWrap>
        <AboutContent>
          <div className="label">Chi sono</div>
          <h2>Ciao, sono Simone Bonfiglio</h2>
          <p>{aboutData.bioIntro}</p>
          <p>
            Dal 2017 fotografo matrimoni in Italia, in particolare in Liguria. Vivo a Sanremo,
            una splendida città di mare al confine con la Francia.
          </p>
          <TextAction href="/chi-sono/">
            Scopri di più su di me <FiArrowRight />
          </TextAction>
        </AboutContent>
      </AboutGrid>
    </SectionWrapper>
  );
};
