'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { FiCheck, FiArrowRight, FiPlus, FiMinus, FiClock, FiUsers, FiHeart, FiVideo } from 'react-icons/fi';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 4rem;
  }
`;

const HeroBanner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 5rem;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);

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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%);
    display: flex;
    align-items: flex-end;
    padding: 3rem;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 1.5rem;
    }

    h2 {
      font-size: clamp(1.8rem, 3.5vw, 3rem);
      max-width: 700px;
    }
  }
`;

const FlowSection = styled.div`
  margin-bottom: 6rem;
`;

const FlowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }
`;

const FlowCard = styled.div`
  padding: 2.5rem 1.75rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 2px;
  text-align: center;
  position: relative;

  .step-num {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accentLight};
    line-height: 1;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
    margin: 0;
  }
`;

const HighlightsBox = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 5rem 3rem;
  border-radius: 2px;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 1.5rem;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HighlightItem = styled.div`
  .icon-wrap {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accentLight};
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.35rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textLightMuted};
  }
`;

// FAQ Section
const FaqSection = styled.div`
  max-width: 850px;
  margin: 0 auto 6rem;
`;

const FaqItem = styled.div<{ $open: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 1.5rem 0;

  .question-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 1rem;

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ $open, theme }) => ($open ? theme.colors.accent : theme.colors.textDark)};
      transition: color ${({ theme }) => theme.transitions.default};
    }

    .icon {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.accent};
      flex-shrink: 0;
    }
  }

  .answer {
    padding-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textMuted};
    display: ${({ $open }) => ($open ? 'block' : 'none')};
  }
`;

const ActionBanner = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.bgCardAlt};
  border-radius: 2px;

  h2 {
    font-size: clamp(2rem, 3.5vw, 2.75rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 650px;
    margin: 0 auto 2.5rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2.5rem;
    background: ${({ theme }) => theme.colors.textDark};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }
  }
`;

const faqs = [
  {
    q: 'Con quanto anticipo dobbiamo prenotare il servizio fotografico?',
    a: 'Per le date tra maggio e ottobre consigliamo di contattarci con circa 6-12 mesi di anticipo. Accettiamo un numero limitato di matrimoni ogni anno per garantire sempre la massima qualità e cura nel montaggio.',
  },
  {
    q: 'Come lavorate durante la giornata? Dobbiamo metterci in posa?',
    a: 'Assolutamente no! Il nostro stile è documentario: sarete liberi di godervi ogni momento con i vostri cari. La breve sessione di coppia (circa 20-30 minuti, preferibilmente con la luce calda del tramonto) sarà un momento di relax solo per voi due, con una guida discreta e naturale.',
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
    q: 'Che cos’è il servizio "Real Time Emotions"?',
    a: 'È la nostra firma più emozionante: durante la cena montiamo uno slideshow con le migliori fotografie scattate durante la giornata e lo proiettiamo su maxischermo prima del taglio della torta. L’emozione in sala è sempre indescrivibile!',
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
        subtitle="Fotografo di Matrimonio a Sanremo & Liguria"
        title="Il Vostro Matrimonio: Un Racconto Emozionante"
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
          subtitle="Il Flusso dell’Evento"
          title="Come si svolge la giornata"
          description="Siamo al vostro fianco con discrezione dall’alba dei preparativi fino all’ultimo ballo."
        />
        <FlowGrid>
          <FlowCard>
            <div className="step-num">01</div>
            <h3>I Preparativi</h3>
            <p>
              Documentiamo l’attesa, i dettagli dell’abito, gli sguardi tesi e i sorrisi dei testimoni
              e dei genitori a casa dello sposo e della sposa.
            </p>
          </FlowCard>

          <FlowCard>
            <div className="step-num">02</div>
            <h3>La Cerimonia</h3>
            <p>
              L’ingresso commosso, lo scambio delle fedi, le promesse e il lancio del riso:
              catturiamo ogni istante da molteplici prospettive.
            </p>
          </FlowCard>

          <FlowCard>
            <div className="step-num">03</div>
            <h3>Ritratti al Tramonto</h3>
            <p>
              Basta mezz’ora: vi lasciamo respirare e passeggiare con la luce migliore, senza
              pose rigide, prima di tornare subito dagli invitati.
            </p>
          </FlowCard>

          <FlowCard>
            <div className="step-num">04</div>
            <h3>Party & Emotions</h3>
            <p>
              I brindisi, la proiezione dello slideshow Real Time Emotions e i balli scatenati: la
              festa continua fino a tarda notte.
            </p>
          </FlowCard>
        </FlowGrid>
      </FlowSection>

      {/* Highlights Box */}
      <HighlightsBox>
        <SectionHeader
          light
          subtitle="Il Valore del Nostro Servizio"
          title="Perché gli sposi scelgono Unique Photography"
          description="Un’attenzione maniacale per i dettagli tecnici ed umani per farvi vivere il matrimonio in totale relax."
        />
        <HighlightsGrid>
          <HighlightItem>
            <div className="icon-wrap">
              <FiUsers />
            </div>
            <h3>Due Fotografi Sempre</h3>
            <p>
              Non lasciamo nulla al caso. Due sguardi sincronizzati consentono di essere sempre al
              posto giusto nel momento giusto, senza mai risultare invadenti.
            </p>
          </HighlightItem>

          <HighlightItem>
            <div className="icon-wrap">
              <FiHeart />
            </div>
            <h3>Real Time Emotions</h3>
            <p>
              Rivivete i brividi del &apos;Sì&apos; mentre siete a tavola: una sorpresa per voi e per tutti gli
              ospiti che ricorderete per sempre.
            </p>
          </HighlightItem>

          <HighlightItem>
            <div className="icon-wrap">
              <FiClock />
            </div>
            <h3>Consegne Rapide & Cloud</h3>
            <p>
              Niente attese infinite: riceverete un’anteprima fotografica nei giorni successivi e la
              galleria completa in alta definizione in poche settimane.
            </p>
          </HighlightItem>
        </HighlightsGrid>
      </HighlightsBox>

      {/* Domande Frequenti (FAQ) */}
      <FaqSection>
        <SectionHeader
          subtitle="Dubbi & Domande"
          title="Domande Frequenti (FAQ)"
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
                <div className="icon">{isOpen ? <FiMinus /> : <FiPlus />}</div>
              </div>
              <div className="answer">{faq.a}</div>
            </FaqItem>
          );
        })}
      </FaqSection>

      {/* CTA Box */}
      <ActionBanner>
        <h2>Stai organizzando il tuo matrimonio?</h2>
        <p>
          Controlla se la tua data è ancora disponibile nel nostro calendario e ricevi la brochure
          completa con i pacchetti e i prezzi.
        </p>
        <Link href="/contatti/">
          Richiedi Preventivo & Disponibilità <FiArrowRight />
        </Link>
      </ActionBanner>
    </PageWrapper>
  );
};
