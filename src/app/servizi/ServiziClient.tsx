'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { servicesData } from '@/data/services';
import { FiArrowRight } from 'react-icons/fi';
import * as S from './ServiziClient.styles';

export const ServiziClient: React.FC = () => {
  return (
    <S.PageWrapper>
      <SectionHeader
        label="Servizi Fotografici"
        title="Fotografia per ogni capitolo importante"
        description="Dai matrimoni in Liguria alle sessioni di coppia, famiglia, interni e ritratti in studio a Sanremo: immagini autentiche e senza forzature."
      />

      <S.ServicesList>
        {servicesData.map((service, index) => {
          const isReverse = index % 2 === 1;
          return (
            <S.ServiceRow key={service.id} id={service.id} $reverse={isReverse}>
              <S.ServiceImageWrapper>
                <img src={service.image} alt={service.title} loading="lazy" />
              </S.ServiceImageWrapper>

              <S.ServiceContent>
                <span className="subtitle">{service.subtitle}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contatti/" className="cta-link">
                  Richiedi informazioni e disponibilità <FiArrowRight />
                </Link>
              </S.ServiceContent>
            </S.ServiceRow>
          );
        })}
      </S.ServicesList>

      {/* FAQ & Trasparenza */}
      <S.FaqSection>
        <SectionHeader
          label="FAQ & Trasparenza"
          title="Domande frequenti e dettagli utili"
          description="Tutto ciò che c’è da sapere su tempi di consegna, prenotazione della data, videografi e album."
        />

        <S.FaqGrid>
          <S.FaqCard>
            <h3>Dopo quanto tempo le foto ci saranno consegnate?</h3>
            <p>
              Tutte le fotografie in alta risoluzione saranno consegnate entro circa 2 mesi tramite
              galleria privata online protetta da password, pronte per essere scaricate, condivise e stampate.
            </p>
          </S.FaqCard>

          <S.FaqCard>
            <h3>Fai anche video? Mi consigli un videografo?</h3>
            <p>
              No, non realizzo video perché scelgo di dedicarmi al 100% alla fotografia. Collaboro però
              regolarmente con videografi professionisti di fiducia e ve ne consiglierò volentieri dopo la prenotazione del servizio.
            </p>
          </S.FaqCard>

          <S.FaqCard>
            <h3>Cosa dobbiamo fare per prenotare la data?</h3>
            <p>
              Scrivetemi tramite la pagina contatti indicando data e location. Vi invierò il PDF informativo con i prezzi proposti.
              Per bloccare ufficialmente la data, firmiamo insieme un contratto di tutela e viene versato un acconto.
            </p>
          </S.FaqCard>

          <S.FaqCard>
            <h3>Siamo obbligati ad acquistare l’album subito?</h3>
            <p>
              Assolutamente no. Sarete sempre liberi di stampare i file dove preferite. Se desiderate un album artigianale italiano
              curato nei dettagli, potrete ordinarlo e personalizzarlo anche dopo il matrimonio senza alcun vincolo iniziale.
            </p>
          </S.FaqCard>
        </S.FaqGrid>
      </S.FaqSection>
    </S.PageWrapper>
  );
};
