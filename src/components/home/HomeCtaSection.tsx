'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 5.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 1.25rem;
    text-align: left;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(2rem, 3.5vw, 2.75rem);
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
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

export const HomeCtaSection: React.FC = () => {
  return (
    <SectionWrapper>
      <h2>Riuscite a immaginarvi nelle mie foto?</h2>
      <p>
        Vi piacerebbero ricordi autentici come questi? Lavoriamo insieme!
        Scrivetemi di voi, della data e della location del matrimonio per richiedere la disponibilità:
        vi invierò un PDF con maggiori informazioni su come lavoro e con tutti i dettagli dei prezzi proposti.
        Se siete interessati, fisseremo un appuntamento per una videochiamata conoscitiva :)
      </p>
      <PrimaryCta href="/contatti/">Richiedi disponibilità e guida prezzi</PrimaryCta>
    </SectionWrapper>
  );
};
