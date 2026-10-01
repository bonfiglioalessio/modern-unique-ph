export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'matrimoni',
    title: 'Reportage di Matrimonio',
    subtitle: 'Raccontare la vostra storia, con naturalezza',
    shortDesc:
      'Viviamo insieme ogni istante della giornata: quelli emozionanti, quelli spontanei, quelli inaspettati. Immagini autentiche senza pose forzate da rivivere per sempre.',
    description:
      'Il servizio di matrimonio è il cuore del mio lavoro. Racconto la vostra giornata con discrezione ed empatia, vivendo insieme a voi e ai vostri ospiti ogni emozione reale: lo sguardo commosso di un papà, le lacrime della mamma durante i preparativi, la complicità sfrenata con gli amici durante la festa. Nessuna recitazione o sorrisi a comando: solo voi, autentici.',
    features: [
      'Presenza per l’intera giornata: preparativi, cerimonia, ricevimento e festa',
      'Consegna di tutti gli scatti in alta risoluzione entro circa 2 mesi',
      'Galleria privata online protetta per voi e i vostri ospiti',
      'Totale libertà di stampa e condivisione dei file senza vincoli',
      'Consulenza e consigli dedicati per l’organizzazione della luce e dei tempi',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/4UQPITqAu9CuMQKZGpfx32/86ca449ad1f716f7a4d17708277f5c2a/unique-315.jpg',
    badge: 'Servizio Principale',
  },
  {
    id: 'coppie',
    title: 'Foto di Coppia',
    subtitle: 'Un servizio fotografico dedicato a voi due',
    shortDesc:
      'Che vi sposiate o meno, poco importa: due ore di shooting in una location a vostra scelta nelle ore più belle della giornata (al tramonto).',
    description:
      'Il servizio fotografico di coppia è un’esperienza unica da regalare per un’occasione speciale o semplicemente perché si desidera condividere un momento insieme e creare un ricordo che resta nel tempo. Passeggiamo al mare o in un borgo della Riviera con una luce magica, senza pose rigide.',
    features: [
      'Circa 2 ore di sessione fotografica al tramonto',
      'Location a vostra scelta (spiaggia, borghi liguri o natura)',
      'Scatti spontanei e rilassati, ideali anche per il Save the Date',
      'Consegna di tutti i file in alta risoluzione con editing accurato',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/5FHtD3r3uz7COAic2wc29z/67e8f3a6c0fbf9b264ee48b4fe5e2022/Rachael_Isabella-681_copia_2.jpg',
  },
  {
    id: 'appartamenti',
    title: 'Appartamenti & Affitti Brevi',
    subtitle: 'Fotografia professionale per Airbnb, Booking e case vacanza',
    shortDesc:
      'Sei un proprietario o gestisci affitti brevi in Riviera? La qualità delle immagini è fondamentale per valorizzare gli spazi e attirare più prenotazioni.',
    description:
      'Immagini curate con la giusta illuminazione e prospettiva per creare un’atmosfera accogliente ed esaltare ogni angolo dell’appartamento. Foto luminose e ben composte aumentano direttamente il tasso di conversione e posizionamento sui portali di prenotazione.',
    features: [
      'Shooting con attrezzatura grandangolare professionale specifica',
      'Valorizzazione accurata di luce naturale, prospettive e dettagli degli ambienti',
      'Post-produzione avanzata per immagini nitide, luminose e accattivanti',
      'Consegna rapida ottimizzata per gli standard web di Airbnb, Booking e portali immobiliari',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/rUpNKXH599uCfkrRBhLO8/3a48f6727281db4c2b6c18a3428a958b/unique-0303_copia.jpg',
  },
  {
    id: 'famiglia-maternita',
    title: 'Famiglia e Maternità',
    subtitle: 'Ricordi autentici che raccontano la vostra storia con emozione',
    shortDesc:
      'I momenti in famiglia e la dolcezza dell’attesa meritano di essere ricordati per sempre, con scatti naturali all’aperto o a casa senza pose forzate.',
    description:
      'I momenti in famiglia sono preziosi e meritano di essere ricordati per sempre. Un servizio fotografico professionale vi permette di conservare ricordi autentici: foto genuine e piene di vita con chi amate, celebrando la gioia della gravidanza o i primi traguardi dei piccoli.',
    features: [
      'Shooting all’aperto al mare, nei giardini o nel comfort di casa',
      'Scatti naturali e spontanei, senza pose forzate, per catturare la vostra vera essenza',
      'Atmosfera rilassata e ritmi dolci nel pieno rispetto dei più piccoli',
      'Consegna file in alta risoluzione pronti da stampare e condividere',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/3q2x813w42PXiycEPcdcZv/e0590a9f45bacf34b4adb4634f86b7f9/unique-221.jpg',
  },
  {
    id: 'ritratti-studio',
    title: 'Ritratti in Studio a Sanremo',
    subtitle: 'Immagini semplici, naturali e senza forzature',
    shortDesc:
      'Nello studio intimo a Sanremo creiamo fotografie pulite, con luce morbida e atmosfera rilassata, guidandoti con semplicità anche se non ami l’obiettivo.',
    description:
      'Lo studio a Sanremo è uno spazio intimo e minimale, pensato per accogliere le persone in modo semplice, senza distrazioni. Non cerco pose costruite, ma momenti reali: uno sguardo, un sorriso, un gesto spontaneo. L’obiettivo è ottenere fotografie che durino nel tempo, pulite e autentiche.',
    features: [
      'Sessioni di circa 1 ora nello studio fotografico a Sanremo',
      'Luce morbida e ambiente accogliente per farti sentire a tuo agio',
      'Guida naturale alla posa: non serve alcuna esperienza davanti alla macchina',
      'Ottima idea regalo originale o per ritratti personali e professionali d’autore',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/132lnCGuzuX1RtKhZHRJsR/fa1acae2f83d242e21479df8bc8a435d/unique-0001_copia.jpg',
  },
  {
    id: 'album-fine-art',
    title: 'Album Artigianali & Stampe',
    subtitle: 'La tangibilità dei vostri ricordi stampata sui migliori supporti',
    shortDesc:
      'Libertà totale di stampa con i file in alta risoluzione, unita alla possibilità di realizzare album d’autore progettati su misura, ordinabili anche dopo il matrimonio.',
    description:
      'Sarete sempre liberi di stampare le vostre fotografie dove preferite: consegno i file in alta risoluzione proprio per lasciarvi totale libertà. Se invece desiderate un prodotto artigianale di altissima qualità, realizzo album professionali progettati su misura con impaginazione sartoriale, ordinabili anche a distanza di mesi.',
    features: [
      'Nessun obbligo d’acquisto iniziale: massima serenità di scelta',
      'File in alta risoluzione sempre inclusi per stampe in totale autonomia',
      'Impaginazione personalizzata pulita ed editoriale, senza grafiche pesanti',
      'Materiali italiani pregiati: copertine in lino naturale, seta, cuoio e carte Fine-Art',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/7vpIIc6qqiG2V6m5QWjdGK/83070eaf4b5211ef2da49680cd12c83b/foto-matrimonio-posa.jpg',
  },
];
