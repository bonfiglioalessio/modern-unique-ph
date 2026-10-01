'use client';

import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

export const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 3.5rem;
  }
`;

export const ServiceRow = styled.div<{ $reverse: boolean }>`
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

export const ServiceImageWrapper = styled.div`
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

export const ServiceContent = styled.div`
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

export const FaqSection = styled.section`
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FaqCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.75rem 1.5rem;

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.15rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.65rem;
    line-height: 1.35;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;
