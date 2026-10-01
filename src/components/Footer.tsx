'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { siteConfig } from '@/data/site';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 5rem 2rem 2.5rem;
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem 2rem;
  }
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .logo-white {
    width: 170px;
    height: auto;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  p {
    color: ${({ theme }) => theme.colors.textLightMuted};
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 320px;
  }
`;

const ColumnTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.15rem;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    margin-top: 0.5rem;
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  li a {
    color: ${({ theme }) => theme.colors.textLightMuted};
    font-size: 0.9rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.accentLight};
      padding-left: 4px;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  color: ${({ theme }) => theme.colors.textLightMuted};
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
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.bgDarkCard};
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    color: ${({ theme }) => theme.colors.textLight};
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-2px);
    }
  }
`;

const BottomBar = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 3.5rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.colors.textLightMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <BrandColumn>
          <Link href="/">
            <Image
              src="/logo_white.png"
              alt={siteConfig.name}
              width={170}
              height={46}
              className="logo-white"
            />
          </Link>
          <p>
            Studio fotografico d’autore a Sanremo. Fotografia di matrimonio spontanea ed emozionante
            in tutta la Liguria, Costa Azzurra e destination wedding.
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
              <Link href="/chi-sono/">Chi Sono</Link>
            </li>
            <li>
              <Link href="/matrimoni/">Matrimoni</Link>
            </li>
            <li>
              <Link href="/servizi/">Tutti i Servizi</Link>
            </li>
            <li>
              <Link href="/gallery/">Gallery Fotografica</Link>
            </li>
            <li>
              <Link href="/recensioni/">Recensioni Sposi</Link>
            </li>
          </FooterLinks>
        </div>

        <div>
          <ColumnTitle>Servizi</ColumnTitle>
          <FooterLinks>
            <li>
              <Link href="/matrimoni/">Reportage Nozze</Link>
            </li>
            <li>
              <Link href="/servizi/#real-time-emotions">Real Time Emotions</Link>
            </li>
            <li>
              <Link href="/servizi/#coppie-engagement">Engagement & Pre-wedding</Link>
            </li>
            <li>
              <Link href="/servizi/#album-fine-art">Album Artigianali</Link>
            </li>
            <li>
              <Link href="/servizi/#ritratti-studio">Ritratti in Studio</Link>
            </li>
            <li>
              <Link href="/servizi/#appartamenti-interior">Interior & Real Estate</Link>
            </li>
          </FooterLinks>
        </div>

        <div>
          <ColumnTitle>Contatti & Studio</ColumnTitle>
          <ContactInfo>
            <p>
              <strong>Studio Unique Photography</strong>
              <br />
              {siteConfig.location.address}
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>P.IVA: {siteConfig.piva}</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#B6A695' }}>
              Membro ANFM & Wedding Awards Winner
            </p>
          </ContactInfo>
        </div>
      </FooterContainer>

      <BottomBar>
        <span>
          © {new Date().getFullYear()} {siteConfig.name} - Tutti i diritti riservati.
        </span>
        <span>Fotografo Matrimonio Sanremo • Liguria • Costa Azzurra</span>
      </BottomBar>
    </FooterWrapper>
  );
};
