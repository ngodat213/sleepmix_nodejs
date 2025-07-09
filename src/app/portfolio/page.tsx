'use client';

import Image from 'next/image';
import Link from 'next/link';

// Move all interfaces and resume data here
interface Social {
  name: string;
  url: string;
  icon: string;
  isActive?: boolean;
}

interface Education {
  school: string;
  degree: string;
  period: string;
  summary: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  skills: string[];
  summary: string[];
}

interface ProjectDetail {
  title: string;
  items: string[];
}

interface ProjectFeature {
  title: string;
  description: string;
}

interface ProjectStats {
  developmentTime: string;
  teamSize: string;
  platform: string;
  status: string;
}

interface Project {
  name: string;
  thumbnail: string;
  skills: string[];
  summary: string[];
  details?: ProjectDetail[];
  features?: ProjectFeature[];
  stats?: ProjectStats;
  link: string;
  showOnHome?: boolean;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

const resume = {
  personal: {
    name: "Ngô Văn Tiến Đạt",
    title: "Fresher Flutter Developer",
    image: "/images/avatar.jpg",
    location: "Thu Duc City",
    email: "ngodat.it213@gmail.com",
    phone: "0399228357",
    social: [
      {
        name: "hydracoder",
        url: "https://github.com/ngodat213",
        icon: "/icons/github.svg",
        isActive: true
      },
      {
        name: "ngodat213",
        url: "https://www.facebook.com/ngodat213",
        icon: "/icons/facebook.svg",
        isActive: false
      },
      {
        name: "hydracoder",
        url: "https://www.linkedin.com/in/hydracoder",
        icon: "/icons/linkedin.svg",
        isActive: false
      }
    ]
  },
  summary: "I am a dedicated Flutter Developer with a strong focus on building high-performance cross-platform applications. Passionate about creating seamless user experiences, I quickly adapt to new technologies and continuously improve my skills. My goal is to contribute to innovative projects that deliver high-quality and efficient mobile solutions.",
  education: [
    {
      school: "Hutech University",
      degree: "Software Engineering",
      period: "Oct 2021 - present",
      summary: [
        "Information technology at HUTECH University.",
        "I have some basic certifications in programming and experience participating in programming competitions like the Olympics and participating in algorithm sites Codelearn.io. Besides, I have the ability to self-study, teamwork, and the ability to withstand work pressure."
      ]
    }
  ],
  experience: [
    {
      company: "Di4l",
      role: "Internship Flutter Developer",
      period: "July 2024 - present",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "VietMap",
        "GetX",
        "MVVM",
        "FCM",
        "Firebase",
        "Google Map",
        "Provider"
      ],
      summary: [
        "Developed a multiple tenancy delivery app, optimizing data segmentation, performance.",
        "Built ERP and ecommerce modules, integrating business management and transactions.",
        "Integrated Vietmap and Google Maps for location tracking and route optimization.",
        "Worked with Firebase for real-time data synchronization and RESTful APIs for backend communication."
      ]
    }
  ],
  projects: [
    {
      name: "Kiwis",
      thumbnail: "/images/project1.png",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "VietMap",
        "AWS",
        "GetX",
        "NodeJs",
        "MySQL",
        "Socket",
        "FCM",
        "Cloudinary"
      ],
      summary: [
        "Kiwis is a personal project focused on travel management, social media, and expense tracking. It allows users to plan trips by adding destinations and using Vietmap for navigation. In addition to sharing trip photos and updates, users can manage group expenses, making it easier to track and share costs within their travel group. With real-time features and an intuitive interface, Kiwis enhances the travel experience while keeping everything organized in one place."
      ],
      details: [
        {
          title: "Overview",
          items: [
            "Kiwis is a comprehensive social networking and planning application that seamlessly combines social connectivity with practical lifestyle management. As the lead developer, I architected and implemented several innovative features that set this app apart:"
          ]
        },
        {
          title: "Social Networking Core",
          items: [
            "Real-time social feed with instant updates using Socket.IO and Firebase Cloud Messaging",
            "Robust friend system with personalized connection recommendations",
            "Group creation and management with role-based permissions",
            "Real-time messaging system supporting text, images, and location sharing"
          ]
        },
        {
          title: "Technical Achievements",
          items: [
            "Implemented efficient real-time data synchronization using Socket.IO, reducing latency by 40%",
            "Integrated VietMap SDK for precise location services with custom markers and routing",
            "Designed a scalable backend architecture using Node.js and MySQL",
            "Utilized AWS for reliable media storage and Cloudinary for optimized image delivery",
            "Achieved 99.9% crash-free sessions through comprehensive error handling and testing"
          ]
        }
      ],
      link: "https://github.com/ngodat213/kiwis_flutter",
      showOnHome: true,
      stats: {
        developmentTime: "3 Months",
        teamSize: "2 Members",
        platform: "Android",
        status: "Completed"
      }
    },
    {
      name: "ECourse",
      thumbnail: "/images/project2.png",
      skills: [
        "Flutter",
        "Dart",
        "VietMap",
        "GetX",
        "NestJs",
        "MongoDB",
        "Cloudinary"
      ],
      summary: [
        "ECourse is an online course-selling application that allows users to browse and enroll in various courses. Each course includes quizzes and exams to assess users' knowledge. The app also features a progress-tracking system, enabling users to monitor their course completion status. Additionally, ECourse supports direct messaging with study groups and instructors, fostering an interactive and engaging learning environment."
      ],
      link: "https://github.com/ngodat213/e_course_flutter",
      showOnHome: true,
      stats: {
        developmentTime: "2 Months",
        teamSize: "1 Member",
        platform: "Android",
        status: "In Progress"
      }
    },
    {
      name: "Brainy",
      thumbnail: "/images/project2.png",
      skills: [
        "React Native",
        "Clean Architecture",
        "Redux Toolkit",
        "TypeScript",
        "PHP",
        "MySQL"
      ],
      summary: [
        "An English learning app using flashcards, vocabulary, and grammar lessons. Features personalized learning paths, smart review system (Spaced Repetition), and regular progress assessments. Contributed to UI development, state management with Redux, performance optimization, and backend API integration."
      ],
      link: "https://github.com/ngodat213/brainy_react_native",
      showOnHome: true,
      stats: {
        developmentTime: "2 Months",
        teamSize: "1 Member",
        platform: "Android",
        status: "In Progress"
      }
    }
  ],
  skills: {
    "Languages": [
      "Java",
      "Dart",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C#",
      "C/C++"
    ],
    "Technologies": [
      "Flutter",
      "React Native",
      "Redux Toolkit",
      "GetX",
      "Provider",
      "Clean Architecture",
      "MVVM",
      "MVC",
      "RESTful API",
      "Firebase",
      "AWS",
      "NodeJs",
      "MySQL",
      "Socket",
      "FCM",
      "Cloudinary",
      "NestJs",
      "ASP.NET"
    ],
    "Tools & Softwares": [
      "VS Code",
      "Cursor",
      "Git",
      "Intellij",
      "Figma",
      "Postman",
      "Photoshop"
    ]
  },
  certifications: [
    {
      name: "JavaScript Essentials 2",
      issuer: "Cisco",
      date: "Nov 2024",
      description: "Advanced algorithms and data structures certification with practical problem-solving",
      link: "https://www.credly.com/badges/a98838c4-c7ef-4dc4-9d96-616896b2a653/public_url"
    },
    {
      name: "JavaScript Essentials 1",
      issuer: "Cisco",
      date: "Nov 2024",
      description: "Fundamental understanding of JavaScript",
      link: "https://www.credly.com/badges/7eaebd5a-48ef-4d52-9cff-0898b717e5a4/public_url"
    },
    {
      name: "Networking Basics",
      issuer: "Cisco",
      date: "Nov 2024",
      description: "Fundamental understanding of Networking",
      link: "https://www.credly.com/badges/d8f48776-5fcb-43fc-ac9a-8fdb21a99dd0/public_url"
    },
    {
      name: "Data Visualization with R",
      issuer: "IBM",
      date: "Dec 2023",
      description: "Fundamental understanding of Data Visualization with R",
      link: "https://www.credly.com/badges/25fc16d9-3453-4a1f-b10a-b3b2cf13a798/public_url"
    },
    {
      name: "R Essentials",
      issuer: "IBM",
      date: "Dec 2023",
      description: "Fundamental understanding of R",
      link: "https://www.credly.com/badges/c14acecb-03e9-4dfc-9a6b-a80578c0c92c/public_url"
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Info Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative w-[140px] h-[140px] mb-6">
            <Image
              src={resume.personal.image}
              alt={resume.personal.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
            {resume.personal.name}
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6">{resume.personal.title}</h2>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {resume.personal.social.filter(social => social.isActive).map((social) => (
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
              <span>{resume.personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${resume.personal.email}`} className="hover:text-[#6C5DD3] transition-all duration-300">
                {resume.personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${resume.personal.phone}`} className="hover:text-[#6C5DD3] transition-all duration-300">
                {resume.personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Summary</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            {resume.summary}
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Experience</h2>
          <div className="space-y-12">
            {resume.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#6C5DD3]">
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[#6C5DD3]" />
                <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <span>{exp.role}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.skills.map((skill) => (
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
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
          <div className="grid grid-cols-1 gap-12">
            {resume.projects.filter(project => project.showOnHome).map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-[#1A1528] hover:bg-[#1A1528]/80 transition-all duration-300"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
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
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm text-[#6C5DD3] bg-[#6C5DD3]/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10">Certifications</h2>
          <div className="space-y-8">
            {resume.certifications.map((cert, index) => (
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
        </section>
      </div>
    </div>
  );
} 