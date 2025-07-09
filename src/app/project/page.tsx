'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ProjectPage() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'screenshots', 'features'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    // Add both scroll and wheel event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main className="relative min-h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {['hero', 'screenshots', 'features'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-gradient-to-r from-blue-400 to-emerald-400 scale-150' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Scroll to ${section} section`}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        id="hero"
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-[#0F0A1F]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20"></div>
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-[90vw] xl:max-w-[80vw]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-7xl sm:text-8xl lg:text-9xl font-bold mb-8 sm:mb-12"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Sleep
              </span>
              <span className="text-white">Mix</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-12 sm:mb-16 max-w-[90%] mx-auto font-light leading-relaxed"
            >
              Your personal sleep sanctuary. Discover the perfect blend of soothing sounds 
              to help you relax, focus, or drift into peaceful sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8"
            >
              <a
                href="#screenshots"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 hover:scale-105 text-lg sm:text-xl"
              >
                <span className="relative z-10 text-white font-medium">View App</span>
                <svg 
                  className="w-6 h-6 text-white relative z-10 group-hover:translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.sleepmix"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-10 py-5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 text-center text-lg sm:text-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Download Now</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button 
            onClick={() => scrollToSection('screenshots')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer hover:text-white/80 transition-colors"
          >
            <span className="text-gray-400 text-sm font-light tracking-wider">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400 hover:text-white/80 transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Screenshots Section */}
      <section 
        id="screenshots" 
        className="relative min-h-screen w-full flex items-center justify-center bg-black snap-start py-24"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          className="w-full max-w-[90vw] xl:max-w-[80vw] mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/app-screen-1.png"
                alt="App Screenshot 1"
                width={400}
                height={800}
                className="rounded-2xl border border-white/10 shadow-2xl mx-auto w-full max-w-[80vw] sm:max-w-full"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/app-screen-2.png"
                alt="App Screenshot 2"
                width={400}
                height={800}
                className="rounded-2xl border border-white/10 shadow-2xl mx-auto w-full max-w-[80vw] sm:max-w-full"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/app-screen-3.png"
                alt="App Screenshot 3"
                width={400}
                height={800}
                className="rounded-2xl border border-white/10 shadow-2xl mx-auto w-full max-w-[80vw] sm:max-w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Section Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Previous
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            Next
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        className="relative min-h-screen py-32 snap-start"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Natural Sleep Sounds</h3>
                <p className="text-gray-300 leading-relaxed">
                  High-quality recordings of rain, ocean waves, and white noise to help you fall asleep naturally.
                  Each sound is carefully mastered for the perfect sleeping environment.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Custom Sound Mix</h3>
                <p className="text-gray-300 leading-relaxed">
                  Create your perfect ambiance by mixing multiple sounds with individual volume controls.
                  Save your favorite combinations for quick access.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Smart Sleep Timer</h3>
                <p className="text-gray-300 leading-relaxed">
                  Set a timer to gradually fade out your sounds, ensuring peaceful transitions into sleep.
                  Wake up naturally with gentle volume increase.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="min-h-screen py-32 relative snap-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest technologies to deliver a seamless and performant experience
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "Flutter",
              "Dart",
              "Firebase",
              "Google Maps",
              "VietmapGL",
              "GetX",
              "Clean Architecture"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                variants={fadeIn}
                className="group relative overflow-hidden"
              >
                <div className="relative px-6 py-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-screen py-32 relative snap-start">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30">
            <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-blue-500/20 via-transparent to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 -rotate-45 bg-gradient-to-r from-emerald-500/20 via-transparent to-blue-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to experience better sleep?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Download SleepMix now and transform your nights into peaceful, rejuvenating experiences.
            </p>

            <div className="flex justify-center gap-6">
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

              <a
                href="https://play.google.com/store/apps/details?id=com.sleepmix"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Get it on Google Play</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 