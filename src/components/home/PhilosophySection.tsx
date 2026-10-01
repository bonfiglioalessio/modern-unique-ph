'use client';

import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

const Content = styled.div`
  max-width: 820px;
  margin: 0 auto;
  text-align: center;

  .section-label {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(1.85rem, 3.2vw, 2.75rem);
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.05rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

import { ScrollReveal } from '@/components/ui';

export const PhilosophySection: React.FC = () => {
  return (
    <SectionWrapper>
      <ScrollReveal effect="fade-up" duration={850}>
        <Content>
          <div className="section-label">Filosofia di scatto</div>
          <h2>Raccontare la vostra storia, con naturalezza</h2>
          <p>
            Ciò che amo di più è raccontare la vostra storia vivendo insieme a voi ogni momento della giornata:
            quelli emozionanti, quelli spontanei, quelli inaspettati.
          </p>
          <p>
            Il mio obiettivo è trasformarli in immagini autentiche che possiate rivivere nel tempo.
            Niente pose noiose o sorrisi a comando: solo voi, esattamente come siete.
          </p>
        </Content>
      </ScrollReveal>
    </SectionWrapper>
  );
};
