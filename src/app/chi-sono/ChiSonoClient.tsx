'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { aboutData } from '@/data/about';
import { ScrollReveal } from '@/components/ui';
import * as S from './ChiSonoClient.styles';

export const ChiSonoClient: React.FC = () => {
  return (
    <S.PageWrapper>
      <ScrollReveal effect="fade-up">
        <SectionHeader
          label="Chi sono"
          title="La persona dietro l’obiettivo"
          description="La storia di Simone Bonfiglio e l’approccio di Unique Photography: discrezione, passione e ricordi autentici nati sul mare di Sanremo."
        />
      </ScrollReveal>

      <S.BioGrid>
        <ScrollReveal effect="scale-settle" duration={850}>
          <S.BioImageColumn>
            <img src={aboutData.image} alt="Simone Bonfiglio fotografo" />
            <p className="caption">Simone Bonfiglio • Unique Photography Sanremo</p>
          </S.BioImageColumn>
        </ScrollReveal>

        <ScrollReveal effect="fade-up" delay={150} duration={800}>
          <S.BioTextColumn>
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
          </S.BioTextColumn>
        </ScrollReveal>
      </S.BioGrid>

      {/* Stats */}
      <ScrollReveal effect="fade-up" duration={800}>
        <S.StatsSurface>
          {aboutData.stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="val">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </S.StatsSurface>
      </ScrollReveal>

      {/* Principles (2x2 Column Grid) */}
      <S.PrinciplesSection>
        <ScrollReveal effect="fade-up">
          <SectionHeader
            label="Filosofia"
            title="Come lavoriamo insieme"
            description="Quattro principi semplici per garantire la massima tranquillità durante il vostro evento."
          />
        </ScrollReveal>
        <S.PrinciplesGrid>
          {aboutData.principles.map((pr, i) => (
            <ScrollReveal key={i} effect="fade-up" delay={i * 100} duration={750}>
              <S.PrincipleCard>
                <span className="number">0{i + 1}</span>
                <h3>{pr.title}</h3>
                <p>{pr.description}</p>
              </S.PrincipleCard>
            </ScrollReveal>
          ))}
        </S.PrinciplesGrid>
      </S.PrinciplesSection>

      {/* CTA */}
      <ScrollReveal effect="fade-up" duration={800}>
        <S.CtaSection>
          <h2>Ti piacerebbe averci con te?</h2>
          <p>
            Raccontaci le tue nozze o il servizio fotografico che desideri: fisseremo una
            chiacchierata senza impegno in studio a Sanremo o in videochiamata.
          </p>
          <Link href="/contatti/">Contattaci ora</Link>
        </S.CtaSection>
      </ScrollReveal>
    </S.PageWrapper>
  );
};
