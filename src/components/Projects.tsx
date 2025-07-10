'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Kiwis",
    description: "A comprehensive social networking and travel planning application with real-time features.",
    image: "/images/project1.png",
    tech: ["Flutter", "Firebase", "VietMap", "AWS"],
    link: "https://github.com/ngodat213/kiwis_flutter"
  },
  {
    title: "ECourse",
    description: "Online course platform with interactive learning features and progress tracking.",
    image: "/images/project2.png",
    tech: ["Flutter", "NestJS", "MongoDB", "GetX"],
    link: "https://github.com/ngodat213/e_course_flutter"
  },
  {
    title: "Brainy",
    description: "English learning app with flashcards and spaced repetition system.",
    image: "/images/project3.png",
    tech: ["React Native", "Redux", "TypeScript", "PHP"],
    link: "https://github.com/ngodat213/brainy_react_native"
  }
];

export default function Projects() {
  return (
    <div className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-emerald-500/10 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 