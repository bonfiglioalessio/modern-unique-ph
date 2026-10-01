export interface ContactFormData {
  nome: string;
  email: string;
  telefono: string;
  servizio: string;
  data: string;
  location: string;
  messaggio: string;
}

export type ServiceTypeKey = 'matrimonio' | 'engagement' | 'studio' | 'famiglia' | 'interior' | 'altro';
