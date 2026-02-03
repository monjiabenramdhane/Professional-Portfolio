import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend'>('frontend');

  const skills = {
    frontend: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Motion/Framer", level: 85, icon: "✨" },
      { name: "Vue.js", level: 78, icon: "💚" }
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "PostgreSQL", level: 82, icon: "🐘" },
      { name: "MongoDB", level: 86, icon: "🍃" },
      { name: "GraphQL", level: 80, icon: "◈" },
      { name: "Docker", level: 75, icon: "🐳" }
    ]
  };

  const tools = [
    "Git", "VS Code", "Figma", "Postman", "AWS", "Vercel",
    "GitHub Actions", "Jira", "Slack", "Linear"
  ];

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#ffeac7] rounded-full mb-6">
            <span className="text-sm font-medium text-[#414141]">My Expertise</span>
          </div>
          <h2 className="text-[#414141] mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-[#414141]/60 leading-relaxed">
            A comprehensive toolkit built over years of hands-on experience
            in modern web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Tab Selector and Skills */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-4 mb-12">
              <motion.button
                onClick={() => setActiveTab('frontend')}
                className={`px-8 py-4 rounded-full font-medium transition-all ${
                  activeTab === 'frontend'
                    ? 'bg-[#414141] text-white'
                    : 'bg-[#ffeac7] text-[#414141]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Front-End
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('backend')}
                className={`px-8 py-4 rounded-full font-medium transition-all ${
                  activeTab === 'backend'
                    ? 'bg-[#414141] text-white'
                    : 'bg-[#ffeac7] text-[#414141]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back-End
              </motion.button>
            </div>

            {/* Skills List */}
            <div className="space-y-8">
              {skills[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-medium text-[#414141]">
                        {skill.name}
                      </span>
                    </div>
                    <motion.span
                      className="text-[#80907b] font-bold"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="relative h-3 bg-[#ffeac7] rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#80907b] to-[#ffb364] rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Tools & Others */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-[#ffeac7] p-8 rounded-3xl sticky top-24"
            >
              <h3 className="text-2xl font-bold text-[#414141] mb-6">
                Tools & Platforms
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#414141] cursor-default shadow-sm"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-[#414141]/10">
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-[#ffb364] mb-1">5+</div>
                    <div className="text-sm text-[#414141]/60">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#80907b] mb-1">50+</div>
                    <div className="text-sm text-[#414141]/60">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#ffb364] mb-1">15+</div>
                    <div className="text-sm text-[#414141]/60">Technologies Mastered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
