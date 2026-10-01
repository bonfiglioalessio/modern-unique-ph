'use client';

import React from 'react';
import styled from 'styled-components';
import { siteConfig } from '@/data/site';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const FloatBar = styled.aside`
  position: fixed;
  right: 1.75rem;
  bottom: 2.5rem;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 40px;
    background: ${({ theme }) => theme.colors.divider};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NakedIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.15rem;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SocialBar: React.FC = () => {
  return (
    <FloatBar aria-label="Profili social">
      <NakedIconLink
        href={siteConfig.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </NakedIconLink>
      <NakedIconLink
        href={siteConfig.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </NakedIconLink>
      <NakedIconLink
        href="https://wa.me/393400000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </NakedIconLink>
    </FloatBar>
  );
};
