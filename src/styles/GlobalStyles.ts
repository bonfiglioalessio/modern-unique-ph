'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: 105px;
    -webkit-text-size-adjust: 100%;
  }

  [id] {
    scroll-margin-top: 105px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.sans};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-bottom: 72px; /* space for MobileQuickBar */
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.015em;
    color: inherit;
  }

  p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.default};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 16px !important; /* Prevents auto-zoom on iOS */
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accentLight};
    color: ${({ theme }) => theme.colors.text};
  }

  /* Minimal hairline scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.divider};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textMuted};
  }
`;
