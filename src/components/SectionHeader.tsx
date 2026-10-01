'use client';

import React from 'react';
import styled from 'styled-components';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const HeaderWrapper = styled.div<{ $align: 'left' | 'center'; $light: boolean }>`
  text-align: ${({ $align }) => $align};
  max-width: 680px;
  margin: ${({ $align }) => ($align === 'center' ? '0 auto 2.5rem' : '0 0 2rem')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 1.75rem;
    text-align: left;
  }
`;

const SectionLabel = styled.span<{ $light: boolean }>`
  display: block;
  font-size: 0.9375rem; /* 15px */
  font-weight: 600;
  color: ${({ $light, theme }) => ($light ? theme.colors.accentLight : theme.colors.accent)};
  margin-bottom: 0.5rem;
`;

const Title = styled.h2<{ $light: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.85rem, 3.2vw, 2.5rem);
  font-weight: 400;
  line-height: 1.25;
  color: ${({ $light, theme }) => ($light ? theme.colors.white : theme.colors.text)};
  letter-spacing: -0.015em;
  margin-bottom: 0.75rem;
`;

const Description = styled.p<{ $light: boolean }>`
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ $light, theme }) =>
    $light ? theme.colors.textLightSecondary : theme.colors.textSecondary};
`;

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = 'center',
  light = false,
}) => {
  return (
    <HeaderWrapper $align={align} $light={light}>
      {label && <SectionLabel $light={light}>{label}</SectionLabel>}
      <Title $light={light}>{title}</Title>
      {description && <Description $light={light}>{description}</Description>}
    </HeaderWrapper>
  );
};
