'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-22 py-6">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <a href="/" className="inline-flex items-center">
              <img 
                src="/logo.svg" 
                alt="CMM Logo" 
                className="h-12 sm:h-16 lg:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#system" className="text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase" onClick={(e) => {
              e.preventDefault();
              document.getElementById('system')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              System
            </a>
            <a href="#results" className="text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase" onClick={(e) => {
              e.preventDefault();
              document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Results
            </a>
            <a href="#community" className="text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase" onClick={(e) => {
              e.preventDefault();
              document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Community
            </a>
            <a href="#apply" className="text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase" onClick={(e) => {
              e.preventDefault();
              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Apply
            </a>
            <a href="https://thecmm.com/schedule-auto" target="_blank" className="bg-gold text-dark px-6 py-3 rounded-sm font-semibold hover:bg-gold-light transition-colors text-sm tracking-wide uppercase">
              Get The System
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/90 hover:text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <a href="#system" className="block text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase py-2" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.getElementById('system')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              System
            </a>
            <a href="#results" className="block text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase py-2" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Results
            </a>
            <a href="#community" className="block text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase py-2" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Community
            </a>
            <a href="#apply" className="block text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase py-2" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Apply
            </a>
            <button className="w-full bg-gold text-dark px-6 py-3 rounded-sm font-semibold hover:bg-gold-light transition-colors text-sm tracking-wide uppercase mt-4">
              Get The System
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
