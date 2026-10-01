'use client';

import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.5rem;
  }
`;

export const FilterSegmented = styled.div`
  display: inline-flex;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 4px;
  gap: 4px;
`;

export const SegmentButton = styled.button<{ $active: boolean }>`
  padding: 0.55rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: none;
  cursor: pointer;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.cardSecondary : 'transparent'};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textSecondary)};
  transition: all ${({ theme }) => theme.transitions.default};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.cardSecondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
    color: #ffffff;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};

    span {
      display: block;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.accentLight};
    }
    h3 {
      font-size: 1rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.serif};
      margin: 0;
    }
  }

  &:hover {
    img {
      transform: scale(1.03);
    }
    .caption {
      opacity: 1;
    }
  }
`;
