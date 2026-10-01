'use client';

import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.25rem 3.5rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3.5rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

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
      background: #eae6df;
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

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  margin-top: 0.5rem;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.9rem 1.75rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.cardSecondary};
    border-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 1.5rem 0.5rem;

  .check-icon {
    font-size: 2.75rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.25rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.65rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.75rem;
    max-width: 440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 340px;
  margin: 0 auto;
`;

export const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
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

export const QuickContacts = styled.div`
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
