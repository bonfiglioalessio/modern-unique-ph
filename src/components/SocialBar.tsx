'use client';

import React from 'react';
import styled from 'styled-components';
import { siteConfig } from '@/data/site';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const FloatBar = styled.aside`
  position: fixed;
  right: 1.5rem;
  bottom: 2rem;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 48px;
    background: ${({ theme }) => theme.colors.borderLight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme }) => theme.colors.textDark};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(140, 115, 85, 0.3);
  }
`;

export const SocialBar: React.FC = () => {
  return (
    <FloatBar aria-label="Profili Social Studio">
      <SocialIconLink
        href={siteConfig.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={17} />
      </SocialIconLink>
      <SocialIconLink
        href={siteConfig.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF size={15} />
      </SocialIconLink>
      <SocialIconLink
        href="https://wa.me/393400000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={17} />
      </SocialIconLink>
    </FloatBar>
  );
};
