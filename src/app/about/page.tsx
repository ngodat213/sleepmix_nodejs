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
      company: "Di4l",
      description: "Developed a multiple tenancy delivery app, optimizing data segmentation, performance.\n Built ERP and ecommerce modules, integrating business management and transactions.\n Integrated Vietmap and Google Maps for location tracking and route optimization.\n Worked with Firebase for real-time data synchronization and RESTful APIs for backend communication."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
            ABOUT ME
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] rounded-full"></div>
        </div>
        
        {/* Introduction */}
        <div className="grid gap-12 mb-32">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm <span className="text-white font-medium">Ngô Văn Tiến Đạt</span>, a Flutter Developer with a passion for creating high-performance, user-friendly mobile apps. My journey started with a fascination for app development, and Flutter quickly became my go-to framework for its flexibility and efficiency. I focus on building scalable and intuitive apps while staying up-to-date with the latest mobile development trends.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Outside of coding, I enjoy mountain climbing, tracking, and photography. These hobbies fuel my creativity, enhance my problem-solving skills, and help me approach challenges with a fresh perspective. Looking ahead, I'm excited to expand my expertise in Flutter and work on larger, more innovative projects.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="group backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#6C5DD3]/30 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(108,93,211,0.3)]">
                <h3 className="text-2xl font-medium mb-6 text-white group-hover:bg-gradient-to-r group-hover:from-[#6C5DD3] group-hover:to-[#8677E5] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center group-hover:text-white transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#6C5DD3]/30 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(108,93,211,0.3)]">
                <div className="flex gap-12">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-2xl font-medium text-white group-hover:bg-gradient-to-r group-hover:from-[#6C5DD3] group-hover:to-[#8677E5] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {exp.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-[#6C5DD3] group-hover:to-[#8677E5] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {exp.title}
                    </h3>
                    <p className="text-[#6C5DD3] mb-4 text-lg">{exp.company}</p>
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed group-hover:text-white transition-all duration-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
            Explore My Adventures
          </h2>
          <div className="group backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#6C5DD3]/30 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(108,93,211,0.3)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-sm text-[#6C5DD3] mb-2 uppercase tracking-wider">Location</p>
                <p className="text-xl font-medium text-white group-hover:bg-gradient-to-r group-hover:from-[#6C5DD3] group-hover:to-[#8677E5] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  Gia Lai City, Vietnam
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6C5DD3] mb-2 uppercase tracking-wider">Service</p>
                <p className="text-xl font-medium text-white group-hover:bg-gradient-to-r group-hover:from-[#6C5DD3] group-hover:to-[#8677E5] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  Mountain Climbing
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6C5DD3] mb-2 uppercase tracking-wider">Year</p>
                <p className="text-xl font-medium text-white group-hover:bg-gradient-to-r group-hover:from-[#6C5DD3] group-hover:to-[#8677E5] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  2024
                </p>
              </div>
            </div>
            <div className="aspect-[21/9] relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6C5DD3]/20 to-[#8677E5]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-all duration-500"></div>
              <Image
                src="/chunam.png"
                alt="Chunam Mountain"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 