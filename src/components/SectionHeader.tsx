'use client';

import React from 'react';
import styled from 'styled-components';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const HeaderWrapper = styled.div<{ $align: 'left' | 'center'; $light: boolean }>`
  text-align: ${({ $align }) => $align};
  max-width: 760px;
  margin: ${({ $align }) => ($align === 'center' ? '0 auto 3.5rem' : '0 0 3rem')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 2.5rem;
    text-align: left;
  }
`;

const Subtitle = styled.span<{ $light: boolean }>`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ $light, theme }) => ($light ? theme.colors.accentLight : theme.colors.accent)};
  margin-bottom: 0.75rem;
`;

const Title = styled.h2<{ $light: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 400;
  line-height: 1.2;
  color: ${({ $light, theme }) => ($light ? theme.colors.white : theme.colors.textDark)};
  letter-spacing: -0.015em;
  margin-bottom: 1rem;
`;

const Description = styled.p<{ $light: boolean }>`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ $light, theme }) =>
    $light ? theme.colors.textLightMuted : theme.colors.textMuted};
`;

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}) => {
  return (
    <HeaderWrapper $align={align} $light={light}>
      {subtitle && <Subtitle $light={light}>{subtitle}</Subtitle>}
      <Title $light={light}>{title}</Title>
      {description && <Description $light={light}>{description}</Description>}
    </HeaderWrapper>
  );
};
