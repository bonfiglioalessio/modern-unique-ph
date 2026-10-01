'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 4.5rem 1.5rem 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.dividerDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 1.25rem 2rem;
  }
`;

export const FooterContainer = styled.div`
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

export const FooterLogoLink = styled(Link)`
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

export const BrandColumn = styled.div`
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

export const ColumnTitle = styled.h4`
  font-size: 0.9375rem; /* 15px */
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

export const FooterLinks = styled.ul`
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

export const ContactInfo = styled.div`
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

export const SocialList = styled.div`
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

export const BottomBar = styled.div`
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
