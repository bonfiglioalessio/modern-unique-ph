'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { Lightbox } from '@/components/Lightbox';
import { galleryData } from '@/data/gallery';
import { servicesData } from '@/data/services';
import { reviewsData } from '@/data/reviews';
import { awardsData } from '@/data/awards';
import { aboutData } from '@/data/about';
import { FiArrowRight } from 'react-icons/fi';

/* --- STYLED COMPONENTS (FLAT EDITORIAL STANDARD) --- */

const PageContainer = styled.div`
  width: 100%;
`;

// Hero
const HeroSection = styled.section`
  padding: 4.5rem 1.5rem 3.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 2rem;
    text-align: left;
  }
`;

const HeroEyebrow = styled.p`
  font-size: 0.9375rem; /* 15px */
  font-weight: 600;
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
  max-width: 900px;
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
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
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

// Flat Hero Photo Grid
const HeroGallery = styled.div`
  max-width: 1240px;
  margin: 1.5rem auto 4.5rem;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }
`;

const HeroPhoto = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.cardSecondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
    color: #ffffff;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};

    span {
      display: block;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.accentLight};
    }
    strong {
      font-size: 0.95rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.serif};
    }
  }

  &:hover {
    img {
      transform: scale(1.03);
    }
    .caption {
      opacity: 1;
    }
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
    font-size: 0.9375rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: clamp(1.85rem, 3.2vw, 2.5rem);
    font-weight: 400;
    line-height: 1.35;
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

// Services Rows (Single grouped surface with hairline dividers)
const ServicesSection = styled.section`
  padding: 5rem 1.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

const ServicesListSurface = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 0 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const ServiceRow = styled.div`
  display: flex;
  align-items: center;
  padding: 1.75rem 0;
  gap: 1.75rem;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  .thumb {
    width: 90px;
    height: 90px;
    border-radius: ${({ theme }) => theme.radius.md};
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    flex-grow: 1;

    .tag {
      font-size: 0.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.accent};
      margin-bottom: 0.2rem;
      display: block;
    }

    h3 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 0.35rem;
    }

    p {
      font-size: 0.925rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 0;
      line-height: 1.5;
    }
  }

  .action {
    flex-shrink: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    .thumb {
      width: 72px;
      height: 72px;
    }
    .info h3 {
      font-size: 1.1rem;
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
    font-size: 0.9375rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: clamp(1.85rem, 3vw, 2.4rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`;

// Awards Flat Rows (Year - Category - Organization)
const AwardsSection = styled.section`
  padding: 5rem 1.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

const AwardsListSurface = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 0 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

const AwardRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1.5fr 1fr;
  padding: 1.25rem 0;
  align-items: center;
  gap: 1.5rem;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  .year {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
  }

  .category {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  .org {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.25rem;
    .org {
      text-align: left;
    }
  }
`;

// Reviews Flat Surface
const ReviewsSection = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

const ReviewsSurface = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.darkCard};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.dividerDark};
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

const ReviewRow = styled.div`
  padding: 2rem 0;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.dividerDark};
  }

  .stars {
    color: #f59e0b;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textLightSecondary};
    margin-bottom: 0.75rem;
  }

  .author-line {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLightMuted};

    strong {
      color: ${({ theme }) => theme.colors.accentLight};
    }
  }
`;

// CTA Final Section
const CtaSection = styled.section`
  padding: 5rem 1.5rem;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
    text-align: left;
  }

  h2 {
    font-size: clamp(1.85rem, 3.2vw, 2.5rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
    margin-bottom: 2rem;
  }
`;

/* --- HOME PAGE COMPONENT --- */

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const heroImages = galleryData.slice(0, 4);

  return (
    <PageContainer>
      {/* 1. Hero */}
      <HeroSection>
        <HeroEyebrow>Studio fotografico a Sanremo, Liguria</HeroEyebrow>
        <HeroTitle>
          Fotografia di matrimonio autentica, <span>senza pose forzate</span>.
        </HeroTitle>
        <HeroSubtitle>
          Raccontiamo la vostra storia con discrezione, naturalezza e attenzione ai dettagli.
          Emozioni vere da rivivere per sempre.
        </HeroSubtitle>
        <HeroActions>
          <PrimaryCta href="/contatti/">Richiedi disponibilità data</PrimaryCta>
          <TextAction href="/gallery/">
            Guarda la selezione fotografica <FiArrowRight />
          </TextAction>
        </HeroActions>
      </HeroSection>

      {/* 2. Photo Grid */}
      <HeroGallery>
        {heroImages.map((img, index) => (
          <HeroPhoto key={img.id} onClick={() => setLightboxIndex(index)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="caption">
              <span>{img.categoryLabel}</span>
              <strong>{img.title}</strong>
            </div>
          </HeroPhoto>
        ))}
      </HeroGallery>

      {/* 3. Philosophy */}
      <PhilosophySection>
        <PhilosophyContent>
          <div className="section-label">Filosofia di scatto</div>
          <h2>Raccontare la vostra storia, con naturalezza</h2>
          <p>
            Ciò che amiamo di più è raccontare la giornata del matrimonio vivendo insieme ogni
            momento: lo sguardo commosso di un papà, la gioia spontanea della mamma, le risate a
            crepapelle con gli amici.
          </p>
          <p>
            Crediamo che siano queste le fotografie che, tra qualche decennio, vi faranno
            rivivere l’emozione autentica del vostro giorno.
          </p>
        </PhilosophyContent>
      </PhilosophySection>

      {/* 4. Services (Single grouped surface) */}
      <ServicesSection>
        <SectionHeader
          label="Servizi"
          title="Come lavoriamo"
          description="Un’offerta chiara e trasparente: reportage con due fotografi, montaggio video live durante il ricevimento e album artigianali italiani."
        />
        <ServicesListSurface>
          {servicesData.slice(0, 3).map((service) => (
            <ServiceRow key={service.id}>
              <div className="thumb">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="info">
                <span className="tag">{service.subtitle}</span>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
              </div>
              <div className="action">
                <TextAction href={`/servizi/#${service.id}`}>
                  Dettagli <FiArrowRight />
                </TextAction>
              </div>
            </ServiceRow>
          ))}
        </ServicesListSurface>
      </ServicesSection>

      {/* 5. About Preview */}
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
              Dal 2017 mi dedico al racconto documentario dei matrimoni in Liguria e in tutta Italia,
              con uno stile pulito, leggero e vicino alle persone.
            </p>
            <TextAction href="/chi-sono/">
              Leggi la mia storia <FiArrowRight />
            </TextAction>
          </AboutContent>
        </AboutGrid>
      </AboutSection>

      {/* 6. Awards (Flat rows) */}
      <AwardsSection>
        <SectionHeader
          label="Riconoscimenti"
          title="Premi e credenziali"
          description="Riconoscimenti nazionali ricevuti nei concorsi ANFM e premi Wedding Awards basati sulle recensioni verificate delle coppie."
        />
        <AwardsListSurface>
          {awardsData.slice(0, 5).map((award, i) => (
            <AwardRow key={i}>
              <div className="year">{award.year}</div>
              <div className="category">{award.category}</div>
              <div className="org">{award.organization}</div>
            </AwardRow>
          ))}
        </AwardsListSurface>
      </AwardsSection>

      {/* 7. Reviews (Single dark surface with hairline dividers) */}
      <ReviewsSection>
        <SectionHeader
          light
          label="Testimonianze"
          title="Cosa dicono gli sposi"
          description="Messaggi autentici lasciati dagli sposi che ci hanno affidato il loro giorno più importante."
        />
        <ReviewsSurface>
          {reviewsData.slice(0, 3).map((rev) => (
            <ReviewRow key={rev.id}>
              <div className="stars">{'★'.repeat(rev.stars)}</div>
              <h3>{rev.title}</h3>
              <p>&ldquo;{rev.text}&rdquo;</p>
              <div className="author-line">
                <strong>{rev.author}</strong> — {rev.source}
              </div>
            </ReviewRow>
          ))}
        </ReviewsSurface>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <TextAction href="/recensioni/" style={{ color: '#EFE9E1' }}>
            Leggi tutte le recensioni verificate <FiArrowRight />
          </TextAction>
        </div>
      </ReviewsSection>

      {/* 8. Final CTA */}
      <CtaSection>
        <h2>Lavoriamo insieme</h2>
        <p>
          Se vi riconoscete in questo approccio sincero e desiderate ricordi autentici senza stress,
          scriveteci la data e il luogo del matrimonio.
        </p>
        <PrimaryCta href="/contatti/">Richiedi disponibilità per la tua data</PrimaryCta>
      </CtaSection>

      {/* Lightbox */}
      <Lightbox
        images={heroImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() =>
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % heroImages.length : 0))
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + heroImages.length) % heroImages.length : 0,
          )
        }
      />
    </PageContainer>
  );
}
