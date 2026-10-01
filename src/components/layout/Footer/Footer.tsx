'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import * as S from './Footer.styles';

export const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.BrandColumn>
          <S.FooterLogoLink href="/" aria-label="Simone Bonfiglio Fotografo Home">
            <span className="footer-name">Simone Bonfiglio</span>
            <span className="footer-sub">Fotografo • Sanremo</span>
          </S.FooterLogoLink>
          <p>
            Studio fotografico a Sanremo. Fotografia di matrimonio spontanea ed elegante in tutta la
            Liguria, Costa Azzurra e per matrimoni all’estero.
          </p>
          <S.SocialList>
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
          </S.SocialList>
        </S.BrandColumn>

        <div>
          <S.ColumnTitle>Navigazione</S.ColumnTitle>
          <S.FooterLinks>
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
          </S.FooterLinks>
        </div>

        <div>
          <S.ColumnTitle>Servizi</S.ColumnTitle>
          <S.FooterLinks>
            <li>
              <Link href="/matrimoni/">Reportage nozze</Link>
            </li>
            <li>
              <Link href="/servizi/#coppie">Foto di coppia al tramonto</Link>
            </li>
            <li>
              <Link href="/servizi/#appartamenti">Appartamenti & case vacanza</Link>
            </li>
            <li>
              <Link href="/servizi/#famiglia-maternita">Famiglia e maternità</Link>
            </li>
            <li>
              <Link href="/servizi/#ritratti-studio">Ritratti in studio a Sanremo</Link>
            </li>
            <li>
              <Link href="/servizi/#album-fine-art">Album artigianali & stampe</Link>
            </li>
          </S.FooterLinks>
        </div>

        <div>
          <S.ColumnTitle>Contatti e studio</S.ColumnTitle>
          <S.ContactInfo>
            <p>{siteConfig.location.address}</p>
            <p>
              Email:{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>P.IVA: {siteConfig.piva}</p>
            <p style={{ color: '#C4B5A5', fontSize: '0.8rem' }}>
              Membro ANFM e Wedding Awards
            </p>
          </S.ContactInfo>
        </div>
      </S.FooterContainer>

      <S.BottomBar>
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} {siteConfig.name} - Tutti i diritti riservati.
        </span>
        <span>Fotografo matrimonio Sanremo, Liguria e Costa Azzurra</span>
      </S.BottomBar>
    </S.FooterWrapper>
  );
};
