'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { aboutData } from '@/data/about';
import * as S from './ChiSonoClient.styles';

export const ChiSonoClient: React.FC = () => {
  return (
    <S.PageWrapper>
      <SectionHeader
        label="Chi sono"
        title="La persona dietro l’obiettivo"
        description="La storia di Simone Bonfiglio e l’approccio di Unique Photography: discrezione, passione e ricordi autentici nati sul mare di Sanremo."
      />

      <S.BioGrid>
        <S.BioImageColumn>
          <img src={aboutData.image} alt="Simone Bonfiglio fotografo" />
          <p className="caption">Simone Bonfiglio • Unique Photography Sanremo</p>
        </S.BioImageColumn>

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
      </S.BioGrid>

      {/* Stats */}
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

      {/* Principles (2x2 Column Grid) */}
      <S.PrinciplesSection>
        <SectionHeader
          label="Filosofia"
          title="Come lavoriamo insieme"
          description="Quattro principi semplici per garantire la massima tranquillità durante il vostro evento."
        />
        <S.PrinciplesGrid>
          {aboutData.principles.map((pr, i) => (
            <S.PrincipleCard key={i}>
              <span className="number">0{i + 1}</span>
              <h3>{pr.title}</h3>
              <p>{pr.description}</p>
            </S.PrincipleCard>
          ))}
        </S.PrinciplesGrid>
      </S.PrinciplesSection>

      {/* CTA */}
      <S.CtaSection>
        <h2>Ti piacerebbe averci con te?</h2>
        <p>
          Raccontaci le tue nozze o il servizio fotografico che desideri: fisseremo una
          chiacchierata senza impegno in studio a Sanremo o in videochiamata.
        </p>
        <Link href="/contatti/">Contattaci ora</Link>
      </S.CtaSection>
    </S.PageWrapper>
  );
};
