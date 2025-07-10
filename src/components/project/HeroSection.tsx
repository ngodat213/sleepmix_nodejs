import { motion } from 'framer-motion';

export interface HeroSectionProps {
  title: {
    highlight: string;
    normal: string;
  };
  description: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl sm:text-8xl lg:text-9xl font-bold mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            {title.highlight}
          </span>
          <span className="text-white">{title.normal}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="#screenshots"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 text-white font-medium">View Screenshots</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
} 