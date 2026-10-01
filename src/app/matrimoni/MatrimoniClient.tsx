'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { FiChevronDown } from 'react-icons/fi';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

const HeroBanner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  margin-bottom: 4.5rem;
  background: ${({ theme }) => theme.colors.cardSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 16 / 9;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1) 100%);
    display: flex;
    align-items: flex-end;
    padding: 2.5rem;
    color: #ffffff;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 1.25rem;
    }

    h2 {
      font-size: clamp(1.6rem, 3vw, 2.5rem);
      max-width: 650px;
    }
  }
`;

// Flow (Single grouped surface)
const FlowSection = styled.div`
  margin-bottom: 5rem;
`;

const FlowSurface = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 0 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

const FlowRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1.2fr 2fr;
  padding: 1.75rem 0;
  gap: 1.5rem;
  align-items: baseline;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  .step-num {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    font-variant-numeric: tabular-nums;
  }

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
`;

// Highlights (Single surface)
const HighlightsSection = styled.div`
  margin-bottom: 5rem;
`;

const HighlightsSurface = styled.div`
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 2.5rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 1.75rem 1.25rem;
  }
`;

const HighlightCol = styled.div`
  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

// FAQ
const FaqSection = styled.div`
  max-width: 820px;
  margin: 0 auto 5rem;
`;

const FaqItem = styled.div<{ $open: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 1.25rem 0;

  .question-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 1rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      transition: color ${({ theme }) => theme.transitions.default};
    }

    .icon {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.textMuted};
      transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
      transition: transform ${({ theme }) => theme.transitions.default};
      flex-shrink: 0;
    }
  }

  .answer {
    padding-top: 0.75rem;
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textSecondary};
    display: ${({ $open }) => ($open ? 'block' : 'none')};
  }
`;

const CtaSection = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto;

  h2 {
    font-size: clamp(1.85rem, 3vw, 2.3rem);
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
    margin-bottom: 1.75rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    padding: 0.85rem 1.75rem;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: ${({ theme }) => theme.radius.md};
    transition: background-color ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
    }
  }
`;

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
    <PageWrapper>
      <SectionHeader
        label="Matrimoni"
        title="Il vostro matrimonio: un racconto sincero"
        description="Non semplici fotografie, ma la cronaca sincera dei vostri sentimenti, delle lacrime di gioia e della festa più bella della vostra vita."
      />

      <HeroBanner>
        <img
          src="https://images.ctfassets.net/1qgv2qxuxgqc/4UQPITqAu9CuMQKZGpfx32/86ca449ad1f716f7a4d17708277f5c2a/unique-315.jpg"
          alt="Fotografo matrimonio Liguria tramonto"
        />
        <div className="overlay">
          <h2>Scatti veri, nessun copione da recitare. Solo voi.</h2>
        </div>
      </HeroBanner>

      {/* Il Flusso della Giornata */}
      <FlowSection>
        <SectionHeader
          label="Come lavoro"
          title="Come funziona il percorso insieme"
          description="Dalla prima richiesta fino alla consegna della vostra galleria online."
        />
        <FlowSurface>
          <FlowRow>
            <div className="step-num">01</div>
            <h3>Contatto & Guida Prezzi</h3>
            <p>
              Scrivetemi specificando i vostri nomi, la data e la location. Vi invierò un PDF con maggiori
              informazioni su come lavoro e con tutti i dettagli dei prezzi proposti.
            </p>
          </FlowRow>
          <FlowRow>
            <div className="step-num">02</div>
            <h3>Videochiamata & Contratto</h3>
            <p>
              Fissiamo una videochiamata conoscitiva per parlare dei vostri desideri. Per bloccare ufficialmente la data,
              firmiamo il contratto trasparente di tutela e viene versato l’acconto.
            </p>
          </FlowRow>
          <FlowRow>
            <div className="step-num">03</div>
            <h3>Il Grande Giorno</h3>
            <p>
              Godetevi la giornata con le persone a cui volete bene. Presenza discreta per tutta la durata dell’evento,
              senza interrompere la spontaneità dei vostri festeggiamenti.
            </p>
          </FlowRow>
          <FlowRow>
            <div className="step-num">04</div>
            <h3>Consegna Galleria in 2 Mesi</h3>
            <p>
              Ricevete via email l’accesso alla vostra galleria online privata con tutti gli scatti in alta risoluzione
              accuratamente elaborati, pronti da scaricare, condividere o stampare.
            </p>
          </FlowRow>
        </FlowSurface>
      </FlowSection>

      {/* Punti di forza */}
      <HighlightsSection>
        <HighlightsSurface>
          <HighlightCol>
            <h3>Spontaneità pura</h3>
            <p>
              Zero pose noiose o sorrisi a comando. Solo fotografie vere che raccontano le emozioni autentiche
              della giornata.
            </p>
          </HighlightCol>
          <HighlightCol>
            <h3>Presenza discreta</h3>
            <p>
              Al vostro fianco per guidarvi con serenità ed empatia, senza mai risultare invadenti con voi o con gli ospiti.
            </p>
          </HighlightCol>
          <HighlightCol>
            <h3>Consegna in ~2 mesi</h3>
            <p>
              Tutti i file in alta risoluzione accuratamente post-prodotti e caricati su galleria online protetta,
              senza attese infinite.
            </p>
          </HighlightCol>
        </HighlightsSurface>
      </HighlightsSection>

      {/* FAQ */}
      <FaqSection>
        <SectionHeader
          label="FAQ"
          title="Domande frequenti"
          description="Tutto quello che è utile sapere prima di scegliere il vostro fotografo di nozze."
        />
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <FaqItem key={index} $open={isOpen}>
              <div
                className="question-bar"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                role="button"
                tabIndex={0}
              >
                <h3>{faq.q}</h3>
                <div className="icon">
                  <FiChevronDown />
                </div>
              </div>
              <div className="answer">{faq.a}</div>
            </FaqItem>
          );
        })}
      </FaqSection>

      {/* CTA */}
      <CtaSection>
        <h2>Riuscite a immaginarvi nelle mie foto?</h2>
        <p>
          Vi piacerebbero ricordi come questi? Scrivetemi della data e del luogo del matrimonio:
          vi invierò un PDF con maggiori informazioni e con tutti i dettagli dei prezzi proposti :)
        </p>
        <Link href="/contatti/">Richiedi disponibilità e guida prezzi</Link>
      </CtaSection>
    </PageWrapper>
  );
};
