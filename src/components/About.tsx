'use client';

import Image from 'next/image';

export default function About() {
  const skills = [
    {
      category: "Mobile Development",
      items: ["Flutter", "Dart", "Firebase", "RESTful APIs", "State Management"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "VS Code", "Android Studio", "Google Play Console", "App Store Connect"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Collaboration", "Project Management", "Communication", "Time Management"]
    }
  ];

  const experiences = [
    {
      year: "2024",
      title: "Fresher Flutter Developer",
      company: "AppVillage Global",
      description: "Developed a multiple tenancy delivery app, optimizing data segmentation, performance.\n Built ERP and ecommerce modules, integrating business management and transactions.\n Integrated Vietmap and Google Maps for location tracking and route optimization.\n Worked with Firebase for real-time data synchronization and RESTful APIs for backend communication."
    },
    {
      year: "2024",
      title: "Intern Flutter Developer",
      company: "Di4l ",
      description: "Developed a multiple tenancy delivery app, optimizing data segmentation, performance.\n Built ERP and ecommerce modules, integrating business management and transactions.\n Integrated Vietmap and Google Maps for location tracking and route optimization.\n Worked with Firebase for real-time data synchronization and RESTful APIs for backend communication."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-16">
          ABOUT ME
        </h1>
        
        {/* Introduction */}
        <div className="grid gap-12 mb-20">
          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm Ngô Văn Tiến Đạt, a Flutter Developer with a passion for creating high-performance, user-friendly mobile apps. My journey started with a fascination for app development, and Flutter quickly became my go-to framework for its flexibility and efficiency. I focus on building scalable and intuitive apps while staying up-to-date with the latest mobile development trends.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Outside of coding, I enjoy mountain climbing, tracking, and photography. These hobbies fuel my creativity, enhance my problem-solving skills, and help me approach challenges with a fresh perspective. Looking ahead, I'm excited to expand my expertise in Flutter and work on larger, more innovative projects.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-10">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-medium mb-4 text-white">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-10">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex gap-8">
                  <div className="w-24 flex-shrink-0">
                    <span className="text-lg font-medium text-white">{exp.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">{exp.title}</h3>
                    <p className="text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-gray-300 whitespace-pre-line">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-10">
            Explore My Adventures
          </h2>
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <p className="text-lg font-medium text-white">Gia Lai City, Vietnam</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Service</p>
                <p className="text-lg font-medium text-white">Mountain Climbing</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Year</p>
                <p className="text-lg font-medium text-white">2024</p>
              </div>
            </div>
            <div className="aspect-[21/9] relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 mix-blend-overlay z-10"></div>
              <Image
                src="/chunam.png"
                alt="Chunam Mountain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 