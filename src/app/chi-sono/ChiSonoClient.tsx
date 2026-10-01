'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { aboutData } from '@/data/about';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 4rem;
  }
`;

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4.5rem;
  align-items: flex-start;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const BioImageColumn = styled.div`
  position: sticky;
  top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
  }

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
  }

  .caption {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 1rem;
    font-style: italic;
    text-align: center;
  }
`;

const BioTextColumn = styled.div`
  .intro {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.bgCardAlt};
  border-radius: 2px;
  margin-bottom: 6rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }

  .stat-item {
    .val {
      font-family: ${({ theme }) => theme.fonts.serif};
      font-size: 2.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.accent};
      line-height: 1;
      margin-bottom: 0.5rem;
    }
    .lbl {
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${({ theme }) => theme.colors.textDark};
    }
  }
`;

const PrinciplesSection = styled.div`
  margin-bottom: 6rem;
`;

const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PrincipleCard = styled.div`
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .icon {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  h3 {
    font-size: 1.35rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0;
  }
`;

const ActionBanner = styled.div`
  text-align: center;
  padding: 4.5rem 2rem;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;

  h2 {
    font-size: clamp(2rem, 3.5vw, 2.75rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textLightMuted};
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2.25rem;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accentLight};
      color: ${({ theme }) => theme.colors.textDark};
      transform: translateY(-2px);
    }
  }
`;

export const ChiSonoClient: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        subtitle="Chi Sono"
        title="La persona dietro l’obiettivo"
        description="Conosci la storia di Simone Bonfiglio e la filosofia di Unique Photography: passione, discrezione e ricordi veri nati sul mare di Sanremo."
      />

      <BioGrid>
        <BioImageColumn>
          <img src={aboutData.image} alt="Simone Bonfiglio fotografo" />
          <p className="caption">Simone Bonfiglio • Unique Photography Sanremo</p>
        </BioImageColumn>

        <BioTextColumn>
          <div className="intro">
            &quot;Sono fotografo da sempre, anche se all’inizio non era nei miei piani.&quot;
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
            Oggi ho la fortuna di lavorare a ciò che amo, collaborando con una squadra di professionisti
            affiatati per offrire un’esperienza rilassante, divertente ed emozionante a ogni coppia di
            sposi.
          </p>
        </BioTextColumn>
      </BioGrid>

      {/* Stats */}
      <StatsGrid>
        {aboutData.stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="val">{stat.value}</div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </StatsGrid>

      {/* Principles */}
      <PrinciplesSection>
        <SectionHeader
          subtitle="La Filosofia di Scatto"
          title="I nostri 4 pilastri per un servizio perfetto"
          description="Come garantiamo la massima serenità e fotografie spontanee per il vostro giorno."
        />
        <PrinciplesGrid>
          {aboutData.principles.map((pr, i) => (
            <PrincipleCard key={i}>
              <div className="icon">
                <FiCheckCircle />
              </div>
              <h3>{pr.title}</h3>
              <p>{pr.description}</p>
            </PrincipleCard>
          ))}
        </PrinciplesGrid>
      </PrinciplesSection>

      {/* CTA */}
      <ActionBanner>
        <h2>Ti piacerebbe averci con te?</h2>
        <p>
          Raccontaci le tue nozze o il servizio fotografico che desideri: fisseremo una
          chiacchierata senza impegno in studio a Sanremo o in videochiamata.
        </p>
        <Link href="/contatti/">
          Contattaci Ora <FiArrowRight />
        </Link>
      </ActionBanner>
    </PageWrapper>
  );
};
