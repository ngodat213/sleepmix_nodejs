'use client';

import { motion } from 'framer-motion';
import { usePrivacy } from '@/hooks/usePrivacy';
import { notFound } from 'next/navigation';

export default function Privacy({ params }: { params: { id: string } }) {
  const { privacy, loading, error } = usePrivacy(params.id);

  if (error) {
    notFound();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0A1F] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!privacy) return null;

  return (
    <div className="relative min-h-screen bg-[#0F0A1F] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
            >
              Privacy Policy – {privacy.appName}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 mb-12"
            >
              Last updated: {privacy.lastUpdated}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-12 text-gray-300"
            >
              {privacy.sections.map((section, index) => (
                <motion.section 
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    {section.title}
                  </h2>
                  <p className="mb-4">{section.content}</p>
                  {section.items && (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}

              {/* Contact Section */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at:
                </p>
                <ul className="list-none space-y-2">
                  <li>
                    Email:{' '}
                    <a 
                      href={`mailto:${privacy.contact.email}`}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 hover:opacity-80 transition-opacity"
                    >
                      {privacy.contact.email}
                    </a>
                  </li>
                  <li>Address: {privacy.contact.address}</li>
                  <li>Developer Name: {privacy.contact.developer}</li>
                </ul>
                <p className="mt-4">
                  We will respond to your request within a reasonable timeframe and in accordance with applicable data protection laws.
                </p>
              </motion.section>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 