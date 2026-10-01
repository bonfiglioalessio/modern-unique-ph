'use client';

import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'gold' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  $fullWidth?: boolean;
}

const buttonStyles = css<ButtonBaseProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transitions.default};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.8125rem;
        `;
      case 'lg':
        return css`
          padding: 1rem 2.25rem;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
        `;
      case 'md':
      default:
        return css`
          padding: 0.85rem 1.6rem;
          font-size: 0.875rem;
          letter-spacing: 0.02em;
        `;
    }
  }}

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'gold':
        return css`
          background: ${theme.colors.accent};
          color: #ffffff;
          border: 1px solid ${theme.colors.accent};
          &:hover {
            background: ${theme.colors.accentDark};
            border-color: ${theme.colors.accentDark};
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.divider};
          &:hover {
            background: ${theme.colors.cardSecondary};
            border-color: ${theme.colors.textSecondary};
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.text};
          border: 1px solid transparent;
          padding-left: 0;
          padding-right: 0;
          &:hover {
            color: ${theme.colors.accent};
          }
        `;
      case 'primary':
      default:
        return css`
          background: ${theme.colors.text};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.text};
          &:hover {
            background: ${theme.colors.accent};
            border-color: ${theme.colors.accent};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<ButtonBaseProps>`
  ${buttonStyles}
`;

const StyledLink = styled(Link)<ButtonBaseProps>`
  ${buttonStyles}
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps {
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  $fullWidth = false,
  children,
  ...props
}) => {
  if (href) {
    return (
      <StyledLink
        href={href}
        variant={variant}
        size={size}
        $fullWidth={$fullWidth}
        {...(props as any)}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      $fullWidth={$fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
