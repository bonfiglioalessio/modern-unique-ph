'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { FiChevronDown } from 'react-icons/fi';
import * as S from './MatrimoniClient.styles';

const faqs = [
  {
    q: 'Con quanto anticipo dobbiamo richiedere la data?',
    a: 'Per le date tra maggio e ottobre è consigliabile scrivermi con circa 6-12 mesi di anticipo per verificare la disponibilità. Per prenotare ufficialmente firmiamo insieme un contratto chiaro di tutela e viene versato un acconto.',
  },
  {
    q: 'Come lavori durante la giornata? Dobbiamo metterci in posa?',
    a: 'Assolutamente no. Il mio approccio è spontaneo e documentario: sarete liberi di vivere ogni istante con i vostri invitati senza pose noiose o sorrisi a comando. La breve sessione di ritratti (circa 20-30 minuti al tramonto) sarà una passeggiata rilassata solo per voi due.',
  },
  {
    q: 'Dopo quanto tempo le foto ci saranno consegnate?',
    a: 'Tutte le fotografie in alta risoluzione saranno consegnate entro circa 2 mesi tramite galleria privata online protetta da password, pronte per essere scaricate in altissima definizione, condivise con gli invitati e stampate dove preferite.',
  },
  {
    q: 'Fai anche video? Mi consigli un videografo?',
    a: 'No, non realizzo video perché scelgo di dedicarmi al 100% alla fotografia, garantendo la massima concentrazione su ogni momento. Collaboro però regolarmente con videografi professionisti di fiducia e ve ne consiglierò volentieri dopo la prenotazione del servizio.',
  },
  {
    q: 'Siamo obbligati ad acquistare l’album subito?',
    a: 'No, i fotolibri possono essere acquistati anche a distanza di mesi dopo il matrimonio, senza alcun obbligo iniziale. Consegno tutti i file in alta risoluzione proprio per lasciarvi totale libertà di scelta e di stampa.',
  },
  {
    q: 'Lavori solo a Sanremo o ti sposti?',
    a: 'Lavoro in tutta la Liguria (Imperia, Sanremo, Savona, Genova, Riviera dei Fiori), in Costa Azzurra (Mentone, Nizza, Monaco) e in tutta Italia per Destination Weddings.',
  },
];

export const MatrimoniClient: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <S.PageWrapper>
      <SectionHeader
        label="Matrimoni"
        title="Il vostro matrimonio: un racconto sincero"
        description="Non semplici fotografie, ma la cronaca sincera dei vostri sentimenti, delle lacrime di gioia e della festa più bella della vostra vita."
      />

      <S.HeroBanner>
        <img
          src="https://images-pw.pixieset.com/elementfield/zv4974Z/SB401541_2048px-c5ce1b7e-1500.jpg"
          alt="Reportage di Matrimonio a Sanremo e Riviera dei Fiori"
        />
        <div className="overlay">
          <h2>Discrezione, eleganza e verità. Senza finzione.</h2>
        </div>
      </S.HeroBanner>

      {/* 4 Step Flow (Single grouped surface) */}
      <S.FlowSection>
        <SectionHeader
          label="Come lavoro"
          title="Dal primo messaggio alla consegna delle foto"
          description="Un percorso trasparente e senza sorprese per accompagnarvi verso il giorno del vostro matrimonio."
        />

        <S.FlowSurface>
          <S.FlowRow>
            <span className="step-num">01</span>
            <h3>Contatto & Guida Prezzi</h3>
            <p>
              Scrivetemi fornendomi dettagli sulla data e la location. Vi invierò un PDF completo con tutte
              le informazioni sul mio modo di lavorare e il listino prezzi trasparente.
            </p>
          </S.FlowRow>

          <S.FlowRow>
            <span className="step-num">02</span>
            <h3>Videochiamata & Contratto</h3>
            <p>
              Se la proposta vi convince, fissiamo una videochiamata conoscitiva (su Zoom o Google Meet)
              oppure un incontro di persona a Sanremo. Per bloccare la data firmiamo un contratto di tutela con acconto.
            </p>
          </S.FlowRow>

          <S.FlowRow>
            <span className="step-num">03</span>
            <h3>Il Grande Giorno</h3>
            <p>
              Presenza discreta e professionale per tutta la durata dell’evento: dai preparativi fino alla festa.
              Nessuna posa forzata o interruzioni al ritmo della vostra giornata.
            </p>
          </S.FlowRow>

          <S.FlowRow>
            <span className="step-num">04</span>
            <h3>Consegna Galleria in 2 Mesi</h3>
            <p>
              Tutti gli scatti in alta risoluzione post-prodotti con cura vengono consegnati entro circa 2 mesi
              tramite una galleria privata online protetta da password, pronta per download e condivisione.
            </p>
          </S.FlowRow>
        </S.FlowSurface>
      </S.FlowSection>

      {/* 3 Pillars Flat Surface */}
      <S.HighlightsSection>
        <S.HighlightsSurface>
          <S.HighlightCol>
            <h3>Due fotografi dedicati</h3>
            <p>
              Per garantire una copertura completa di ogni momento da due prospettive differenti,
              senza perdere le reazioni degli invitati.
            </p>
          </S.HighlightCol>
          <S.HighlightCol>
            <h3>Tutto il giorno con voi</h3>
            <p>
              Nessun limite orario rigido: dai dettagli dei preparativi mattutini fino ai balli scatenati
              a notte fonda.
            </p>
          </S.HighlightCol>
          <S.HighlightCol>
            <h3>Nessuna posa impostata</h3>
            <p>
              Vi godrete la festa e gli amici. La sessione di coppia dura solo 20 minuti al tramonto,
              rilassata e spontanea.
            </p>
          </S.HighlightCol>
        </S.HighlightsSurface>
      </S.HighlightsSection>

      {/* FAQ Accordion */}
      <S.FaqSection>
        <SectionHeader
          label="FAQ"
          title="Domande frequenti"
          description="Tutto ciò che dovete sapere prima di confermare il vostro servizio fotografico."
        />

        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <S.FaqItem key={index} $open={isOpen}>
              <div
                className="question-bar"
                onClick={() => setOpenFaq(isOpen ? null : index)}
              >
                <h3>{faq.q}</h3>
                <FiChevronDown className="icon" />
              </div>
              <div className="answer">
                <p>{faq.a}</p>
              </div>
            </S.FaqItem>
          );
        })}
      </S.FaqSection>

      <S.CtaSection>
        <h2>Volete raccontarmi del vostro giorno?</h2>
        <p>
          Le date per la stagione estiva e autunnale si esauriscono rapidamente. Scrivetemi per
          conoscere la disponibilità e ricevere il listino prezzi.
        </p>
        <Link href="/contatti/">Richiedi disponibilità data</Link>
      </S.CtaSection>
    </S.PageWrapper>
  );
};
