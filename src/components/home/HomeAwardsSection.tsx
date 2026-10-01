'use client';

import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { AwardsTimeline } from '@/components/AwardsTimeline';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 1.25rem;
  }
`;

export const HomeAwardsSection: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeader
        label="Riconoscimenti"
        title="Premi e traguardi"
        description="Riconoscimenti nazionali assegnati dall’Associazione Nazionale Fotografi di Matrimonio (ANFM) e premi Wedding Awards basati sulle recensioni verificate."
      />
      <AwardsTimeline />
    </SectionWrapper>
  );
};
