'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { InfinitePhotoRibbon } from '@/components/InfinitePhotoRibbon';
import { StoriesCarousel } from '@/components/StoriesCarousel';
import { AwardsTimeline } from '@/components/AwardsTimeline';
import { ReviewsSlider } from '@/components/ReviewsSlider';
import { SectionHeader } from '@/components/SectionHeader';
import { Lightbox } from '@/components/Lightbox';
import { galleryData } from '@/data/gallery';
import { servicesData } from '@/data/services';
import { aboutData } from '@/data/about';
import { FiArrowRight } from 'react-icons/fi';

/* --- STYLED COMPONENTS (FLAT EDITORIAL STANDARD) --- */

const PageContainer = styled.div`
  width: 100%;
`;

// Hero
const HeroSection = styled.section`
  padding: 4.5rem 1.5rem 2.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 1.75rem;
    text-align: left;
  }
`;

const HeroEyebrow = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;

const HeroTitle = styled.h1`
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

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 680px;
  margin: 0 auto 2.25rem;
  line-height: 1.65;
`;

const HeroActions = styled.div`
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

// Philosophy Section (Pure Whitespace & Typography)
const PhilosophySection = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

const PhilosophyContent = styled.div`
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

// Services 3-Column Grid on Desktop
const ServicesSection = styled.section`
  padding: 5rem 1.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-4px);

    .thumb img {
      transform: scale(1.05);
    }
  }

  .thumb {
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.cardSecondary};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 500ms ease;
    }
  }

  .body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .tag {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: ${({ theme }) => theme.colors.accent};
      margin-bottom: 0.4rem;
      display: block;
    }

    h3 {
      font-family: ${({ theme }) => theme.fonts.serif};
      font-size: 1.35rem;
      color: ${({ theme }) => theme.colors.text};
      margin: 0 0 0.5rem;
      font-weight: 500;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 0 0 1.5rem;
      flex-grow: 1;
    }
  }
`;

// About Flat Section
const AboutSection = styled.section`
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
  }

  p {
    font-size: 1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`;

// Awards Section
const AwardsSection = styled.section`
  padding: 5rem 1.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

// Final CTA Section
const CtaSection = styled.section`
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

/* --- HOME PAGE COMPONENT --- */

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PageContainer>
      {/* 1. Clean Editorial Hero */}
      <HeroSection>
        <HeroEyebrow>Sanremo • Riviera dei Fiori • Liguria</HeroEyebrow>
        <HeroTitle>
          Fotografo di matrimonio a Sanremo, <span>in Liguria</span>.
        </HeroTitle>
        <HeroSubtitle>
          Simone Bonfiglio è un fotografo professionista con studio a Sanremo, specializzato in fotografia di matrimonio.
          Lavora principalmente in Liguria e Riviera per trasformare ogni momento in ricordi autentici nel tempo.
        </HeroSubtitle>
        <HeroActions>
          <PrimaryCta href="/contatti/">Richiedi disponibilità data</PrimaryCta>
          <TextAction href="/gallery/">
            Guarda la selezione fotografica <FiArrowRight />
          </TextAction>
        </HeroActions>
      </HeroSection>

      {/* 2. Infinite Continuous Photo Ribbon (Marquee) */}
      <InfinitePhotoRibbon onImageClick={(idx) => setLightboxIndex(idx)} />

      {/* 3. Philosophy */}
      <PhilosophySection>
        <PhilosophyContent>
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
        </PhilosophyContent>
      </PhilosophySection>

      {/* 4. Horizontal Stories Carousel (Featured Real Weddings) */}
      <StoriesCarousel onImageClick={(idx) => setLightboxIndex(idx)} />

      {/* 5. Services (3 columns on desktop) */}
      <ServicesSection>
        <SectionHeader
          label="Servizi"
          title="Come lavoriamo insieme"
          description="Trasparenza totale: presenza per l’intera giornata con due fotografi, montaggio video live durante il ricevimento e album artigianali d’autore."
        />
        <ServicesGrid>
          {servicesData.slice(0, 3).map((service) => (
            <ServiceCard key={service.id}>
              <div className="thumb">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="body">
                <span className="tag">{service.subtitle}</span>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <div>
                  <TextAction href={`/servizi/#${service.id}`}>
                    Dettagli <FiArrowRight />
                  </TextAction>
                </div>
              </div>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      {/* 6. About Simone Preview */}
      <AboutSection>
        <AboutGrid>
          <AboutPhotoWrap>
            <img
              src="https://images.ctfassets.net/1qgv2qxuxgqc/7JGWEETzlsP4dmO5ZNjaPQ/28b1c47aad082a2347a3492a8269a645/unique-0001-2.jpg"
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
      </AboutSection>

      {/* 7. Awards Timeline (Chronological events 2020-2022) */}
      <AwardsSection>
        <SectionHeader
          label="Riconoscimenti"
          title="Premi e traguardi"
          description="Riconoscimenti nazionali assegnati dall’Associazione Nazionale Fotografi di Matrimonio (ANFM) e premi Wedding Awards basati sulle recensioni verificate."
        />
        <AwardsTimeline />
      </AwardsSection>

      {/* 8. Reviews Slider (Interactive Flat Surface with 5.0 rating) */}
      <ReviewsSlider />

      {/* 9. Final CTA */}
      <CtaSection>
        <h2>Riuscite a immaginarvi nelle mie foto?</h2>
        <p>
          Vi piacerebbero ricordi autentici come questi? Lavoriamo insieme!
          Scrivetemi di voi, della data e della location del matrimonio per richiedere la disponibilità:
          vi invierò un PDF con maggiori informazioni su come lavoro e con tutti i dettagli dei prezzi proposti.
          Se siete interessati, fisseremo un appuntamento per una videochiamata conoscitiva :)
        </p>
        <PrimaryCta href="/contatti/">Richiedi disponibilità e guida prezzi</PrimaryCta>
      </CtaSection>

      {/* Lightbox for gallery view */}
      <Lightbox
        images={galleryData.slice(0, 8)}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() =>
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % 8 : 0))
        }
        onPrev={() =>
          setLightboxIndex((prev) => (prev !== null ? (prev - 1 + 8) % 8 : 0))
        }
      />
    </PageContainer>
  );
}
