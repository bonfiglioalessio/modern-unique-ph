'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  HeroSection,
  PhilosophySection,
  HomeServicesSection,
  HomeAboutSection,
  HomeAwardsSection,
  HomeCtaSection,
} from '@/components/home';
import { InfinitePhotoRibbon } from '@/components/InfinitePhotoRibbon';
import { StoriesCarousel } from '@/components/StoriesCarousel';
import { ReviewsSlider } from '@/components/ReviewsSlider';
import { Lightbox } from '@/components/Lightbox';
import { galleryData } from '@/data/gallery';

const PageContainer = styled.main`
  width: 100%;
`;

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PageContainer>
      {/* 1. Clean Editorial Hero */}
      <HeroSection />

      {/* 2. Infinite Continuous Photo Ribbon */}
      <InfinitePhotoRibbon onImageClick={(idx) => setLightboxIndex(idx)} />

      {/* 3. Shooting Philosophy */}
      <PhilosophySection />

      {/* 4. Horizontal Stories Carousel (Featured Real Weddings) */}
      <StoriesCarousel onImageClick={(idx) => setLightboxIndex(idx)} />

      {/* 5. Services Overview Grid */}
      <HomeServicesSection />

      {/* 6. About Simone Preview */}
      <HomeAboutSection />

      {/* 7. Awards Timeline */}
      <HomeAwardsSection />

      {/* 8. Client Reviews Slider */}
      <ReviewsSlider />

      {/* 9. Final CTA */}
      <HomeCtaSection />

      {/* Gallery Lightbox */}
      <Lightbox
        images={galleryData.slice(0, 8)}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() =>
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % 8 : 0))
        }
        onPrev={() =>
          setLightboxIndex((prev) => (prev !== null ? (prev - 1 + 8) % 8 : 0))
        }
      />
    </PageContainer>
  );
}
