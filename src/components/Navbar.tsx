'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contacts', href: '/contact' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ngodat213' },
  ];

  const socialLinks = [
    { label: 'Github', href: 'https://github.com/ngodat213' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ngodat213' },
    { label: 'Instagram', href: 'https://instagram.com/hydra.coder' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-medium text-white hover:text-[#6C5DD3] transition-all duration-300"
            >
              Hydra Teams
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-[#6C5DD3] transition-all duration-300 flex items-center gap-2"
            >
              <span>Menu</span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path 
                  d="M3 12H21M3 6H21M3 18H21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-[#0F0A1F] transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className={`flex justify-between items-center h-16 pt-4 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <Link 
              href="/" 
              className="text-xl font-medium text-white hover:text-[#6C5DD3] transition-all duration-300"
            >
              Hydra Teams
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#6C5DD3] transition-all duration-300 flex items-center gap-2"
            >
              <span>Close</span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path 
                  d="M18 6L6 18M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100%-4rem)]">
            {/* Left Side - Menu Items */}
            <div className="flex flex-col">
              {/* Menu Items */}
              <div className="flex-1 pt-16">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block text-[56px] text-gray-500 hover:text-white transition-all duration-300 py-3 transform ${
                      isMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      transitionProperty: 'all'
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
                <h2 className="text-4xl font-medium text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  I specialize in building modern mobile applications with Flutter.
                  Let's work together to bring your ideas to life and create amazing user experiences.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+84399228357"
                    className="block text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300"
                  >
                    +84 399 228 357
                  </a>
                  <a
                    href="mailto:ngodat.it213@gmail.com"
                    className="block text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300"
                  >
                    ngodat.it213@gmail.com
                  </a>
                  
                  <div className="flex gap-6 pt-6">
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white hover:text-[#6C5DD3] transition-all duration-300 ${
                          isMenuOpen 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ 
                          transitionDelay: `${600 + index * 100}ms`,
                          transitionProperty: 'all'
                        }}
                      >
                        {link.label}
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