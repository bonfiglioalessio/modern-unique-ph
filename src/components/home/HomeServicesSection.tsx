'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { servicesData } from '@/data/services';
import { FiArrowRight } from 'react-icons/fi';

const SectionWrapper = styled.section`
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

import { ScrollReveal } from '@/components/ui';

export const HomeServicesSection: React.FC = () => {
  return (
    <SectionWrapper>
      <ScrollReveal effect="fade-up">
        <SectionHeader
          label="Servizi"
          title="Come lavoriamo insieme"
          description="Trasparenza totale: presenza per l’intera giornata con due fotografi, montaggio video live durante il ricevimento e album artigianali d’autore."
        />
      </ScrollReveal>
      <ServicesGrid>
        {servicesData.slice(0, 3).map((service, index) => (
          <ScrollReveal key={service.id} effect="fade-up" delay={index * 120} duration={800}>
            <ServiceCard>
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
          </ScrollReveal>
        ))}
      </ServicesGrid>
    </SectionWrapper>
  );
};
