import type { Metadata } from 'next';
import { ContattiClient } from './ContattiClient';

export const metadata: Metadata = {
  title: 'Contatti & Prenotazioni • Studio Fotografico Sanremo',
  description:
    'Contatta Unique Photography di Simone Bonfiglio per verificare la disponibilità per il tuo matrimonio o per prenotare un servizio fotografico a Sanremo e in Liguria.',
};

export default function ContattiPage() {
  return <ContattiClient />;
}
