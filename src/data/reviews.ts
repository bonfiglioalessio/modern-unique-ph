export interface ReviewItem {
  id: string;
  author: string;
  couple?: string;
  date?: string;
  title: string;
  text: string;
  stars: number;
  highlight?: string;
  source: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 'alice-luca',
    author: 'Alice & Luca',
    date: 'Settembre 2021',
    title: 'Una Certezza',
    text: 'Ci siamo sposati il 18 settembre 2021.. e fin da subito abbiamo avuto le idee chiare per il nostro servizio fotografico... che dire? Simone e Carolina sono stati semplicemente fantastici, la loro presenza è stata fondamentale... ci hanno aiutati, tranquillizzati e accompagnati in modo molto professionale! Il punto di forza del nostro matrimonio sono stati proprio i nostri fornitori! Grazie di tutto... Alice e Luca',
    stars: 5,
    highlight: 'La loro presenza è stata fondamentale: professionali, tranquilli e impeccabili.',
    source: 'Matrimonio.com',
  },
  {
    id: 'valentina',
    author: 'Valentina',
    date: 'Ottobre 2020',
    title: 'Con la pioggia è più romantico',
    text: 'Matrimonio il 19 ottobre tra allerta meteo, piccoli barlumi di sole e anche la pioggia. Le nostre foto sono risultate bellissime: romantiche e vintage come piacciono a me. Grazie ragazzi per questi scatti che hanno reso questo giorno unico!',
    stars: 5,
    highlight: 'Scatti stupendi anche sotto la pioggia, romantici e senza tempo.',
    source: 'Matrimonio.com',
  },
  {
    id: 'cassandre',
    author: 'Cassandre',
    date: 'Destination Wedding',
    title: 'Wedding Photographer',
    text: 'Se siete alla ricerca di un fotografo dal talento incredibile, Simone e il suo team sono perfetti per voi. Molto professionale, gentile e aperto a tutte le mie idee folli per le foto del mio giorno speciale. Ha concretizzato tutti i miei sogni. Vivo in Florida e mi sono sposata in Italia: è stato fantastico rimanendo costantemente in contatto con me prima, durante e dopo le nozze. Non avrei potuto desiderare un matrimonio più facile!',
    stars: 5,
    highlight: 'Vivo in Florida e mi sono sposata in Italia: comunicazione e risultato impeccabili.',
    source: 'Matrimonio.com',
  },
  {
    id: 'elena',
    author: 'Elena',
    title: 'Top & Real Time Emotions',
    text: 'Simone ci ha colpito subito per la sua semplicità e per l’entusiasmo che abbiamo letto nei suoi occhi. Offre diversi pacchetti che riescono a soddisfare diverse esigenze, compreso il Real Time Emotions, uno slideshow con le foto fatte durante la giornata, montate la sera stessa, che ha fatto rivivere a noi e ai nostri invitati le emozioni di qualche ora prima! Perché sceglierlo? Quando gli ho chiesto cosa lo spinge a dedicarsi così tanto ai matrimoni mi ha risposto "perché mi diverto da morire!" Come non fidarsi di chi ama così tanto ciò che fa?',
    stars: 5,
    highlight: 'Lo slideshow montato la sera stessa ha lasciato tutti a bocca aperta.',
    source: 'Matrimonio.com',
  },
  {
    id: 'zane',
    author: 'Zane',
    date: 'Wedding in Pigna, Liguria',
    title: 'Un vero artista',
    text: 'Siamo una coppia proveniente dalla Lettonia e dal Libano. Trovare Simone è stata una fortuna per noi! Ha un grande talento, senso della composizione, dei colori, dello spirito del giorno. Le sue foto sono come un quadro, una pittura. Non è semplicemente un fotografo: racconta la vostra storia d’amore con tanta pazienza, cortesia e gentilezza. Risultato eccellente e foto ricevute prestissimo!',
    stars: 5,
    highlight: 'Le sue foto sono come un quadro d’autore: colgono l’anima del momento.',
    source: 'Matrimonio.com',
  },
  {
    id: 'annalisa',
    author: 'Annalisa',
    title: 'Un’emozione.. Unique!',
    text: 'Ci siamo fin da subito sentiti a nostro agio nel farci fotografare: Simone e Carolina hanno colto ogni momento significativo del nostro matrimonio esaltandolo nella luce e nei colori! La loro filosofia è quella di documentare l’intera "storia", a partire dai preparativi fino agli ultimi istanti. Lo Slide Show rappresenta un momento entusiasmante per rivivere la festa... un’emozione unica!',
    stars: 5,
    highlight: 'Subito a nostro agio: luce, colori ed emozioni al top.',
    source: 'Matrimonio.com',
  },
  {
    id: 'morena',
    author: 'Morena',
    title: 'Consigliatissimo al 100%',
    text: 'Simone e Carolina sono stati unici, 2 ottimi professionisti e persone speciali. Sono riusciti a cogliere tutto nel nostro giorno più bello, ogni dettaglio e sfumatura senza mai interferire con noi, cogliendo l’assoluta spontaneità. Abbiamo ricevuto tantissimi complimenti da tutti gli invitati e abbiamo fatto anche uno shooting post-wedding in mare vestiti da sposi! Li risceglierei altre 1000 volte.',
    stars: 5,
    highlight: 'Discrezione totale e spontaneità pura: li risceglieremmo altre 1000 volte.',
    source: 'Matrimonio.com',
  },
];
