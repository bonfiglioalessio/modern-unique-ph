'use client';

import styled from 'styled-components';
import Link from 'next/link';

export interface HeaderWrapperProps {
  $scrolled: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 76px;
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: background-color ${({ theme }) => theme.transitions.default};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? 'rgba(250, 248, 245, 0.98)' : theme.colors.background};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.colors.divider : 'transparent')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

export const LogoBrand = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  text-decoration: none;

  .brand-name {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.35rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  .brand-sub {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accent};
    margin-top: 0.15rem;
  }

  &:hover .brand-name {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .brand-name {
      font-size: 1.15rem;
      letter-spacing: 0.08em;
    }
    .brand-sub {
      font-size: 0.58rem;
      letter-spacing: 0.2em;
    }
  }
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 76px;
`;

export const DropdownTriggerButton = styled.button<{ $active: boolean; $isOpen: boolean }>`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $active, $isOpen, theme }) =>
    $active || $isOpen ? theme.colors.accent : theme.colors.text};
  position: relative;
  padding: 0.4rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.default};

  .chevron-icon {
    font-size: 0.75rem;
    transition: transform ${({ theme }) => theme.transitions.default};
    color: ${({ $isOpen, theme }) =>
      $isOpen ? theme.colors.accent : theme.colors.textMuted};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    .chevron-icon {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const NavItemLink = styled(Link)<{ $active: boolean }>`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.text)};
  position: relative;
  padding: 0.4rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 68px;
  left: 50%;
  transform: translateX(-50%)
    translateY(${({ $isOpen }) => ($isOpen ? '0' : '6px')});
  min-width: 230px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0.5rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 0.6rem 0.9rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.cardSecondary};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileToggle = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  background: none;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const MobileMenuDrawer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  z-index: 2000;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.25s ease, visibility 0.25s ease;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 68px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const MobileNavBody = styled.div`
  padding: 1.25rem 1.25rem 3rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MobileRow = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 0.85rem 0;
`;

export const MobileAccordionHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .main-link {
    font-size: 1.15rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  .toggle-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform ${({ theme }) => theme.transitions.default};
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const MobileSubList = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 0.75rem;
  margin-top: 0.5rem;
`;

export const MobileSubLink = styled(Link)`
  padding: 0.55rem 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MobileSimpleLink = styled(Link)<{ $active: boolean }>`
  display: block;
  font-size: 1.15rem;
  font-weight: 500;
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.text)};
`;

export const MobileBottomContact = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .contact-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .quick-links {
    display: flex;
    gap: 0.75rem;

    a {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      background: ${({ theme }) => theme.colors.card};
      border-radius: ${({ theme }) => theme.radius.md};
      font-size: 0.85rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .cta-full {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.9rem;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;
