import { ContactFormData } from '@/types/contact';

export const SERVICE_LABELS: Record<string, string> = {
  matrimonio: 'Servizio Matrimonio Completo',
  engagement: 'Coppie & Engagement',
  studio: 'Ritratti in Studio a Sanremo',
  famiglia: 'Famiglia & Maternità',
  interior: 'Interior & Real Estate',
  altro: 'Altro / Consulenza su Misura',
};

export function createContactMailtoUrl(formData: ContactFormData, recipientEmail: string): string {
  const serviceLabel = SERVICE_LABELS[formData.servizio] || formData.servizio;
  const subject = `Richiesta Preventivo - ${formData.nome || 'Nuovo contatto'} (${serviceLabel})`;

  const bodyText = [
    `Ciao Simone,`,
    ``,
    `Vorrei richiedere informazioni e disponibilità per un servizio fotografico.`,
    ``,
    `--- DETTAGLI RICHIESTA ---`,
    `Nome e Cognome: ${formData.nome}`,
    `Email: ${formData.email}`,
    `Telefono: ${formData.telefono || 'Non specificato'}`,
    `Tipologia servizio: ${serviceLabel}`,
    `Data evento indicativa: ${formData.data || 'Da concordare'}`,
    `Location / Città: ${formData.location || 'Da concordare'}`,
    ``,
    `--- NOTE / MESSAGGIO ---`,
    formData.messaggio || 'Nessun messaggio aggiuntivo.',
    ``,
    `--------------------------`,
    `Inviato dal form contatti del sito web Unique Photography`,
  ].join('\n');

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
}
