'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const SectionWrapper = styled.section`
  padding: 4.5rem 1.5rem 2.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 1.75rem;
    text-align: left;
  }
`;

const Eyebrow = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
  max-width: 920px;
  margin: 0 auto 1.25rem;

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 680px;
  margin: 0 auto 2.25rem;
  line-height: 1.65;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const PrimaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.75rem;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0.95rem 1.5rem;
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

export const HeroSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Eyebrow>Sanremo • Riviera dei Fiori • Liguria</Eyebrow>
      <Title>
        Fotografo di matrimonio a Sanremo, <span>in Liguria</span>.
      </Title>
      <Subtitle>
        Simone Bonfiglio è un fotografo professionista con studio a Sanremo, specializzato in fotografia di matrimonio.
        Lavora principalmente in Liguria e Riviera per trasformare ogni momento in ricordi autentici nel tempo.
      </Subtitle>
      <Actions>
        <PrimaryCta href="/contatti/">Richiedi Preventivo</PrimaryCta>
        <TextAction href="/gallery/">
          Guarda la selezione fotografica <FiArrowRight />
        </TextAction>
      </Actions>
    </SectionWrapper>
  );
};
