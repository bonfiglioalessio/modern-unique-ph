'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { siteConfig } from '@/data/site';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavProps {
  scrolled: boolean;
}

const HeaderWrapper = styled.header<NavProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.default};
  background: ${({ scrolled, theme }) =>
    scrolled ? 'rgba(250, 248, 245, 0.95)' : 'rgba(250, 248, 245, 0.85)'};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid
    ${({ scrolled, theme }) => (scrolled ? theme.colors.borderLight : 'transparent')};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none'};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .logo-img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled(Link)<{ $active: boolean }>`
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.textDark};
  position: relative;
  padding: 0.25rem 0;
  transition: color ${({ theme }) => theme.transitions.default};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    &::after {
      width: 100%;
    }
  }
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.textDark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.825rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileToggle = styled.button`
  display: none;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.textDark};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background: ${({ theme }) => theme.colors.bgLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  padding: 2rem;
  transition: all ${({ theme }) => theme.transitions.default};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  z-index: 999;
`;

const MobileNavItem = styled(Link)<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.75rem;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.textDark};
  letter-spacing: 0.02em;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <HeaderWrapper scrolled={scrolled}>
      <NavContainer>
        <LogoLink href="/" aria-label="Unique Photography Home">
          <Image
            src="/logo_black.png"
            alt={siteConfig.name}
            width={160}
            height={44}
            className="logo-img"
            priority
          />
        </LogoLink>

        <NavList>
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <NavItem key={link.href} href={link.href} $active={isActive}>
                {link.label}
              </NavItem>
            );
          })}
        </NavList>

        <CtaButton href="/contatti/">Prenota la data</CtaButton>

        <MobileToggle
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </MobileToggle>
      </NavContainer>

      <MobileMenu $isOpen={isOpen}>
        {siteConfig.navLinks.map((link) => {
          const isActive =
            link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
          return (
            <MobileNavItem key={link.href} href={link.href} $active={isActive}>
              {link.label}
            </MobileNavItem>
          );
        })}
        <CtaButton
          href="/contatti/"
          style={{ display: 'inline-flex', marginTop: '1rem', padding: '0.85rem 2rem' }}
        >
          Prenota la data
        </CtaButton>
      </MobileMenu>
    </HeaderWrapper>
  );
};
