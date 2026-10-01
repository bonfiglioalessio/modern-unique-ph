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

export const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 4rem;
  align-items: flex-start;
  margin-bottom: 4.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const BioImageColumn = styled.div`
  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.lg};
  }

  .caption {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 0.75rem;
    text-align: center;
  }
`;

export const BioTextColumn = styled.div`
  .intro {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.35rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`;

export const StatsSurface = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: 5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.25rem;
    padding: 2rem 1.25rem;
    margin-bottom: 3.5rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .val {
      font-size: clamp(2.1rem, 7vw, 2.75rem);
      font-weight: 700;
      color: ${({ theme }) => theme.colors.accent};
      line-height: 1.1;
      margin-bottom: 0.35rem;
      font-variant-numeric: tabular-nums;
    }
    .lbl {
      font-size: 0.8125rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textSecondary};
      max-width: 140px;
      line-height: 1.35;
    }
  }
`;

export const PrinciplesSection = styled.div`
  margin-bottom: 5rem;
`;

export const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PrincipleCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2rem 2rem 2.25rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
  }

  .number {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.75rem;
    display: inline-block;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.35rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 0.65rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem 1.75rem;
  }
`;

export const CtaSection = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto;

  h2 {
    font-size: clamp(1.85rem, 3vw, 2.3rem);
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
    margin-bottom: 1.75rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    padding: 0.85rem 1.75rem;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: ${({ theme }) => theme.radius.md};
    transition: background-color ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
    }
  }
`;
