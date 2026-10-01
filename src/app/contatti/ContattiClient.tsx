'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.25rem 4rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 4.5rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 2px;
  padding: 3rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.75rem 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textDark};
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    background: ${({ theme }) => theme.colors.bgLight};
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
    border-radius: 2px;
    font-family: inherit;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textDark};
    transition: all ${({ theme }) => theme.transitions.default};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      background: ${({ theme }) => theme.colors.white};
      box-shadow: 0 0 0 2px rgba(140, 115, 85, 0.15);
    }
  }

  textarea {
    resize: vertical;
    min-height: 140px;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.1rem 2rem;
  background: ${({ theme }) => theme.colors.textDark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  margin-top: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;

  .check-icon {
    font-size: 3rem;
    color: #27ae60;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
    max-width: 480px;
    margin: 0 auto 1.5rem;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCardAlt};
  border-radius: 2px;
  padding: 2.5rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background: ${({ theme }) => theme.colors.accent};
      margin-top: 0.5rem;
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  .icon {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-top: 0.2rem;
    flex-shrink: 0;
  }

  .text {
    h4 {
      font-size: 0.95rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textDark};
      margin-bottom: 0.2rem;
    }
    p,
    a {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textMuted};
      line-height: 1.5;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const SocialDirectGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex: 1;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors.bgCard};
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
    border-radius: 2px;
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textDark};
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.accent};
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
    // Simulate successful form handling
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <SectionHeader
        subtitle="Contattaci"
        title="Parliamo del Vostro Giorno Speciale"
        description="Scriveteci per richiedere la disponibilità della vostra data, un preventivo su misura o per fissare un appuntamento in studio a Sanremo."
      />

      <ContactGrid>
        {/* Form */}
        <FormCard>
          {submitted ? (
            <SuccessMessage>
              <FiCheckCircle className="check-icon" />
              <h3>Grazie per averci scritto!</h3>
              <p>
                Abbiamo ricevuto il vostro messaggio. Simone e il team di Unique Photography vi
                risponderanno entro 24 ore con la disponibilità e i dettagli informativi.
              </p>
              <SubmitButton type="button" onClick={() => setSubmitted(false)}>
                Invia un altro messaggio
              </SubmitButton>
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <label htmlFor="nome">Nome & Cognome *</label>
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
                  <label htmlFor="telefono">Telefono / WhatsApp</label>
                  <input
                    type="tel"
                    id="telefono"
                    placeholder="+39 340 1234567"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="servizio">Tipo di Servizio *</label>
                  <select
                    id="servizio"
                    value={formData.servizio}
                    onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
                  >
                    <option value="matrimonio">Fotografia di Matrimonio</option>
                    <option value="engagement">Coppie & Engagement</option>
                    <option value="ritratto">Ritratti in Studio a Sanremo</option>
                    <option value="famiglia">Famiglia & Maternità</option>
                    <option value="interior">Interior & Real Estate</option>
                    <option value="altro">Altro evento speciale</option>
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
                  <label htmlFor="location">Location / Città delle nozze</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Es. Sanremo, Villa Ormond, Ospedaletti"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label htmlFor="messaggio">Raccontateci del vostro evento *</label>
                <textarea
                  id="messaggio"
                  required
                  placeholder="Parlateci di voi, del tipo di cerimonia che state organizzando e di ogni dettaglio che vi piacerebbe condividere..."
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                />
              </FormGroup>

              <SubmitButton type="submit">
                Invia la richiesta <FiSend />
              </SubmitButton>
            </Form>
          )}
        </FormCard>

        {/* Sidebar Info */}
        <InfoColumn>
          <InfoCard>
            <h3>Recapiti dello Studio</h3>

            <InfoItem>
              <FiMapPin className="icon" />
              <div className="text">
                <h4>Studio Fotografico</h4>
                <p>
                  Unique Photography di Simone Bonfiglio
                  <br />
                  {siteConfig.location.city} ({siteConfig.location.province}), Riviera Ligure
                </p>
              </div>
            </InfoItem>

            <InfoItem>
              <FiMail className="icon" />
              <div className="text">
                <h4>Email Diretta</h4>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </InfoItem>

            <InfoItem>
              <FiClock className="icon" />
              <div className="text">
                <h4>Orari & Ricevimento</h4>
                <p>
                  Riceviamo in studio su appuntamento dal lunedì al sabato. Disponibili anche per
                  consulenze video via Google Meet / Zoom.
                </p>
              </div>
            </InfoItem>

            <SocialDirectGroup>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://wa.me/393400000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </SocialDirectGroup>
          </InfoCard>
        </InfoColumn>
      </ContactGrid>
    </PageWrapper>
  );
};
