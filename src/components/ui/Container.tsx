'use client';

import styled from 'styled-components';

export interface ContainerProps {
  size?: 'default' | 'narrow' | 'wide';
  $noPadding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ size, theme }) => {
    switch (size) {
      case 'narrow':
        return '960px';
      case 'wide':
        return '1400px';
      case 'default':
      default:
        return theme.maxWidth; // 1280px
    }
  }};
  padding-left: ${({ $noPadding }) => ($noPadding ? '0' : '1.5rem')};
  padding-right: ${({ $noPadding }) => ($noPadding ? '0' : '1.5rem')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: ${({ $noPadding }) => ($noPadding ? '0' : '1.25rem')};
    padding-right: ${({ $noPadding }) => ($noPadding ? '0' : '1.25rem')};
  }
`;
