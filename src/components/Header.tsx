import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from './common/Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="text-primary-600">
              <Globe size={28} />
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">Insight Evolution</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services">Serviços</Link>
            <Link href="#locations">Localidades</Link>
            <Link href="#testimonials">Testemunhos</Link>
            <a 
              href="#contact"
              className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
            >
              Contacte-nos
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#services" onClick={() => setIsOpen(false)}>
                Serviços
              </Link>
              <Link href="#locations" onClick={() => setIsOpen(false)}>
                Localidades
              </Link>
              <Link href="#testimonials" onClick={() => setIsOpen(false)}>
                Testemunhos
              </Link>
              <a
                href="#contact"
                className="block px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contacte-nos
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;