'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useScrolled, useLockedBody } from '@/hooks';
import * as S from './Navbar.styles';

export const Navbar: React.FC = () => {
  const scrolled = useScrolled(20);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});
  const desktopNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Clean body scroll lock via custom hook
  useLockedBody(isOpen);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <S.HeaderWrapper $scrolled={scrolled}>
      <S.NavContainer>
        <S.LogoBrand href="/" aria-label="Simone Bonfiglio Fotografo Home">
          <span className="brand-name">Simone Bonfiglio</span>
          <span className="brand-sub">Fotografo • Sanremo</span>
        </S.LogoBrand>

        {/* Desktop Nav */}
        <S.NavList ref={desktopNavRef}>
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            const hasSub = Boolean(link.subLinks && link.subLinks.length > 0);
            const isDropdownOpen = activeDropdown === link.label;

            if (hasSub && link.subLinks) {
              return (
                <S.DropdownWrapper
                  key={link.href}
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <S.DropdownTriggerButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(link.label);
                    }}
                    $active={isActive}
                    $isOpen={isDropdownOpen}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <FiChevronDown className="chevron-icon" />
                  </S.DropdownTriggerButton>
                  <S.DropdownMenu
                    $isOpen={isDropdownOpen}
                    role="menu"
                    aria-label={`Sottomenu ${link.label}`}
                  >
                    {link.subLinks.map((sub) => (
                      <S.DropdownItem
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        role="menuitem"
                      >
                        {sub.label}
                      </S.DropdownItem>
                    ))}
                  </S.DropdownMenu>
                </S.DropdownWrapper>
              );
            }

            return (
              <S.NavItemLink key={link.href} href={link.href} $active={isActive}>
                {link.label}
              </S.NavItemLink>
            );
          })}
        </S.NavList>

        <S.CtaButton href="/contatti/">Prenota Studio / Data</S.CtaButton>

        {/* Mobile Toggle */}
        <S.MobileToggle
          onClick={() => setIsOpen(true)}
          aria-label="Apri menu di navigazione"
          aria-expanded={isOpen}
        >
          <FiMenu />
        </S.MobileToggle>
      </S.NavContainer>

      {/* Mobile Drawer */}
      <S.MobileMenuDrawer $isOpen={isOpen} aria-hidden={!isOpen}>
        <S.MobileHeader>
          <S.LogoBrand
            href="/"
            onClick={() => setIsOpen(false)}
            aria-label="Simone Bonfiglio Fotografo Home"
          >
            <span className="brand-name">Simone Bonfiglio</span>
            <span className="brand-sub">Fotografo • Sanremo</span>
          </S.LogoBrand>
          <S.MobileToggle
            onClick={() => setIsOpen(false)}
            aria-label="Chiudi menu di navigazione"
          >
            <FiX />
          </S.MobileToggle>
        </S.MobileHeader>

        <S.MobileNavBody>
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            const hasSub = Boolean(link.subLinks && link.subLinks.length > 0);
            const isAccordionOpen = !!openAccordions[link.label];

            if (hasSub && link.subLinks) {
              return (
                <S.MobileRow key={link.href}>
                  <S.MobileAccordionHeader $isOpen={isAccordionOpen}>
                    <Link
                      href={link.href}
                      className="main-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      className="toggle-btn"
                      onClick={() => toggleAccordion(link.label)}
                      aria-label={`Espandi sottomenu ${link.label}`}
                    >
                      <FiChevronDown />
                    </button>
                  </S.MobileAccordionHeader>

                  <S.MobileSubList $isOpen={isAccordionOpen}>
                    {link.subLinks.map((sub) => (
                      <S.MobileSubLink
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </S.MobileSubLink>
                    ))}
                  </S.MobileSubList>
                </S.MobileRow>
              );
            }

            return (
              <S.MobileRow key={link.href}>
                <S.MobileSimpleLink
                  href={link.href}
                  $active={isActive}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </S.MobileSimpleLink>
              </S.MobileRow>
            );
          })}

          <S.MobileBottomContact>
            <span className="contact-title">Parla con Simone</span>
            <div className="quick-links">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://wa.me/393400000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
            <Link
              href="/contatti/"
              className="cta-full"
              onClick={() => setIsOpen(false)}
            >
              Richiedi Disponibilità Data
            </Link>
          </S.MobileBottomContact>
        </S.MobileNavBody>
      </S.MobileMenuDrawer>
    </S.HeaderWrapper>
  );
};
