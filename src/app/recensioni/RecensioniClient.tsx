'use client';

import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { reviewsData } from '@/data/reviews';
import { siteConfig } from '@/data/site';
import { FiArrowRight } from 'react-icons/fi';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

const RatingSummary = styled.div`
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

const ReviewsSurface = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

const ReviewRow = styled.article`
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

export const RecensioniClient: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        label="Recensioni"
        title="Parole vere di chi ci ha scelto"
        description="Le storie e i ricordi delle coppie che abbiamo accompagnato. Oltre quaranta recensioni a 5 stelle verificate su Matrimonio.com."
      />

      <RatingSummary>
        <div className="rating-score">
          <div className="num">5.0</div>
          <div className="stars-block">
            <div className="stars">★★★★★</div>
            <p>Valutazione eccellente basata su recensioni verificate</p>
          </div>
        </div>
        <a
          href={siteConfig.socials.matrimonioCom}
          target="_blank"
          rel="noopener noreferrer"
          className="external-btn"
        >
          Visualizza su Matrimonio.com <FiArrowRight />
        </a>
      </RatingSummary>

      <ReviewsSurface>
        {reviewsData.map((review) => (
          <ReviewRow key={review.id}>
            <div className="stars">{'★'.repeat(review.stars)}</div>
            <h3>{review.title}</h3>
            {review.highlight && <div className="highlight">&ldquo;{review.highlight}&rdquo;</div>}
            <p>&ldquo;{review.text}&rdquo;</p>
            <div className="author-line">
              <strong>{review.author}</strong> {review.date && `• ${review.date}`} — {review.source}
            </div>
          </ReviewRow>
        ))}
      </ReviewsSurface>
    </PageWrapper>
  );
};
