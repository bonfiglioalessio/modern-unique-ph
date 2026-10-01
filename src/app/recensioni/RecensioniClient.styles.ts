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

export const RatingSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1.25rem;
    padding: 1.5rem 1.25rem;
  }

  .rating-score {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      gap: 0.25rem;
    }

    .num {
      font-size: 2.75rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.accent};
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }

    .stars-block {
      .stars {
        color: #f59e0b;
        font-size: 1.1rem;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.textSecondary};
        margin: 0;
      }
    }
  }

  .external-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.accentDark};
    }
  }
`;

export const ReviewsSurface = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

export const ReviewRow = styled.article`
  padding: 2.25rem 0;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  .stars {
    color: #f59e0b;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  .highlight {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.75rem;
    font-style: italic;
  }

  p {
    font-size: 0.975rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }

  .author-line {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};

    strong {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
