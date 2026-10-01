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
    subtitle: 'Il vostro giorno più bello raccontato con spontaneità ed eleganza',
    shortDesc:
      'Raccontiamo l’intera giornata del vostro matrimonio: dai preparativi a casa fino al taglio della torta e ai balli più scatenati.',
    description:
      'Il servizio di matrimonio è il cuore di Unique Photography. Lavoriamo sempre in due fotografi per non perdere nessun punto di vista: mentre uno segue la sposa, l’altro documenta l’emozione dello sposo. Il nostro stile è un reportage puro, pulito e cinematografico, senza lunghe sessioni di pose forzate che vi rubino tempo prezioso con amici e parenti.',
    features: [
      'Presenza di due fotografi professionisti per tutta la durata dell’evento',
      'Copertura completa: Preparativi, Cerimonia, Ricevimento e Party serale',
      'Consegna di oltre 600-800 scatti in altissima risoluzione, tutti accuratamente post-prodotti',
      'Galleria privata online per voi e i vostri ospiti, protetta da password',
      'Scatti aerei con drone su richiesta (in aree consentite)',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/4UQPITqAu9CuMQKZGpfx32/86ca449ad1f716f7a4d17708277f5c2a/unique-315.jpg',
    badge: 'Più Richiesto',
  },
  {
    id: 'real-time-emotions',
    title: 'Real Time Emotions',
    subtitle: 'Rivivete la magia della giornata durante il ricevimento',
    shortDesc:
      'Uno slideshow emozionale montato la sera stessa del matrimonio con le foto appena scattate, proiettato prima del taglio della torta.',
    description:
      'Un’esperienza indimenticabile sia per gli sposi che per tutti gli invitati: durante il ricevimento selezioniamo ed editiamo i momenti più intensi vissuti solo poche ore prima. Lo slideshow, sincronizzato su una colonna sonora emozionante, lascia tutti senza parole e con gli occhi lucidi.',
    features: [
      'Editing live sul posto durante la cena',
      'Proiezione su maxischermo prima del taglio torta',
      'Coinvolgimento emotivo totale di sposi e invitati',
      'File video HD consegnato agli sposi per i social',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/4xHbYkiZvevJWyaEDEJmTj/556d7e50a768560c6b087ddf9d07ff73/fotografie-di-matrimonio-emozionanti.jpg',
    badge: 'Esclusiva Unique',
  },
  {
    id: 'coppie-engagement',
    title: 'Coppie & Engagement',
    subtitle: 'Uno shooting informale e rilassato prima del grande giorno',
    shortDesc:
      'Una passeggiata insieme al mare, in un borgo ligure o in mezzo alla natura per rompere il ghiaccio con l’obiettivo e celebrare il vostro fidanzamento.',
    description:
      'La sessione pre-matrimonio è l’occasione perfetta per conoscerci, prendere confidenza con la macchina fotografica e avere una serie di fotografie stupende, informali e moderne, ideali anche per le partecipazioni o il save the date.',
    features: [
      'Sessione di circa 1 ora e mezza in location a scelta',
      'Consulenza stilistica e scelta della migliore luce del tramonto',
      '50+ fotografie consegnate in alta risoluzione con editing d’autore',
      'Nessuna posa impostata: solo voi due nella vostra naturalezza',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/5FHtD3r3uz7COAic2wc29z/67e8f3a6c0fbf9b264ee48b4fe5e2022/Rachael_Isabella-681_copia_2.jpg',
  },
  {
    id: 'album-fine-art',
    title: 'Album Fotografici Fine-Art',
    subtitle: 'La tangibilità dei vostri ricordi stampata sui migliori supporti artigianali',
    shortDesc:
      'Fotolibri e album tradizionali rilegati a mano in Italia, con carte cotone pregiate, sete, lino e cuoio naturale.',
    description:
      'Crediamo profondamente nel valore della stampa fotografica. Un file su uno schermo non sostituirà mai l’emozione di sfogliare un album artigianale insieme ai vostri cari. I nostri fotolibri sono creati con impaginazioni pulite ed editoriali, senza grafiche pesanti, per resistere nel tempo.',
    features: [
      'Stampa Fine-Art con inchiostri a pigmenti duraturi nel tempo',
      'Copertine personalizzabili in lino naturale, seta, velluto o vera pelle',
      'Impaginazione sartoriale approvata insieme agli sposi',
      'Possibilità di abbinare copie ridotte per i genitori',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/7vpIIc6qqiG2V6m5QWjdGK/83070eaf4b5211ef2da49680cd12c83b/foto-matrimonio-posa.jpg',
  },
  {
    id: 'ritratti-studio',
    title: 'Ritratti in Studio & Personal Branding',
    subtitle: 'Shooting fotografici in studio a Sanremo per professionisti e privati',
    shortDesc:
      'Ritrattistica contemporanea, book personali, ritratti corporate e scatti dedicati a musicisti, artisti e professionisti.',
    description:
      'Nel nostro studio fotografico a Sanremo curiamo la luce nei minimi dettagli per esaltare la personalità e l’espressività di ogni persona. Un ritratto curato è il miglior biglietto da visita per la propria immagine professionale e personale.',
    features: [
      'Shooting in studio attrezzato con set luci professionali',
      'Direzione di posa fluida e naturale',
      'Selezione guidata e ritocco professionale della pelle non invasivo',
      'File pronti per stampa e utilizzo web / LinkedIn',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/132lnCGuzuX1RtKhZHRJsR/fa1acae2f83d242e21479df8bc8a435d/unique-0001_copia.jpg',
  },
  {
    id: 'famiglia-maternita',
    title: 'Famiglia & Maternità',
    subtitle: 'I capitoli più dolci della vostra vita da custodire per sempre',
    shortDesc:
      'Sessioni intime e giocose per future mamme, neonati e famiglie, sia all’aperto che nel comfort della propria casa.',
    description:
      'Il tempo con i figli vola: fissare in immagini autentiche la dolcezza dell’attesa o i primi sorrisi dei bimbi è un dono che acquista sempre più valore con il passare degli anni.',
    features: [
      'Atmosfera rilassata e ritmi rispettosi delle esigenze dei più piccoli',
      'Scatti sia in studio che in esterni al mare o nei giardini',
      'Nessun vincolo orario rigido per garantire la massima tranquillità',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/3q2x813w42PXiycEPcdcZv/e0590a9f45bacf34b4adb4634f86b7f9/unique-221.jpg',
  },
  {
    id: 'appartamenti-interior',
    title: 'Interior & Real Estate',
    subtitle: 'Fotografia d’interni per ville, case vacanza e b&b in Riviera',
    shortDesc:
      'Servizi fotografici dedicati a proprietari e agenzie immobiliari per valorizzare al massimo gli spazi e la luce.',
    description:
      'Scatti professionali con ottiche grandangolari corrette e gestione accurata della luce naturale e artificiale, per attrarre ospiti e acquirenti qualificati.',
    features: [
      'Valorizzazione prospettica e cromatica degli ambienti',
      'Ottimizzazione per portali immobiliari e piattaforme Airbnb/Booking',
      'Consegna rapida in formato web e alta risoluzione',
    ],
    image: 'https://images.ctfassets.net/1qgv2qxuxgqc/rUpNKXH599uCfkrRBhLO8/3a48f6727281db4c2b6c18a3428a958b/unique-0303_copia.jpg',
  },
];
