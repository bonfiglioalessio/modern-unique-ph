export type GalleryCategory = 'all' | 'cerimonia' | 'coppia' | 'emozioni' | 'party' | 'dettagli';

export interface GalleryCategoryOption {
  id: GalleryCategory | string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'cerimonia' | 'coppia' | 'emozioni' | 'party' | 'dettagli';
  categoryLabel: string;
  title: string;
  location?: string;
  orientation?: 'landscape' | 'portrait';
}
