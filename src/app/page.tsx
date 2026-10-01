'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { Lightbox } from '@/components/Lightbox';
import { galleryData, GalleryImage } from '@/data/gallery';
import { servicesData } from '@/data/services';
import { reviewsData } from '@/data/reviews';
import { awardsData } from '@/data/awards';
import { aboutData } from '@/data/about';
import { FiArrowRight, FiCheck, FiAward, FiStar, FiCamera } from 'react-icons/fi';

/* --- STYLED COMPONENTS --- */

const PageContainer = styled.div`
  width: 100%;
`;

// Hero Section
const HeroSection = styled.section`
  padding: 5rem 2rem 4rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 1.25rem 2.5rem;
    text-align: left;
  }
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: ${({ theme }) => theme.colors.bgCardAlt};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(2.5rem, 5.5vw, 4.5rem);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textDark};
  max-width: 960px;
  margin: 0 auto 1.5rem;

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 720px;
  margin: 0 auto 2.5rem;
  line-height: 1.65;
`;

const HeroButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  background-color: ${({ theme }) => theme.colors.textDark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textDark};
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgCardAlt};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

// Editorial Hero Gallery Strip
const HeroGallery = styled.div`
  max-width: 1400px;
  margin: 2rem auto 5rem;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }
`;

const HeroGalleryCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 50%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.white};

    h4 {
      font-size: 1.1rem;
      font-family: ${({ theme }) => theme.fonts.serif};
    }
    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.accentLight};
    }
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
    .overlay {
      opacity: 1;
    }
  }
`;

// Philosophy Section
const PhilosophySection = styled.section`
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 6.5rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 1.25rem;
  }
`;

const PhilosophyContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  .quote-symbol {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 4rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(2rem, 3.5vw, 2.75rem);
    font-weight: 300;
    line-height: 1.35;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textLightMuted};
    margin-bottom: 1.5rem;
  }
`;

// Services Grid
const ServicesSection = styled.section`
  padding: 6.5rem 2rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 1.25rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all ${({ theme }) => theme.transitions.default};

  .img-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${({ theme }) => theme.transitions.slow};
    }

    .badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 0.3rem 0.75rem;
      border-radius: 2px;
    }
  }

  .content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    h3 {
      font-size: 1.45rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.accent};
      margin-bottom: 1rem;
      font-weight: 500;
    }

    p {
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colors.textMuted};
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .learn-more {
      margin-top: auto;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.textDark};
      transition: color ${({ theme }) => theme.transitions.default};

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);

    .img-wrapper img {
      transform: scale(1.05);
    }
  }
`;

// About Section Preview
const AboutPreview = styled.section`
  background: ${({ theme }) => theme.colors.bgCardAlt};
  padding: 6.5rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 1.25rem;
  }
`;

const AboutGrid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AboutImageWrap = styled.div`
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
    z-index: -1;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    margin-bottom: 1.25rem;
  }

  .tag {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.75rem;
    display: block;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 1.5rem;
  }
`;

// Awards Section
const AwardsSection = styled.section`
  padding: 6.5rem 2rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 1.25rem;
  }
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AwardCard = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 2px;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;

  .icon {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }

  .year {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h4 {
    font-size: 1.15rem;
    margin: 0.25rem 0 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.5;
    margin: 0;
  }
`;

// Reviews Carousel / Grid
const ReviewsSection = styled.section`
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 6.5rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 1.25rem;
  }
`;

const ReviewsGrid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: ${({ theme }) => theme.colors.bgDarkCard};
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
  border-radius: 2px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .stars {
    color: #f1c40f;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.35rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textLightMuted};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .author-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
    padding-top: 1rem;
    font-size: 0.85rem;

    .author {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.accentLight};
    }
    .source {
      color: ${({ theme }) => theme.colors.textLightMuted};
      font-style: italic;
    }
  }
`;

// Final CTA Banner
const CtaBanner = styled.section`
  padding: 6.5rem 2rem;
  background: ${({ theme }) => theme.colors.bgLight};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 1.25rem;
  }

  .content {
    max-width: 780px;
    margin: 0 auto;

    h2 {
      font-size: clamp(2.2rem, 4vw, 3.2rem);
      margin-bottom: 1.25rem;
    }

    p {
      font-size: 1.15rem;
      color: ${({ theme }) => theme.colors.textMuted};
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }
  }
`;

/* --- COMPONENT --- */

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Take first 4 gallery highlights
  const heroImages = galleryData.slice(0, 4);

  return (
    <PageContainer>
      {/* 1. Hero */}
      <HeroSection>
        <HeroBadge>
          <FiCamera /> Studio Fotografico Sanremo • Liguria
        </HeroBadge>
        <HeroTitle>
          Fotografo di Matrimonio a Sanremo, <span>in Liguria</span>.
        </HeroTitle>
        <HeroSubtitle>
          Raccontiamo la vostra storia con naturalezza, discrezione e senza pose forzate. Emozioni
          spontanee e scatti eleganti per lasciarvi ricordi veri da rivivere per sempre.
        </HeroSubtitle>
        <HeroButtonGroup>
          <PrimaryButton href="/matrimoni/">
            Scopri i Servizi <FiArrowRight />
          </PrimaryButton>
          <SecondaryButton href="/gallery/">Guarda la Gallery</SecondaryButton>
        </HeroButtonGroup>
      </HeroSection>

      {/* 2. Hero Gallery Strip */}
      <HeroGallery>
        {heroImages.map((img, index) => (
          <HeroGalleryCard key={img.id} onClick={() => setLightboxIndex(index)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="overlay">
              <span>{img.categoryLabel}</span>
              <h4>{img.title}</h4>
            </div>
          </HeroGalleryCard>
        ))}
      </HeroGallery>

      {/* 3. Filosofia */}
      <PhilosophySection>
        <PhilosophyContent>
          <div className="quote-symbol">“</div>
          <h2>Raccontare la vostra storia, con naturalezza</h2>
          <p>
            Ciò che amiamo di più è andare a raccontare la giornata del vostro matrimonio vivendo
            insieme ogni momento: lo sguardo commosso del papà della sposa, la mamma con gli occhi
            lucidi, le risate a crepapelle con gli amici.
          </p>
          <p>
            Crediamo profondamente che siano queste le fotografie che, tra dieci o trent’anni, vi
            faranno battere di nuovo il cuore come il primo giorno.
          </p>
        </PhilosophyContent>
      </PhilosophySection>

      {/* 4. Servizi / Come Lavoriamo */}
      <ServicesSection>
        <SectionHeader
          subtitle="I Nostri Pacchetti"
          title="Come Lavoriamo & Cosa Offriamo"
          description="Dalla copertura completa del matrimonio con due fotografi alle proiezioni in sala e agli album artigianali rilegati a mano."
        />
        <ServicesGrid>
          {servicesData.slice(0, 3).map((service) => (
            <ServiceCard key={service.id}>
              <div className="img-wrapper">
                <img src={service.image} alt={service.title} loading="lazy" />
                {service.badge && <span className="badge">{service.badge}</span>}
              </div>
              <div className="content">
                <h3>{service.title}</h3>
                <span className="subtitle">{service.subtitle}</span>
                <p>{service.shortDesc}</p>
                <Link href={`/servizi/#${service.id}`} className="learn-more">
                  Dettagli Servizio <FiArrowRight />
                </Link>
              </div>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      {/* 5. Chi Sono Preview */}
      <AboutPreview>
        <AboutGrid>
          <AboutImageWrap>
            <img
              src="https://images.ctfassets.net/1qgv2qxuxgqc/7JGWEETzlsP4dmO5ZNjaPQ/28b1c47aad082a2347a3492a8269a645/unique-0001-2.jpg"
              alt="Simone Bonfiglio fotografo matrimonio Sanremo"
              loading="lazy"
            />
          </AboutImageWrap>
          <AboutText>
            <span className="tag">La persona dietro l’obiettivo</span>
            <h2>Ciao, Sono Simone Bonfiglio</h2>
            <p>{aboutData.bioIntro}</p>
            <p>
              Dal 2017 mi dedico anima e corpo alla fotografia di matrimonio con Unique Photography,
              portando uno sguardo cinematografico, leggero e intimo sul territorio ligure e nei più
              bei matrimoni in Italia.
            </p>
            <PrimaryButton href="/chi-sono/">
              Leggi la mia storia <FiArrowRight />
            </PrimaryButton>
          </AboutText>
        </AboutGrid>
      </AboutPreview>

      {/* 6. Premi & Riconoscimenti */}
      <AwardsSection>
        <SectionHeader
          subtitle="Riconoscimenti Nazionali"
          title="Sai che abbiamo vinto dei premi? 🏆"
          description="In questi anni abbiamo avuto il piacere di ricevere premi autorevoli nel settore wedding, tra cui i Wedding Awards di Matrimonio.com e i contest ANFM."
        />
        <AwardsGrid>
          {awardsData.slice(0, 6).map((award, i) => (
            <AwardCard key={i}>
              <div className="icon">
                <FiAward />
              </div>
              <div>
                <span className="year">{award.year}</span>
                <h4>{award.category}</h4>
                <p>{award.organization}</p>
              </div>
            </AwardCard>
          ))}
        </AwardsGrid>
      </AwardsSection>

      {/* 7. Recensioni Sposi */}
      <ReviewsSection>
        <SectionHeader
          light
          subtitle="Testimonianze Autentiche"
          title="Cosa dicono i nostri sposi 🥰"
          description="La cosa più gratificante del nostro lavoro è ricevere messaggi di sincero affetto dalle coppie che ci hanno affidato il loro giorno più prezioso."
        />
        <ReviewsGrid>
          {reviewsData.slice(0, 3).map((rev) => (
            <ReviewCard key={rev.id}>
              <div>
                <div className="stars">{'★'.repeat(rev.stars)}</div>
                <h3>{rev.title}</h3>
                <p>&ldquo;{rev.text.length > 220 ? `${rev.text.substring(0, 220)}...` : rev.text}&rdquo;</p>
              </div>
              <div className="author-row">
                <span className="author">{rev.author}</span>
                <span className="source">{rev.source}</span>
              </div>
            </ReviewCard>
          ))}
        </ReviewsGrid>
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <SecondaryButton
            href="/recensioni/"
            style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            Leggi tutte le 40+ recensioni verificate
          </SecondaryButton>
        </div>
      </ReviewsSection>

      {/* 8. Final CTA Banner */}
      <CtaBanner>
        <div className="content">
          <h2>Riuscite a immaginarvi nelle nostre foto?</h2>
          <p>
            Se vi piace il nostro approccio spontaneo e desiderate ricordi autentici senza stress,
            scriveteci la data e la location delle vostre nozze: saremo felici di conoscervi e
            inviarvi la disponibilità e i dettagli dei pacchetti.
          </p>
          <PrimaryButton href="/contatti/" style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem' }}>
            Richiedi la disponibilità per la tua data <FiArrowRight />
          </PrimaryButton>
        </div>
      </CtaBanner>

      {/* Lightbox for Hero Gallery */}
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
