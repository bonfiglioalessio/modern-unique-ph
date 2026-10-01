import type { Metadata } from 'next';
import { ChiSonoClient } from './ChiSonoClient';

export const metadata: Metadata = {
  title: 'Chi Sono • Simone Bonfiglio',
  description:
    'Conosci Simone Bonfiglio, fotografo di matrimonio e titolare di Unique Photography a Sanremo. Storia, approccio documentario e passione per i ricordi autentici.',
};

export default function ChiSonoPage() {
  return <ChiSonoClient />;
}
