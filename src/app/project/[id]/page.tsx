'use client';

import { useProject } from '@/hooks/useProject';
import { useParams } from 'next/navigation';
import { HeroSection } from '@/components/project/HeroSection';
import { ScreenshotsSection } from '@/components/project/ScreenshotsSection';
import { FeaturesSection } from '@/components/project/FeaturesSection';
import { TechStackSection } from '@/components/project/TechStackSection';
import { NavigationDots, Section } from '@/components/project/NavigationDots';
import { CallToAction } from '@/components/project/CallToAction';
import { useState, useEffect } from 'react';

export default function ProjectPage() {
  const { id } = useParams();
  const { project, isLoading, error } = useProject(id as string);
  const [activeSection, setActiveSection] = useState<Section>('hero');

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0A1F]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
          <p className="mt-2 text-gray-300">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0F0A1F] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <NavigationDots 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <section id="hero">
        <HeroSection title={project.hero.title} description={project.hero.description} />
      </section>
      <section id="screenshots">
        <ScreenshotsSection items={project.screenshots} />
      </section>
      <section id="features">
        <FeaturesSection items={project.features} />
      </section>
      <section id="tech">
        <TechStackSection items={project.technologies} />
      </section>
      <section id="cta">
        <CallToAction 
          name={project.name}
          playStoreUrl={project.playStoreUrl}
          metadata={project.metadata}
        />
      </section>
    </div>
  );
} 