"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          Carbon Crunch
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('pricing')}>Pricing</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink onClick={() => { setMobileMenuOpen(false); scrollToSection('home'); }}>Home</MobileNavLink>
            <MobileNavLink onClick={() => { setMobileMenuOpen(false); scrollToSection('features'); }}>Features</MobileNavLink>
            <MobileNavLink onClick={() => { setMobileMenuOpen(false); scrollToSection('about'); }}>About</MobileNavLink>
            <MobileNavLink onClick={() => { setMobileMenuOpen(false); scrollToSection('pricing'); }}>Pricing</MobileNavLink>
            <MobileNavLink onClick={() => { setMobileMenuOpen(false); scrollToSection('contact'); }}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

interface NavLinkProps {
  onClick?: () => void;
  active?: boolean;
  children: React.ReactNode;
}

function NavLink({ onClick, active, children }: NavLinkProps) {
  return (
    <button 
      onClick={onClick}
      className={`font-medium transition-colors ${
        active ? 'text-green-600' : 'text-gray-800 hover:text-green-600'
      }`}
    >
      {children}
    </button>
  );
}

interface MobileNavLinkProps {
  onClick?: () => void;
  active?: boolean;
  children: React.ReactNode;
}

function MobileNavLink({ onClick, active, children }: MobileNavLinkProps) {
  return (
    <button 
      onClick={onClick}
      className={`font-medium block py-2 transition-colors text-left ${
        active ? 'text-green-600' : 'text-gray-800 hover:text-green-600'
      }`}
    >
      {children}
    </button>
  );
} 