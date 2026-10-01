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

export const ServiziClient: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        label="Servizi"
        title="Fotografia per ogni capitolo importante"
        description="Dalle nozze più emozionanti ai ritratti d'autore in studio a Sanremo: scopri tutti i servizi fotografici realizzati da Unique Photography."
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
