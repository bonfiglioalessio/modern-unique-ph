'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Lightbox } from '@/components/Lightbox';
import { galleryCategories, galleryData } from '@/data/gallery';
import { ScrollReveal } from '@/components/ui';
import * as S from './GalleryClient.styles';

export const GalleryClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  return (
    <S.PageWrapper>
      <ScrollReveal effect="fade-up">
        <SectionHeader
          label="Gallery"
          title="La nostra selezione fotografica"
          description="Una raccolta dei nostri scatti preferiti: la preparazione, il sì, le risate, i balli e la magia della Riviera Ligure."
        />
      </ScrollReveal>

      {/* Flat Segmented Filter */}
      <ScrollReveal effect="fade-in" delay={100} duration={600}>
        <S.FilterContainer>
          <S.FilterSegmented>
            {galleryCategories.map((cat) => (
              <S.SegmentButton
                key={cat.id}
                $active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </S.SegmentButton>
            ))}
          </S.FilterSegmented>
        </S.FilterContainer>
      </ScrollReveal>

      {/* Grid */}
      <S.GalleryGrid>
        {filteredImages.map((img, index) => (
          <ScrollReveal
            key={img.id}
            effect="scale-settle"
            delay={Math.min((index % 6) * 80, 400)}
            duration={700}
          >
            <S.GalleryCard onClick={() => setLightboxIndex(index)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="caption">
                <span>{img.categoryLabel}</span>
                <h3>{img.title}</h3>
              </div>
            </S.GalleryCard>
          </ScrollReveal>
        ))}
      </S.GalleryGrid>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % filteredImages.length : 0,
          )
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0,
          )
        }
      />
    </S.PageWrapper>
  );
};
