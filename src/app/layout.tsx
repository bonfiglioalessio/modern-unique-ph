import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from '@/lib/providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SocialBar } from '@/components/SocialBar';
import { MobileQuickBar } from '@/components/MobileQuickBar';
import { siteConfig } from '@/data/site';

const spectral = localFont({
  src: [
    { path: '../fonts/spectral/Spectral-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/spectral/Spectral-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../fonts/spectral/Spectral-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/spectral/Spectral-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/spectral/Spectral-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/spectral/Spectral-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: '../fonts/spectral/Spectral-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/spectral/Spectral-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
    { path: '../fonts/spectral/Spectral-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/spectral/Spectral-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-spectral',
  display: 'swap',
});

const plusJakartaSans = localFont({
  src: [
    { path: '../fonts/plus-jakarta-sans/PlusJakartaSans-VariableFont_wght.woff2', style: 'normal' },
    { path: '../fonts/plus-jakarta-sans/PlusJakartaSans-Italic-VariableFont_wght.woff2', style: 'italic' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} • Fotografo Matrimonio Sanremo & Liguria`,
    template: `%s • ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'fotografo matrimonio sanremo',
    'fotografo matrimonio liguria',
    'unique photography simone bonfiglio',
    'wedding photographer italy',
    'servizio fotografico matrimonio imperia',
    'reportage matrimonio riviera ligure',
    'destination wedding sanremo',
    'fotografo costa azzurra',
  ],
  authors: [{ name: siteConfig.photographer, url: siteConfig.url }],
  creator: siteConfig.photographer,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://images-pw.pixieset.com/elementfield/zv4974Z/SB401541_2048px-c5ce1b7e-1500.jpg',
        width: 1500,
        height: 1000,
        alt: 'Unique Photography di Simone Bonfiglio - Fotografo Sanremo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      'https://images-pw.pixieset.com/elementfield/zv4974Z/SB401541_2048px-c5ce1b7e-1500.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Photographer', 'LocalBusiness'],
  name: siteConfig.name,
  image: 'https://images-pw.pixieset.com/elementfield/zv4974Z/SB401541_2048px-c5ce1b7e-1500.jpg',
  '@id': siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.8159,
    longitude: 7.7761,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:30',
  },
  sameAs: [
    siteConfig.socials.instagram,
    siteConfig.socials.facebook,
    siteConfig.socials.matrimonioCom,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${spectral.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Navbar />
          <SocialBar />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>{children}</main>
          <Footer />
          <MobileQuickBar />
        </Providers>
      </body>
    </html>
  );
}
