export const siteConfig = {
  name: 'Unique Photography di Simone Bonfiglio',
  shortName: 'Unique Photography',
  photographer: 'Simone Bonfiglio',
  title: 'Unique Photography di Simone Bonfiglio - Fotografo di Matrimonio a Sanremo',
  description:
    'Unique Photography di Simone Bonfiglio, fotografo di matrimonio a Sanremo. Emozioni autentiche, spontaneità e scatti eleganti per raccontare il tuo giorno speciale in Liguria e provincia di Imperia.',
  url: 'https://www.uniquephotography.it',
  piva: 'IT01720380086',
  email: 'info@uniquephotography.it',
  phone: '+39 340 0000000', // placeholder or contact form
  location: {
    city: 'Sanremo',
    province: 'Imperia',
    region: 'Liguria',
    country: 'Italia',
    address: 'Sanremo (IM), Liguria',
  },
  socials: {
    instagram: 'https://www.instagram.com/uniquephotography.it/',
    facebook: 'https://www.facebook.com/UniquePhotographySanremo/',
    matrimonioCom: 'https://www.matrimonio.com/fotografo-matrimonio/unique-photography--e190367',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Chi Sono', href: '/chi-sono/' },
    {
      label: 'Matrimoni',
      href: '/matrimoni/',
      subLinks: [
        { label: 'Come Lavoro & Flusso', href: '/matrimoni/' },
        { label: 'Portfolio Matrimoni', href: '/gallery/' },
        { label: 'Real Time Emotions', href: '/servizi/#real-time-emotions' },
        { label: 'Recensioni degli Sposi', href: '/recensioni/' },
      ],
    },
    {
      label: 'Servizi',
      href: '/servizi/',
      subLinks: [
        { label: 'Panoramica Servizi', href: '/servizi/' },
        { label: 'Coppie & Engagement', href: '/servizi/#coppie-engagement' },
        { label: 'Ritratti in Studio a Sanremo', href: '/servizi/#ritratti-studio' },
        { label: 'Album Fotografici Fine-Art', href: '/servizi/#album-fine-art' },
        { label: 'Famiglia & Maternità', href: '/servizi/#famiglia-maternita' },
        { label: 'Interior & Real Estate', href: '/servizi/#appartamenti-interior' },
      ],
    },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Recensioni', href: '/recensioni/' },
    { label: 'Contatti', href: '/contatti/' },
  ],
};
