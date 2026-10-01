'use client';

import styled from 'styled-components';

export interface BadgeProps {
  variant?: 'gold' | 'default' | 'outline';
}

export const Badge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.75rem;
  border-radius: ${({ theme }) => theme.radius.full};
  width: fit-content;

  ${({ variant = 'gold', theme }) => {
    switch (variant) {
      case 'default':
        return `
          background: ${theme.colors.cardSecondary};
          color: ${theme.colors.textSecondary};
          border: 1px solid ${theme.colors.divider};
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.accent};
          border: 1px solid ${theme.colors.accent};
        `;
      case 'gold':
      default:
        return `
          background: ${theme.colors.accentLight};
          color: ${theme.colors.accent};
          border: 1px solid transparent;
        `;
    }
  }}
`;
