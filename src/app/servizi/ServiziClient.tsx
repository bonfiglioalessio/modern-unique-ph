'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { servicesData } from '@/data/services';
import { FiArrowRight } from 'react-icons/fi';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 3.5rem;
  }
`;

const ServiceRow = styled.div<{ $reverse: boolean }>`
  scroll-margin-top: 105px;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 4rem;
  align-items: center;

  ${({ $reverse }) =>
    $reverse &&
    `
    direction: rtl;
    > * {
      direction: ltr;
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    direction: ltr;
  }
`;

const ServiceImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.cardSecondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;

  .subtitle {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.35rem;
  }

  h2 {
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.75rem;

    li {
      font-size: 0.925rem;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      align-items: baseline;
      gap: 0.5rem;

      &::before {
        content: '—';
        color: ${({ theme }) => theme.colors.accent};
        font-weight: 600;
      }
    }
  }

  .cta-link {
    align-self: flex-start;
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
  }
`;

const FaqSection = styled.section`
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FaqCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.75rem 1.5rem;

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.15rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.65rem;
    line-height: 1.35;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

export const ServiziClient: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        label="Servizi Fotografici"
        title="Fotografia per ogni capitolo importante"
        description="Dai matrimoni in Liguria alle sessioni di coppia, famiglia, interni e ritratti in studio a Sanremo: immagini autentiche e senza forzature."
      />

      <ServicesList>
        {servicesData.map((service, index) => {
          const isReverse = index % 2 === 1;
          return (
            <ServiceRow key={service.id} id={service.id} $reverse={isReverse}>
              <ServiceImageWrapper>
                <img src={service.image} alt={service.title} loading="lazy" />
              </ServiceImageWrapper>

              <ServiceContent>
                <span className="subtitle">{service.subtitle}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contatti/" className="cta-link">
                  Richiedi informazioni e disponibilità <FiArrowRight />
                </Link>
              </ServiceContent>
            </ServiceRow>
          );
        })}
      </ServicesList>

      {/* FAQ & Trasparenza */}
      <FaqSection>
        <SectionHeader
          label="FAQ & Trasparenza"
          title="Domande frequenti e dettagli utili"
          description="Tutto ciò che c’è da sapere su tempi di consegna, prenotazione della data, videografi e album."
        />

        <FaqGrid>
          <FaqCard>
            <h3>Dopo quanto tempo le foto ci saranno consegnate?</h3>
            <p>
              Tutte le fotografie in alta risoluzione saranno consegnate entro circa 2 mesi tramite
              galleria privata online protetta da password, pronte per essere scaricate, condivise e stampate.
            </p>
          </FaqCard>

          <FaqCard>
            <h3>Fai anche video? Mi consigli un videografo?</h3>
            <p>
              No, non realizzo video perché scelgo di dedicarmi al 100% alla fotografia. Collaboro però
              regolarmente con videografi professionisti di fiducia e ve ne consiglierò volentieri dopo la prenotazione del servizio.
            </p>
          </FaqCard>

          <FaqCard>
            <h3>Cosa dobbiamo fare per prenotare la data?</h3>
            <p>
              Scrivetemi tramite la pagina contatti indicando data e location. Vi invierò il PDF informativo con i prezzi proposti.
              Per bloccare ufficialmente la data, firmiamo insieme un contratto di tutela e viene versato un acconto.
            </p>
          </FaqCard>

          <FaqCard>
            <h3>Siamo obbligati ad acquistare l’album subito?</h3>
            <p>
              Assolutamente no. Sarete sempre liberi di stampare i file dove preferite. Se desiderate un album artigianale italiano
              curato nei dettagli, potrete ordinarlo e personalizzarlo anche dopo il matrimonio senza alcun vincolo iniziale.
            </p>
          </FaqCard>
        </FaqGrid>
      </FaqSection>
    </PageWrapper>
  );
};
