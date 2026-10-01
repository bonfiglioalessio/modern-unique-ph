import type { Metadata } from 'next';
import { RecensioniClient } from './RecensioniClient';

export const metadata: Metadata = {
  title: 'Recensioni degli Sposi • Valutazione 5.0',
  description:
    'Leggi le recensioni e le testimonianze degli sposi che hanno scelto Unique Photography di Simone Bonfiglio per il loro matrimonio a Sanremo e in Liguria.',
};

export default function RecensioniPage() {
  return <RecensioniClient />;
}
