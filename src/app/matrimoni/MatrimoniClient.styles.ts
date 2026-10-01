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

export const HeroBanner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  margin-bottom: 4.5rem;
  background: ${({ theme }) => theme.colors.cardSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 16 / 9;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1) 100%);
    display: flex;
    align-items: flex-end;
    padding: 2.5rem;
    color: #ffffff;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 1.25rem;
    }

    h2 {
      font-size: clamp(1.6rem, 3vw, 2.5rem);
      max-width: 650px;
    }
  }
`;

export const FlowSection = styled.div`
  margin-bottom: 5rem;
`;

export const FlowSurface = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 0 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

export const FlowRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1.2fr 2fr;
  padding: 1.75rem 0;
  gap: 1.5rem;
  align-items: baseline;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  .step-num {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    font-variant-numeric: tabular-nums;
  }

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
`;

export const HighlightsSection = styled.div`
  margin-bottom: 5rem;
`;

export const HighlightsSurface = styled.div`
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 2.5rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 1.75rem 1.25rem;
  }
`;

export const HighlightCol = styled.div`
  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

export const FaqSection = styled.div`
  max-width: 820px;
  margin: 0 auto 5rem;
`;

export const FaqItem = styled.div<{ $open: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 1.25rem 0;

  .question-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 1rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      transition: color ${({ theme }) => theme.transitions.default};
    }

    .icon {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.textMuted};
      transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
      transition: transform ${({ theme }) => theme.transitions.default};
      flex-shrink: 0;
    }
  }

  .answer {
    padding-top: 0.75rem;
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    display: ${({ $open }) => ($open ? 'block' : 'none')};
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
