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

export const galleryCategories = [
  { id: 'all', label: 'Tutti gli Scatti' },
  { id: 'coppia', label: 'Ritratti di Coppia' },
  { id: 'cerimonia', label: 'La Cerimonia' },
  { id: 'emozioni', label: 'Emozioni Spontanee' },
  { id: 'party', label: 'Party & Ricevimento' },
];

export const galleryData: GalleryImage[] = [
  {
    id: 'tramonto-ospedaletti',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/4UQPITqAu9CuMQKZGpfx32/86ca449ad1f716f7a4d17708277f5c2a/unique-315.jpg',
    alt: 'Sposi al tramonto in riva al mare a Ospedaletti',
    title: 'Luce d’Oro sul Mare',
    location: 'Ospedaletti, Riviera Ligure',
    category: 'coppia',
    categoryLabel: 'Ritratti di Coppia',
    orientation: 'landscape',
  },
  {
    id: 'emozione-sposa',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/4xHbYkiZvevJWyaEDEJmTj/556d7e50a768560c6b087ddf9d07ff73/fotografie-di-matrimonio-emozionanti.jpg',
    alt: 'Momento di profonda emozione e lacrime di gioia degli sposi',
    title: 'Lacrime di Gioia',
    location: 'Sanremo, Liguria',
    category: 'emozioni',
    categoryLabel: 'Emozioni Spontanee',
    orientation: 'landscape',
  },
  {
    id: 'destination-wedding-sanremo',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/5FHtD3r3uz7COAic2wc29z/67e8f3a6c0fbf9b264ee48b4fe5e2022/Rachael_Isabella-681_copia_2.jpg',
    alt: 'Destination wedding a Sanremo vista mare tra Rachael e Isabella',
    title: 'Cerimonia con Vista Mare',
    location: 'Sanremo, Liguria',
    category: 'cerimonia',
    categoryLabel: 'La Cerimonia',
    orientation: 'landscape',
  },
  {
    id: 'villa-ormond-sanremo',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/rUpNKXH599uCfkrRBhLO8/3a48f6727281db4c2b6c18a3428a958b/unique-0303_copia.jpg',
    alt: 'Ricevimento e dettagli a Villa Ormond Sanremo',
    title: 'Incanto a Villa Ormond',
    location: 'Villa Ormond, Sanremo',
    category: 'party',
    categoryLabel: 'Party & Ricevimento',
    orientation: 'landscape',
  },
  {
    id: 'logge-santa-chiara',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/6UytPk7faUJKbwCqzQwofv/7d160acf9b1835a6351ba1b7c622a6b7/Irene_Alessandro-740_copia.jpg',
    alt: 'Sposi al tramonto sotto le Logge di Santa Chiara a Imperia',
    title: 'Architetture e Amore',
    location: 'Logge di Santa Chiara, Imperia',
    category: 'coppia',
    categoryLabel: 'Ritratti di Coppia',
    orientation: 'landscape',
  },
  {
    id: 'bambini-cerimonia',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/3q2x813w42PXiycEPcdcZv/e0590a9f45bacf34b4adb4634f86b7f9/unique-221.jpg',
    alt: 'Bambini che giocano durante la cerimonia di nozze',
    title: 'Spontaneità Pura',
    location: 'Dolceacqua, Liguria',
    category: 'emozioni',
    categoryLabel: 'Emozioni Spontanee',
    orientation: 'landscape',
  },
  {
    id: 'spiaggia-imperia',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/6wJx5H9zd31hFK7jRMLa5y/94fe4a2b1fbbd340f2407a118858cff2/unique-412_copia.jpg',
    alt: 'Matrimonio a piedi nudi sulla spiaggia ad Imperia',
    title: 'Piedi Nudi sulla Sabbia',
    location: 'Imperia Borgo Marina',
    category: 'cerimonia',
    categoryLabel: 'La Cerimonia',
    orientation: 'landscape',
  },
  {
    id: 'party-novi-ligure',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/66r36JA2PUEiqryhh8lRKh/3d02079995ebb7c4d09f69cde2b45ee5/unique-718.jpg',
    alt: 'Festa e balli scatenati tra sposi e amici',
    title: 'La Notte si Accende',
    location: 'La Federica, Novi Ligure',
    category: 'party',
    categoryLabel: 'Party & Ricevimento',
    orientation: 'landscape',
  },
  {
    id: 'matrimonio-rustico',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/132lnCGuzuX1RtKhZHRJsR/fa1acae2f83d242e21479df8bc8a435d/unique-0001_copia.jpg',
    alt: 'Matrimonio in stile rustico ed elegante tra gli ulivi liguri',
    title: 'Tra gli Ulivi della Liguria',
    location: 'Entroterra di Sanremo',
    category: 'coppia',
    categoryLabel: 'Ritratti di Coppia',
    orientation: 'landscape',
  },
  {
    id: 'sorrisi-e-sguardi',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/7JGWEETzlsP4dmO5ZNjaPQ/28b1c47aad082a2347a3492a8269a645/unique-0001-2.jpg',
    alt: 'Sguardi complici e sorrisi naturali degli sposi',
    title: 'Complicità Infinita',
    location: 'Sanremo',
    category: 'emozioni',
    categoryLabel: 'Emozioni Spontanee',
    orientation: 'landscape',
  },
  {
    id: 'ritratto-intimo',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/7vpIIc6qqiG2V6m5QWjdGK/83070eaf4b5211ef2da49680cd12c83b/foto-matrimonio-posa.jpg',
    alt: 'Ritratto elegante e delicato degli sposi',
    title: 'Eleganza Intima',
    location: 'Bordighera',
    category: 'coppia',
    categoryLabel: 'Ritratti di Coppia',
    orientation: 'landscape',
  },
  {
    id: 'fotografo-matrimonio-liguria',
    src: 'https://images.ctfassets.net/1qgv2qxuxgqc/18YJV0BzAi5QREyGxQ8pDA/8573694c1cd447b189bcad76c28e0a46/fotografo-matrimonio-liguria.jpg',
    alt: 'Momento clou dello scambio delle fedi e promesse',
    title: 'Il Momento del Sì',
    location: 'Riviera dei Fiori',
    category: 'cerimonia',
    categoryLabel: 'La Cerimonia',
    orientation: 'landscape',
  },
];
