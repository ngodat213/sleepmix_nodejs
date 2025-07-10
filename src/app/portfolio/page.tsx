'use client';

import Image from 'next/image';
import { usePortfolio } from '@/hooks/usePortfolio';

export default function Portfolio() {
  const { portfolio, loading, error } = usePortfolio();

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

  if (!portfolio) {
    return null;
  }

  return (
    <div className="min-h-screen w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Info Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative w-[140px] h-[140px] mb-6">
            <Image
              src={portfolio.personal.image}
              alt={portfolio.personal.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
            {portfolio.personal.name}
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6">{portfolio.personal.title}</h2>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {portfolio.personal.social.filter(social => social.isActive).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:text-white transition-all duration-300"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="opacity-80 group-hover:opacity-100"
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{portfolio.personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${portfolio.personal.email}`} className="hover:text-[#6C5DD3] transition-all duration-300">
                {portfolio.personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${portfolio.personal.phone}`} className="hover:text-[#6C5DD3] transition-all duration-300">
                {portfolio.personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-white sticky top-8">Summary</h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-300 text-lg leading-relaxed">
                {portfolio.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-white sticky top-8">Experience</h2>
            </div>
            <div className="md:w-3/4">
              <div className="space-y-12">
                {portfolio.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#6C5DD3]">
                    <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[#6C5DD3]" />
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                    <div className="flex items-center gap-4 text-gray-400 mb-4">
                      <span>{exp.role}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm text-[#6C5DD3] bg-[#6C5DD3]/10 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {exp.summary.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 bg-[#6C5DD3] rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-white sticky top-8">Projects</h2>
            </div>
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 gap-12">
                {portfolio.projects.filter(project => project.showOnHome).map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-[#1A1528] hover:bg-[#1A1528]/80 transition-all duration-300"
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill: string) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm text-[#6C5DD3] bg-[#6C5DD3]/10 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Project Summary */}
                      <div className="text-gray-300 mb-6">
                        {project.summary.map((item, i) => (
                          <p key={i} className="mb-2">{item}</p>
                        ))}
                      </div>

                      {/* Project Details */}
                      {project.details && (
                        <div className="space-y-6 mb-6">
                          {project.details.map((detail, i) => (
                            <div key={i}>
                              <h4 className="text-lg font-semibold text-white mb-3">{detail.title}</h4>
                              <ul className="space-y-2">
                                {detail.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 text-gray-300">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#6C5DD3] rounded-full" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Project Stats */}
                      {project.stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-400">Development Time</div>
                            <div className="text-white">{project.stats.developmentTime}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Team Size</div>
                            <div className="text-white">{project.stats.teamSize}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Platform</div>
                            <div className="text-white">{project.stats.platform}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Status</div>
                            <div className="text-white">{project.stats.status}</div>
                          </div>
                        </div>
                      )}

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-white sticky top-8">Skills & Tools</h2>
            </div>
            <div className="md:w-3/4 space-y-12">
              {/* Languages */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolio.skills.Languages?.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-8 py-3 text-base rounded-full bg-gradient-to-r from-[#2A2A3F] to-[#34344A] text-gray-200 hover:from-[#34344A] hover:to-[#3E3E59] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolio.skills.Technologies?.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-8 py-3 text-base rounded-full bg-gradient-to-r from-[#2A2A3F] to-[#34344A] text-gray-200 hover:from-[#34344A] hover:to-[#3E3E59] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Tools & Softwares */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Tools & Softwares</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolio.skills.Tools?.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-8 py-3 text-base rounded-full bg-gradient-to-r from-[#2A2A3F] to-[#34344A] text-gray-200 hover:from-[#34344A] hover:to-[#3E3E59] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-white sticky top-8">Certifications</h2>
            </div>
            <div className="md:w-3/4">
              <div className="space-y-8">
                {portfolio.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#6C5DD3]"
                  >
                    <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[#6C5DD3]" />
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-white">{cert.name}</h3>
                      <svg className="w-5 h-5 text-[#6C5DD3]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 mb-4">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{cert.description}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#6C5DD3] hover:text-[#8677E5] transition-all duration-300"
                      >
                        View Certificate
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 