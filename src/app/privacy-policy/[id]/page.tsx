'use client';

import { motion } from 'framer-motion';
import { usePrivacyPolicy } from '@/hooks/usePrivacyPolicy';
import { notFound } from 'next/navigation';

export default function PrivacyPolicy({ params }: { params: { id: string } }) {
  const { policy, loading, error } = usePrivacyPolicy(params.id);

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

  if (!policy) return null;

  return (
    <div className="relative min-h-screen bg-[#0F0A1F] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
            >
              Privacy Policy – {policy.appName}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-gray-300">
                Last updated: {policy.lastUpdated}
              </p>

              {policy.sections.map((section, index) => (
                <motion.section 
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    {section.title}
                  </h2>
                  <p className="text-gray-300">
                    {section.content}
                  </p>
                  {section.items && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}

              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Contact Us
                </h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a 
                    href={`mailto:${policy.contactEmail}`}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 hover:opacity-80 transition-opacity"
                  >
                    {policy.contactEmail}
                  </a>
                </p>
              </motion.section>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 