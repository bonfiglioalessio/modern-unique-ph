'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { reviewsData } from '@/data/reviews';
import { siteConfig } from '@/data/site';
import { FiArrowRight } from 'react-icons/fi';
import * as S from './RecensioniClient.styles';

export const RecensioniClient: React.FC = () => {
  return (
    <S.PageWrapper>
      <SectionHeader
        label="Recensioni"
        title="Parole vere di chi ci ha scelto"
        description="Le storie e i ricordi delle coppie che abbiamo accompagnato. Oltre quaranta recensioni a 5 stelle verificate su Matrimonio.com."
      />

      <S.RatingSummary>
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
      </S.RatingSummary>

      <S.ReviewsSurface>
        {reviewsData.map((review) => (
          <S.ReviewRow key={review.id}>
            <div className="stars">{'★'.repeat(review.stars)}</div>
            <h3>{review.title}</h3>
            {review.highlight && <div className="highlight">&ldquo;{review.highlight}&rdquo;</div>}
            <p>&ldquo;{review.text}&rdquo;</p>
            <div className="author-line">
              <strong>{review.author}</strong> {review.date && `• ${review.date}`} — {review.source}
            </div>
          </S.ReviewRow>
        ))}
      </S.ReviewsSurface>
    </S.PageWrapper>
  );
};
