'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { siteConfig } from '@/data/site';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 4.5rem 1.5rem 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.dividerDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 1.25rem 2rem;
  }
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterLogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  text-decoration: none;

  .footer-name {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.45rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  .footer-sub {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accentLight};
    margin-top: 0.25rem;
  }

  &:hover .footer-name {
    color: ${({ theme }) => theme.colors.accentLight};
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    color: ${({ theme }) => theme.colors.textLightSecondary};
    font-size: 0.9rem;
    line-height: 1.6;
    max-width: 320px;
  }
`;

const ColumnTitle = styled.h4`
  font-size: 0.9375rem; /* 15px */
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  li a {
    color: ${({ theme }) => theme.colors.textLightSecondary};
    font-size: 0.9rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.accentLight};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textLightSecondary};
  font-size: 0.9rem;

  a {
    color: ${({ theme }) => theme.colors.textLight};
    &:hover {
      color: ${({ theme }) => theme.colors.accentLight};
    }
  }
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.textLightSecondary};
    font-size: 1.25rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const BottomBar = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 3.5rem auto 0;
  padding-top: 1.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.dividerDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLightMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <BrandColumn>
          <FooterLogoLink href="/" aria-label="Simone Bonfiglio Fotografo Home">
            <span className="footer-name">Simone Bonfiglio</span>
            <span className="footer-sub">Fotografo • Sanremo</span>
          </FooterLogoLink>
          <p>
            Studio fotografico a Sanremo. Fotografia di matrimonio spontanea ed elegante in tutta la
            Liguria, Costa Azzurra e per matrimoni all’estero.
          </p>
          <SocialList>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Unique Photography"
            >
              <FaInstagram />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Unique Photography"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://maps.google.com/?q=Sanremo+Liguria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Sanremo"
            >
              <SiGooglemaps />
            </a>
          </SocialList>
        </BrandColumn>

        <div>
          <ColumnTitle>Navigazione</ColumnTitle>
          <FooterLinks>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/chi-sono/">Chi sono</Link>
            </li>
            <li>
              <Link href="/matrimoni/">Matrimoni</Link>
            </li>
            <li>
              <Link href="/servizi/">Tutti i servizi</Link>
            </li>
            <li>
              <Link href="/gallery/">Gallery fotografica</Link>
            </li>
            <li>
              <Link href="/recensioni/">Recensioni sposi</Link>
            </li>
          </FooterLinks>
        </div>

        <div>
          <ColumnTitle>Servizi</ColumnTitle>
          <FooterLinks>
            <li>
              <Link href="/matrimoni/">Reportage nozze</Link>
            </li>
            <li>
              <Link href="/servizi/#real-time-emotions">Real Time Emotions</Link>
            </li>
            <li>
              <Link href="/servizi/#coppie-engagement">Engagement e pre-wedding</Link>
            </li>
            <li>
              <Link href="/servizi/#album-fine-art">Album artigianali</Link>
            </li>
            <li>
              <Link href="/servizi/#ritratti-studio">Ritratti in studio</Link>
            </li>
            <li>
              <Link href="/servizi/#appartamenti-interior">Interior e real estate</Link>
            </li>
          </FooterLinks>
        </div>

        <div>
          <ColumnTitle>Contatti e studio</ColumnTitle>
          <ContactInfo>
            <p>
              {siteConfig.location.address}
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>P.IVA: {siteConfig.piva}</p>
            <p style={{ color: '#C4B5A5', fontSize: '0.8rem' }}>
              Membro ANFM e Wedding Awards
            </p>
          </ContactInfo>
        </div>
      </FooterContainer>

      <BottomBar>
        <span>
          © {new Date().getFullYear()} {siteConfig.name} - Tutti i diritti riservati.
        </span>
        <span>Fotografo matrimonio Sanremo, Liguria e Costa Azzurra</span>
      </BottomBar>
    </FooterWrapper>
  );
};
