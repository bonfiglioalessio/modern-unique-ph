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
    q: 'Con quanto anticipo dobbiamo prenotare il servizio fotografico?',
    a: 'Per le date tra maggio e ottobre consigliamo di contattarci con circa 6-12 mesi di anticipo. Accettiamo un numero limitato di matrimoni ogni anno per garantire sempre la massima qualità nel reportage e nella post-produzione.',
  },
  {
    q: 'Come lavorate durante la giornata? Dobbiamo metterci in posa?',
    a: 'Assolutamente no. Il nostro stile è documentario: sarete liberi di godervi ogni momento con i vostri invitati. La breve sessione di coppia (circa 20-30 minuti, preferibilmente con la luce calda del tramonto) sarà un momento di relax solo per voi due, con una guida discreta e naturale.',
  },
  {
    q: 'Quante foto consegnate e in quanto tempo?',
    a: 'Consegniamo una selezione completa di circa 600-800 fotografie in altissima risoluzione, tutte post-prodotte una ad una con i nostri toni caldi e senza tempo. La galleria privata online è pronta in genere entro 6-8 settimane.',
  },
  {
    q: 'Lavorate sempre in due fotografi?',
    a: 'Sì, in tutti i nostri pacchetti standard sono presenti due fotografi professionisti per tutta la giornata. Questo garantisce di immortalare contemporaneamente la preparazione di entrambi gli sposi e punti di vista complementari durante cerimonia e festa.',
  },
  {
    q: 'Che cos’è il servizio Real Time Emotions?',
    a: 'È la nostra firma più emozionante: durante la cena montiamo uno slideshow con le migliori fotografie scattate durante la giornata e lo proiettiamo su maxischermo prima del taglio della torta.',
  },
  {
    q: 'Lavorate solo a Sanremo o vi spostate?',
    a: 'Lavoriamo in tutta la Liguria (Imperia, Sanremo, Savona, Genova, Cinque Terre), in Costa Azzurra (Mentone, Nizza, Monaco) e in tutta Italia per Destination Weddings.',
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
          label="Organizzazione"
          title="Come si svolge la giornata"
          description="Siamo al vostro fianco con discrezione dai preparativi mattutini fino alla conclusione della festa."
        />
        <FlowSurface>
          <FlowRow>
            <div className="step-num">01</div>
            <h3>I preparativi</h3>
            <p>
              Documentiamo l’attesa, i dettagli dell’abito, gli sguardi tesi e i sorrisi dei testimoni
              e dei genitori a casa dello sposo e della sposa.
            </p>
          </FlowRow>
          <FlowRow>
            <div className="step-num">02</div>
            <h3>La cerimonia</h3>
            <p>
              L’ingresso commosso, lo scambio delle fedi, le promesse e il lancio del riso:
              catturiamo ogni istante da molteplici prospettive.
            </p>
          </FlowRow>
          <FlowRow>
            <div className="step-num">03</div>
            <h3>Ritratti al tramonto</h3>
            <p>
              Basta mezz’ora: vi lasciamo respirare e passeggiare con la luce migliore, senza
              pose rigide, prima di tornare subito dagli invitati.
            </p>
          </FlowRow>
          <FlowRow>
            <div className="step-num">04</div>
            <h3>Ricevimento e festa</h3>
            <p>
              I brindisi, la proiezione dello slideshow Real Time Emotions e i balli scatenati: la
              festa continua fino a tarda notte.
            </p>
          </FlowRow>
        </FlowSurface>
      </FlowSection>

      {/* Punti di forza */}
      <HighlightsSection>
        <HighlightsSurface>
          <HighlightCol>
            <h3>Due fotografi sempre</h3>
            <p>
              Due sguardi sincronizzati consentono di essere sempre al posto giusto nel momento
              giusto, senza mai risultare invadenti.
            </p>
          </HighlightCol>
          <HighlightCol>
            <h3>Real Time Emotions</h3>
            <p>
              Rivivete i brividi del giorno mentre siete a tavola: una sorpresa per voi e per tutti gli
              ospiti che ricorderete per sempre.
            </p>
          </HighlightCol>
          <HighlightCol>
            <h3>Consegne rapide</h3>
            <p>
              Niente attese infinite: riceverete un’anteprima fotografica nei giorni successivi e la
              galleria completa in alta definizione in poche settimane.
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
        <h2>Stai organizzando il tuo matrimonio?</h2>
        <p>
          Controlla se la tua data è ancora disponibile nel nostro calendario e ricevi la brochure
          completa con i pacchetti e i prezzi.
        </p>
        <Link href="/contatti/">Richiedi disponibilità</Link>
      </CtaSection>
    </PageWrapper>
  );
};
