import type { Metadata } from 'next';
import { ServiziClient } from './ServiziClient';

export const metadata: Metadata = {
  title: 'Servizi Fotografici a Sanremo • Matrimoni, Ritratti & Famiglia',
  description:
    'Tutti i servizi fotografici di Unique Photography a Sanremo: fotografia di matrimonio, engagement, album fine-art, ritrattistica in studio, maternità e interior design.',
};

export default function ServiziPage() {
  return <ServiziClient />;
}
