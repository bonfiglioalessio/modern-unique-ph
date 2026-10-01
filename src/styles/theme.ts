export const theme = {
  colors: {
    background: '#FAF8F5',
    card: '#FFFFFF',
    cardSecondary: '#F2EFEB',
    divider: 'rgba(0, 0, 0, 0.08)',
    dividerDark: 'rgba(255, 255, 255, 0.12)',

    darkBackground: '#121212',
    darkCard: '#1A1A1A',
    darkCardSecondary: '#242424',

    text: '#161616',
    textSecondary: '#555555',
    textMuted: '#888888',

    textLight: '#F5F5F5',
    textLightSecondary: '#BBBBBB',
    textLightMuted: '#888888',

    accent: '#8C7355',
    accentLight: '#EFE9E1',
    accentDark: '#6E583F',

    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    serif: "var(--font-spectral), 'Spectral', 'Cormorant Garamond', Georgia, serif",
    sans: "var(--font-sans), 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  radius: {
    xs: '4px',
    sm: '8px',
    md: '14px',
    lg: '20px',
    xl: '24px',
    full: '9999px',
  },
  breakpoints: {
    desktopLarge: '1440px',
    desktop: '1200px',
    tablet: '992px',
    mobile: '768px',
    mobileSmall: '480px',
  },
  maxWidth: '1180px',
  transitions: {
    default: '0.2s ease',
  },
};

export type ThemeType = typeof theme;
