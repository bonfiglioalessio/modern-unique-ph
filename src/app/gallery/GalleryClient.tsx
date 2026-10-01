'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { Lightbox } from '@/components/Lightbox';
import { galleryCategories, galleryData, GalleryImage } from '@/data/gallery';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 4rem;
  }
`;

const FilterNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.6rem 1.4rem;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 50px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.textDark : theme.colors.bgCard};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.textDark)};
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.textDark : theme.colors.borderLight)};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.bgCardAlt};
    border-color: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.accent};
    color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.accent)};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.bgCardAlt};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 60%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.white};

    .category-badge {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: ${({ theme }) => theme.colors.accentLight};
      margin-bottom: 0.35rem;
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
    }

    .location {
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.textLightMuted};
    }
  }

  &:hover {
    img {
      transform: scale(1.06);
    }
    .overlay {
      opacity: 1;
    }
  }
`;

export const GalleryClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  return (
    <PageWrapper>
      <SectionHeader
        subtitle="Portfolio & Gallery"
        title="La Nostra Selezione Fotografica"
        description="Una raccolta dei nostri scatti preferiti: la preparazione, il sì, le risate, i balli e la magia della Riviera Ligure."
      />

      {/* Categories Filter */}
      <FilterNav>
        {galleryCategories.map((cat) => (
          <FilterButton
            key={cat.id}
            $active={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </FilterButton>
        ))}
      </FilterNav>

      {/* Grid */}
      <GalleryGrid>
        {filteredImages.map((img, index) => (
          <GalleryCard key={img.id} onClick={() => setLightboxIndex(index)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="overlay">
              <span className="category-badge">{img.categoryLabel}</span>
              <h3>{img.title}</h3>
              {img.location && <span className="location">{img.location}</span>}
            </div>
          </GalleryCard>
        ))}
      </GalleryGrid>

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
    </PageWrapper>
  );
};
