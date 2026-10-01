import type { Metadata } from 'next';
import { MatrimoniClient } from './MatrimoniClient';

export const metadata: Metadata = {
  title: 'Fotografo di Matrimonio a Sanremo & Liguria',
  description:
    'Servizi fotografici di matrimonio a Sanremo, Imperia, Riviera dei Fiori e Costa Azzurra. Reportage spontaneo ed elegante, 2 fotografi, Real Time Emotions e album fine-art.',
};

export default function MatrimoniPage() {
  return <MatrimoniClient />;
}
