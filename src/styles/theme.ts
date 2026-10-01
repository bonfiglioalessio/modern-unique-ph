export const theme = {
  colors: {
    bgLight: '#FAF8F5',
    bgCard: '#FFFFFF',
    bgCardAlt: '#F3EFEA',
    bgDark: '#121212',
    bgDarkCard: '#1C1C1C',
    bgDarkElevated: '#242424',
    
    textDark: '#1A1A1A',
    textMuted: '#666666',
    textLight: '#F5F5F3',
    textLightMuted: '#A0A0A0',

    accent: '#8C7355',       // Refined warm brass / bronze
    accentHover: '#705B43',
    accentLight: '#E8DFD5',

    borderLight: 'rgba(0, 0, 0, 0.08)',
    borderDark: 'rgba(255, 255, 255, 0.12)',

    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    serif: "var(--font-spectral), 'Spectral', 'Cormorant Garamond', Georgia, serif",
    sans: "var(--font-sans), 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  breakpoints: {
    desktopLarge: '1440px',
    desktop: '1200px',
    tablet: '992px',
    mobile: '768px',
    mobileSmall: '480px',
  },
  maxWidth: '1240px',
  transitions: {
    default: '0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    slow: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

export type ThemeType = typeof theme;
