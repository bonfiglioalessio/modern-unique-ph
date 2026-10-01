'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

const BarWrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background: rgba(250, 248, 245, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 0.65rem 1rem calc(0.65rem + env(safe-area-inset-bottom, 0px));
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.04);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: 0.75rem;
  }
`;

const WhatsAppBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  height: 44px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transitions.default};

  svg {
    color: #25d366;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.cardSecondary};
    transform: scale(0.98);
  }
`;

const ContactBtn = styled(Link)`
  flex: 1.25;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  height: 44px;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transitions.default};

  &:active {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(0.98);
  }
`;

export const MobileQuickBar: React.FC = () => {
  return (
    <BarWrapper aria-label="Contatti veloci mobile">
      <WhatsAppBtn
        href="https://wa.me/393400000000?text=Ciao%20Simone%2C%20vorrei%20informazioni%20sulla%20disponibilit%C3%A0%20per%20un%20servizio%20fotografico"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contatta su WhatsApp"
      >
        <FaWhatsapp size={17} /> WhatsApp
      </WhatsAppBtn>
      <ContactBtn href="/contatti/" aria-label="Richiedi disponibilità data">
        <FiCalendar size={15} /> Richiedi data
      </ContactBtn>
    </BarWrapper>
  );
};
