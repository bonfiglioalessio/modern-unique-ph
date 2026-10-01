import type { Metadata } from 'next';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery Fotografica • Matrimoni in Liguria',
  description:
    'Sfoglia la selezione fotografica dei matrimoni raccontati da Unique Photography a Sanremo, Bordighera, Imperia e in tutta la Liguria. Ritratti, cerimonie e momenti spontanei.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
