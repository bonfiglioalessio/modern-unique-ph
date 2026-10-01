'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';
import { FiCheck } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3.5rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

// Flat Form Card (Single Surface)
const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  /* Full Flat Input (Pattern from guidelines) */
  input,
  select,
  textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    background: ${({ theme }) => theme.colors.cardSecondary};
    border: none;
    border-radius: ${({ theme }) => theme.radius.md};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color ${({ theme }) => theme.transitions.default};

    &:focus {
      outline: none;
      background: #EAE6DF;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.75rem;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: background-color ${({ theme }) => theme.transitions.default};
  margin-top: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2.5rem 1rem;

  .check-icon {
    font-size: 2.5rem;
    color: #10b981;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    max-width: 440px;
    margin: 0 auto 1.5rem;
  }
`;

// Sidebar Info (Single Surface)
const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.25rem;
  }

  p,
  a {
    font-size: 0.925rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;
    margin: 0;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const QuickContacts = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;

  a {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.75rem;
    background: ${({ theme }) => theme.colors.cardSecondary};
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    transition: background-color ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accentLight};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const ContattiClient: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    servizio: 'matrimonio',
    data: '',
    location: '',
    messaggio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <SectionHeader
        label="Contatti"
        title="Parliamo del vostro giorno speciale"
        description="Scriveteci per verificare la disponibilità della vostra data, richiedere un preventivo o fissare un incontro in studio a Sanremo."
      />

      <ContactGrid>
        <FormCard>
          {submitted ? (
            <SuccessMessage>
              <FiCheck className="check-icon" />
              <h3>Richiesta inviata con successo</h3>
              <p>
                Abbiamo ricevuto il vostro messaggio. Simone e il team di Unique Photography vi
                risponderanno entro 24 ore.
              </p>
              <SubmitButton type="button" onClick={() => setSubmitted(false)}>
                Invia un altro messaggio
              </SubmitButton>
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <label htmlFor="nome">Nome e cognome *</label>
                  <input
                    type="text"
                    id="nome"
                    required
                    placeholder="Mario Rossi"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="mario@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <label htmlFor="telefono">Telefono o WhatsApp</label>
                  <input
                    type="tel"
                    id="telefono"
                    placeholder="+39 340 1234567"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="servizio">Tipo di servizio *</label>
                  <select
                    id="servizio"
                    value={formData.servizio}
                    onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
                  >
                    <option value="matrimonio">Fotografia di matrimonio</option>
                    <option value="engagement">Coppie ed engagement</option>
                    <option value="ritratto">Ritratti in studio a Sanremo</option>
                    <option value="famiglia">Famiglia e maternità</option>
                    <option value="interior">Interior e real estate</option>
                    <option value="altro">Altro servizio fotografico</option>
                  </select>
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <label htmlFor="data">Data prevista (se definita)</label>
                  <input
                    type="date"
                    id="data"
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="location">Luogo o location dell’evento</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Es. Sanremo, Bordighera, Imperia"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label htmlFor="messaggio">Raccontateci del vostro matrimonio o evento *</label>
                <textarea
                  id="messaggio"
                  required
                  placeholder="Scriveteci del vostro giorno, dello stile della cerimonia o di qualsiasi dettaglio che desiderate condividere..."
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                />
              </FormGroup>

              <SubmitButton type="submit">Invia richiesta</SubmitButton>
            </Form>
          )}
        </FormCard>

        <InfoCard>
          <h3>Recapiti dello studio</h3>

          <InfoItem>
            <h4>Studio fotografico</h4>
            <p>
              Unique Photography di Simone Bonfiglio
              <br />
              {siteConfig.location.city} ({siteConfig.location.province}), Riviera Ligure
            </p>
          </InfoItem>

          <InfoItem>
            <h4>Email</h4>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </InfoItem>

          <InfoItem>
            <h4>Orari e appuntamenti</h4>
            <p>
              Riceviamo in studio su appuntamento dal lunedì al sabato. Disponibili anche per
              consulenze video via Google Meet o Zoom.
            </p>
          </InfoItem>

          <QuickContacts>
            <a
              href="https://wa.me/393400000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp color="#25D366" /> WhatsApp
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color="#E1306C" /> Instagram
            </a>
          </QuickContacts>
        </InfoCard>
      </ContactGrid>
    </PageWrapper>
  );
};
