'use client';

import React from 'react';
import styled from 'styled-components';

export interface PageHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

const Wrapper = styled.div<{ $align: 'left' | 'center' }>`
  text-align: ${({ $align }) => $align};
  max-width: ${({ $align }) => ($align === 'center' ? '820px' : '720px')};
  margin: ${({ $align }) => ($align === 'center' ? '0 auto 3.5rem' : '0 0 3rem')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
    margin-bottom: 2.25rem;
  }
`;

const Eyebrow = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.65rem;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(2.2rem, 4.5vw, 3.25rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Description = styled.div`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};

  p {
    margin-bottom: 0.75rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Extra = styled.div<{ $align: 'left' | 'center' }>`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  justify-content: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
  }
`;

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
}) => {
  return (
    <Wrapper $align={align}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children && <Extra $align={align}>{children}</Extra>}
    </Wrapper>
  );
};
