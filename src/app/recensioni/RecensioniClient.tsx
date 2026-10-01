'use client';

import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { reviewsData } from '@/data/reviews';
import { siteConfig } from '@/data/site';
import { FiStar, FiExternalLink, FiHeart } from 'react-icons/fi';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 4rem;
  }
`;

const RatingSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors.bgCardAlt};
  border-radius: 2px;
  margin-bottom: 4.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
  }

  .rating-score {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      gap: 0.5rem;
    }

    .num {
      font-family: ${({ theme }) => theme.fonts.serif};
      font-size: 3.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.accent};
      line-height: 1;
    }

    .stars-block {
      .stars {
        color: #f1c40f;
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
      }
      p {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.textMuted};
        margin: 0;
      }
    }
  }

  .external-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.75rem;
    background: ${({ theme }) => theme.colors.textDark};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ReviewCard = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 2px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);

  .stars {
    color: #f1c40f;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.textDark};
  }

  .highlight {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1rem;
    font-style: italic;
  }

  p {
    font-size: 0.975rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 2rem;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
    padding-top: 1.25rem;

    .author-info {
      .name {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.textDark};
        font-size: 1rem;
      }
      .date {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.textMuted};
      }
    }

    .verified {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
  }
`;

export const RecensioniClient: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        subtitle="Recensioni dei Nostri Clienti"
        title="Parole vere di chi ci ha scelto"
        description="Le storie, i brividi e i ricordi delle coppie che abbiamo accompagnato. Oltre quaranta recensioni a 5 stelle verificate su Matrimonio.com."
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
          Visualizza su Matrimonio.com <FiExternalLink />
        </a>
      </RatingSummary>

      <ReviewsGrid>
        {reviewsData.map((review) => (
          <ReviewCard key={review.id}>
            <div>
              <div className="stars">{'★'.repeat(review.stars)}</div>
              <h3>{review.title}</h3>
              {review.highlight && <div className="highlight">&quot;{review.highlight}&quot;</div>}
              <p>&quot;{review.text}&quot;</p>
            </div>

            <div className="card-footer">
              <div className="author-info">
                <div className="name">{review.author}</div>
                {review.date && <div className="date">{review.date}</div>}
              </div>
              <div className="verified">
                <FiHeart /> Verificata
              </div>
            </div>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </PageWrapper>
  );
};
