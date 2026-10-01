'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { aboutData } from '@/data/about';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 4rem;
  align-items: flex-start;
  margin-bottom: 4.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BioImageColumn = styled.div`
  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.lg};
  }

  .caption {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 0.75rem;
    text-align: center;
  }
`;

const BioTextColumn = styled.div`
  .intro {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.35rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`;

// Stats flat row
const StatsSurface = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: 5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }

  .stat-item {
    .val {
      font-size: 2.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.accent};
      line-height: 1;
      margin-bottom: 0.35rem;
      font-variant-numeric: tabular-nums;
    }
    .lbl {
      font-size: 0.85rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

// Principles (Single surface with hairline dividers)
const PrinciplesSection = styled.div`
  margin-bottom: 5rem;
`;

const PrinciplesSurface = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 0 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

const PrincipleRow = styled.div`
  padding: 1.75rem 0;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.35rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

const CtaSection = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto;

  h2 {
    font-size: clamp(1.85rem, 3vw, 2.3rem);
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
    margin-bottom: 1.75rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    padding: 0.85rem 1.75rem;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: ${({ theme }) => theme.radius.md};
    transition: background-color ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const ChiSonoClient: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        label="Chi sono"
        title="La persona dietro l’obiettivo"
        description="La storia di Simone Bonfiglio e l’approccio di Unique Photography: discrezione, passione e ricordi autentici nati sul mare di Sanremo."
      />

      <BioGrid>
        <BioImageColumn>
          <img src={aboutData.image} alt="Simone Bonfiglio fotografo" />
          <p className="caption">Simone Bonfiglio • Unique Photography Sanremo</p>
        </BioImageColumn>

        <BioTextColumn>
          <div className="intro">
            &ldquo;Sono fotografo da sempre, anche se all’inizio non era nei miei piani.&rdquo;
          </div>
          <p>
            Come spesso succede, quando i genitori hanno un mestiere, da figli si desidera fare
            tutt’altro. Dopo il diploma, però, mi sono ritrovato nel negozio di fotografia di
            famiglia a Sanremo, circondato da foto da stampare, cornici da vendere e, soprattutto, da
            quella che avevo sempre snobbato da bambino: la macchina fotografica. È bastato poco per
            innamorarmi, e da quel momento non ci siamo più lasciati.
          </p>
          {aboutData.bioFull.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>
            Oggi ho la fortuna di fare ciò che amo, collaborando con una squadra affiatata per
            offrire un’esperienza rilassata, divertente e serena a ogni coppia di sposi.
          </p>
        </BioTextColumn>
      </BioGrid>

      {/* Stats */}
      <StatsSurface>
        {aboutData.stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="val">{stat.value}</div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </StatsSurface>

      {/* Principles (Single surface with hairline dividers) */}
      <PrinciplesSection>
        <SectionHeader
          label="Filosofia"
          title="Come lavoriamo insieme"
          description="Quattro principi semplici per garantire la massima tranquillità durante il vostro evento."
        />
        <PrinciplesSurface>
          {aboutData.principles.map((pr, i) => (
            <PrincipleRow key={i}>
              <h3>{pr.title}</h3>
              <p>{pr.description}</p>
            </PrincipleRow>
          ))}
        </PrinciplesSurface>
      </PrinciplesSection>

      {/* CTA */}
      <CtaSection>
        <h2>Ti piacerebbe averci con te?</h2>
        <p>
          Raccontaci le tue nozze o il servizio fotografico che desideri: fisseremo una
          chiacchierata senza impegno in studio a Sanremo o in videochiamata.
        </p>
        <Link href="/contatti/">Contattaci ora</Link>
      </CtaSection>
    </PageWrapper>
  );
};
