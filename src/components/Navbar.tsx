'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contacts', href: '/contact' },
    { label: 'About', href: '/about' },
  ];

  const socialLinks = [
    { 
      label: 'Github',
      href: 'https://github.com/ngodat213',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ngodat213',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      label: 'Instagram',
      href: 'https://instagram.com/hydra.coder',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#0F0A1F]/80 backdrop-blur-lg' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-[#6C5DD3] hover:to-[#8677E5] transition-all duration-300"
            >
              Hydra Teams
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-gray-300 group-hover:text-white">Menu</span>
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-0.5 bg-gray-300 group-hover:bg-white transition-all duration-300"></div>
                <div className="w-4 h-0.5 bg-gray-300 group-hover:bg-white transition-all duration-300 group-hover:w-6"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-[#0F0A1F] to-[#1A1528] transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className={`flex justify-between items-center h-16 pt-6 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <Link 
              href="/" 
              className="text-xl font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-[#6C5DD3] hover:to-[#8677E5] transition-all duration-300"
            >
              Hydra Teams
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-gray-300 group-hover:text-white">Close</span>
              <svg 
                className="w-6 h-6 text-gray-300 group-hover:text-white transition-all duration-300"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100%-5rem)]">
            {/* Left Side - Menu Items */}
            <div className="flex flex-col justify-center">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block text-6xl font-medium text-gray-500 hover:text-white transition-all duration-300 py-3 transform hover:translate-x-2 ${
                      isMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className={`hidden lg:flex flex-col justify-center items-start pl-16 transition-all duration-500 ${
              isMenuOpen 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '400ms' }}
            >
              <div className="max-w-md">
                <h2 className="text-4xl font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  I specialize in building modern mobile applications with Flutter.
                  Let's work together to bring your ideas to life and create amazing user experiences.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+84399228357"
                    className="block text-xl text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300"
                  >
                    +84 399 228 357
                  </a>
                  <a
                    href="mailto:ngodat.it213@gmail.com"
                    className="block text-xl text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300"
                  >
                    ngodat.it213@gmail.com
                  </a>
                  
                  <div className="flex gap-6 pt-8">
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 ${
                          isMenuOpen 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ 
                          transitionDelay: `${600 + index * 100}ms`,
                        }}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 