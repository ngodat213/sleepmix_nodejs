'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/types/project';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        // For now, we only have sleepmix project
        const response = await fetch('/data/projects/sleepmix.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        }
        const data = await response.json();
        setProjects([data]); // Wrap in array since we'll have multiple projects later
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch projects'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0A1F]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0A1F]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
          <p className="mt-2 text-gray-300">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-24 bg-[#0F0A1F] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
        >
          My Projects
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                href={`/project/${project.id}`}
                className="group block backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-300">
                  <h2 className="text-3xl font-bold text-white text-center">
                    {project.name}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 capitalize">
                      {project.metadata.status.replace('_', ' ')}
                    </span>
                    <span className="text-sm text-gray-400">
                      {project.metadata.platform}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 