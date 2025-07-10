import { Technology } from '@/types/project';
import { motion } from 'framer-motion';

export interface TechStackSectionProps {
  items: Technology[];
}

export function TechStackSection({ items }: TechStackSectionProps) {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
        >
          Built with Modern Technology
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {items.map((tech, index) => (
            <motion.a
              key={tech.id}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="relative px-6 py-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 