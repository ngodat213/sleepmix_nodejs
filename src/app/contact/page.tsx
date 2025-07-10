'use client';

import Link from 'next/link';
import { useContact } from '@/hooks/useContact';

export default function Contact() {
  const { contact, loading, error } = useContact();

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#6C5DD3]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!contact) {
    return null;
  }

  return (
    <main className="min-h-screen w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl font-bold text-white mb-12 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
          {contact.title}
        </h1>
        
        <div className="text-2xl text-gray-300 font-light mb-24">
          {contact.subtitle.line1}<br />
          {contact.subtitle.line2}<br />
          {contact.subtitle.line3}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h2 className="text-[#6C5DD3] mb-4">{contact.forms.newProjects.title}</h2>
              <div className="space-y-4">
                {contact.forms.newProjects.fields.map((field, index) => (
                  <input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3]"
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4">{contact.forms.generalInquiries.title}</h2>
              {contact.forms.generalInquiries.fields.map((field, index) => (
                field.type === 'textarea' && (
                  <textarea
                    key={index}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3] resize-none"
                  />
                )
              ))}
            </div>

            <button className="bg-[#6C5DD3] text-white px-8 py-3 text-sm font-light rounded-full hover:bg-[#8677E5] transition-all duration-300">
              Send Message
            </button>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-[#6C5DD3] mb-4">{contact.info.address.title}</h2>
              <p className="text-gray-300">{contact.info.address.content}</p>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4">{contact.info.email.title}</h2>
              <Link 
                href={contact.info.email.link || '#'} 
                className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
              >
                {contact.info.email.content}
              </Link>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4">{contact.info.social.title}</h2>
              <div className="space-x-6">
                {contact.info.social.links.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.url} 
                    className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 