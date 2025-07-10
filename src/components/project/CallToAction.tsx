import { ProjectMetadata } from '@/types/project';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface CallToActionProps {
  name: string;
  playStoreUrl?: string;
  metadata: ProjectMetadata;
}

export function CallToAction({ name, playStoreUrl, metadata }: CallToActionProps) {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-white"
        >
          Try {name} Today
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {metadata.status === 'in_development' ? (
            'Coming soon to the Google Play Store!'
          ) : (
            'Available now on the Google Play Store'
          )}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 text-white font-medium">Back to Home</span>
            <svg 
              className="w-5 h-5 text-white relative z-10 group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {playStoreUrl && metadata.status !== 'in_development' && (
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Get it on Google Play</span>
            </a>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2 text-white">Status</h3>
            <p className="text-gray-300 capitalize">{metadata.status.replace('_', ' ')}</p>
          </div>
          <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2 text-white">Started</h3>
            <p className="text-gray-300">{metadata.startDate}</p>
          </div>
          <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2 text-white">Platform</h3>
            <p className="text-gray-300">{metadata.platform}</p>
          </div>
          <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2 text-white">Category</h3>
            <p className="text-gray-300">{metadata.category}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 