'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { servicesData } from '@/data/services';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 4rem;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4rem;
  }
`;

const ServiceRow = styled.div<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.5rem;
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
    gap: 2.5rem;
    direction: ltr;
  }
`;

const ServiceImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  .badge {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.35rem 0.85rem;
    border-radius: 2px;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;

  .subtitle {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: clamp(1.8rem, 2.8vw, 2.4rem);
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.025rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colors.textDark};

      .check-icon {
        color: ${({ theme }) => theme.colors.accent};
        font-size: 1.1rem;
        margin-top: 0.2rem;
        flex-shrink: 0;
      }
    }
  }

  .cta-link {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.75rem;
    background: ${({ theme }) => theme.colors.textDark};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }
  }
`;

export const ServiziClient: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        subtitle="I Nostri Servizi"
        title="Fotografia per ogni capitolo importante"
        description="Dalle nozze più emozionanti ai ritratti d'autore in studio a Sanremo: scopri tutti i servizi fotografici realizzati da Unique Photography."
      />

      <ServicesList>
        {servicesData.map((service, index) => {
          const isReverse = index % 2 === 1;
          return (
            <ServiceRow key={service.id} id={service.id} $reverse={isReverse}>
              <ServiceImageWrapper>
                <img src={service.image} alt={service.title} />
                {service.badge && <span className="badge">{service.badge}</span>}
              </ServiceImageWrapper>

              <ServiceContent>
                <span className="subtitle">{service.subtitle}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FiCheck className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contatti/" className="cta-link">
                  Richiedi informazioni <FiArrowRight />
                </Link>
              </ServiceContent>
            </ServiceRow>
          );
        })}
      </ServicesList>
    </PageWrapper>
  );
};
