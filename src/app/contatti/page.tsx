import type { Metadata } from 'next';
import { ContattiClient } from './ContattiClient';

export const metadata: Metadata = {
  title: 'Contatti & Preventivo • Studio Fotografico Sanremo',
  description:
    'Contatta Unique Photography di Simone Bonfiglio per richiedere un preventivo o informazioni per il tuo matrimonio o servizio fotografico a Sanremo e in Liguria.',
};

export default function ContattiPage() {
  return <ContattiClient />;
}
