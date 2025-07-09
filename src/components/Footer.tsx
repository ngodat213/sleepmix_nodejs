'use client';

import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { label: 'Github', href: 'https://github.com/ngodat213' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ngodat213' },
    { label: 'Instagram', href: 'https://instagram.com/hydra.coder' },
  ];

  return (
    <footer className="bg-[#0F0A1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <Link 
              href="/" 
              className="text-2xl font-medium hover:text-gray-300 transition-all duration-300"
            >
              Dat Ngo
            </Link>
            <p className="mt-6 text-gray-400 text-lg max-w-md">
              I specialize in building modern mobile applications with Flutter.
              Let's work together to bring your ideas to life and create amazing user experiences.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:items-end">
            <div className="space-y-4">
              <a
                href="tel:+84399228357"
                className="block text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300 text-lg"
              >
                +84 399 228 357
              </a>
              <a
                href="mailto:ngodat.it213@gmail.com"
                className="block text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300 text-lg"
              >
                ngodat.it213@gmail.com
              </a>
            </div>

            <div className="flex gap-6 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#6C5DD3] transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dat Ngo. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 