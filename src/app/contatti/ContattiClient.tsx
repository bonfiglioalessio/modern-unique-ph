'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';
import { ContactFormData } from '@/types/contact';
import { createContactMailtoUrl } from '@/utils/mailto';
import { FiCheck, FiMail } from 'react-icons/fi';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import * as S from './ContattiClient.styles';

const initialFormData: ContactFormData = {
  nome: '',
  email: '',
  telefono: '',
  servizio: 'matrimonio',
  data: '',
  location: '',
  messaggio: '',
};

export const ContattiClient: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = createContactMailtoUrl(formData, siteConfig.email);
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialFormData);
  };

  return (
    <S.PageWrapper>
      <SectionHeader
        label="Contatti"
        title="Parliamo del vostro giorno speciale"
        description="Scriveteci per verificare la disponibilità della vostra data, richiedere un preventivo o fissare un incontro in studio a Sanremo."
      />

      <S.ContactGrid>
        <S.FormCard>
          {submitted ? (
            <S.SuccessMessage>
              <FiCheck className="check-icon" />
              <h3>Richiesta pronta per l’invio</h3>
              <p>
                Abbiamo aperto il tuo client email con tutti i dettagli precompilati per{' '}
                <strong>{siteConfig.email}</strong>.
              </p>
              <S.ButtonGroup>
                <S.SubmitButton
                  as="a"
                  href={createContactMailtoUrl(formData, siteConfig.email)}
                  style={{ textDecoration: 'none' }}
                >
                  <FiMail style={{ marginRight: '0.45rem' }} /> Riapri client email
                </S.SubmitButton>
                <S.SecondaryButton type="button" onClick={handleReset}>
                  Compila un’altra richiesta
                </S.SecondaryButton>
              </S.ButtonGroup>
            </S.SuccessMessage>
          ) : (
            <S.Form onSubmit={handleSubmit}>
              <S.FormRow>
                <S.FormGroup>
                  <label htmlFor="nome">Nome e cognome *</label>
                  <input
                    type="text"
                    id="nome"
                    required
                    placeholder="Mario Rossi"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="mario@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </S.FormGroup>
              </S.FormRow>

              <S.FormRow>
                <S.FormGroup>
                  <label htmlFor="telefono">Telefono</label>
                  <input
                    type="tel"
                    id="telefono"
                    placeholder="+39 340 1234567"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="servizio">Tipo di servizio *</label>
                  <select
                    id="servizio"
                    value={formData.servizio}
                    onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
                  >
                    <option value="matrimonio">Fotografia di matrimonio</option>
                    <option value="engagement">Coppie ed engagement</option>
                    <option value="studio">Ritratti in studio a Sanremo</option>
                    <option value="famiglia">Famiglia e maternità</option>
                    <option value="interior">Interior e real estate</option>
                    <option value="altro">Altro servizio fotografico</option>
                  </select>
                </S.FormGroup>
              </S.FormRow>

              <S.FormRow>
                <S.FormGroup>
                  <label htmlFor="data">Data prevista (se definita)</label>
                  <input
                    type="date"
                    id="data"
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="location">Luogo o location dell’evento</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Es. Sanremo, Bordighera, Imperia"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </S.FormGroup>
              </S.FormRow>

              <S.FormGroup>
                <label htmlFor="messaggio">Raccontateci del vostro matrimonio o evento *</label>
                <textarea
                  id="messaggio"
                  required
                  placeholder="Scriveteci del vostro giorno, dello stile della cerimonia o di qualsiasi dettaglio che desiderate condividere..."
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                />
              </S.FormGroup>

              <S.SubmitButton type="submit">Invia richiesta</S.SubmitButton>
            </S.Form>
          )}
        </S.FormCard>

        <S.InfoCard>
          <h3>Recapiti dello studio</h3>

          <S.InfoItem>
            <h4>Studio fotografico</h4>
            <p>
              Unique Photography di Simone Bonfiglio
              <br />
              {siteConfig.location.city} ({siteConfig.location.province}), Riviera Ligure
            </p>
          </S.InfoItem>

          <S.InfoItem>
            <h4>Email</h4>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </S.InfoItem>

          <S.InfoItem>
            <h4>Orari e appuntamenti</h4>
            <p>
              Riceviamo in studio su appuntamento dal lunedì al sabato. Disponibili anche per
              consulenze video via Google Meet o Zoom.
            </p>
          </S.InfoItem>

          <S.QuickContacts>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color="#E1306C" /> Instagram
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF color="#1877F2" /> Facebook
            </a>
          </S.QuickContacts>
        </S.InfoCard>
      </S.ContactGrid>
    </S.PageWrapper>
  );
};
