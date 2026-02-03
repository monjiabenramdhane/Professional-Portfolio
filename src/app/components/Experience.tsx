import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of cloud-based SaaS platform, mentoring team members, and driving technical decisions.",
      highlights: [
        "Architected microservices reducing load time by 40%",
        "Led team of 5 developers in agile environment",
        "Implemented CI/CD pipeline improving deployment efficiency"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed multiple client projects using modern web technologies and cloud infrastructure.",
      highlights: [
        "Built 8+ production applications from scratch",
        "Introduced automated testing reducing bugs by 35%",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Contributed to front-end development and learned industry best practices.",
      highlights: [
        "Developed reusable component library",
        "Improved UI performance by 25%",
        "Active participant in code reviews"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      period: "2017 - 2019",
      focus: "Software Engineering & Distributed Systems"
    },
    {
      degree: "Bachelor of Science",
      school: "State University",
      period: "2013 - 2017",
      focus: "Computer Science & Web Development"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Meta Front-End Developer"
  ];

  return (
    <section id="experience" className="py-32 bg-[#ffeac7] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-medium text-[#414141]">Career Journey</span>
          </div>
          <h2 className="text-[#414141] mb-6">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#ffb364] rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#414141]">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ x: 10 }}
                    className="relative pl-8 border-l-2 border-[#80907b]/30 hover:border-[#80907b] transition-colors"
                  >
                    <motion.div
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-[#80907b] rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#c3cebf]/30 hover:shadow-xl transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-xl font-bold text-[#414141]">{exp.title}</h4>
                          <p className="text-[#80907b] font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-[#414141]/60">{exp.period}</span>
                      </div>
                      
                      <p className="text-sm text-[#414141]/50 mb-3">{exp.location}</p>
                      <p className="text-[#414141]/70 mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 + index * 0.15 + hIndex * 0.05 }}
                            className="text-sm text-[#414141]/70 flex items-start gap-2"
                          >
                            <span className="text-[#ffb364] mt-1.5 text-xs">●</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#80907b] rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#414141]">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#c3cebf]/30 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-bold text-[#414141] mb-1">{edu.degree}</h4>
                    <p className="text-[#80907b] font-medium mb-2">{edu.school}</p>
                    <p className="text-sm text-[#414141]/60 mb-2">{edu.period}</p>
                    <p className="text-sm text-[#414141]/70">{edu.focus}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#c3cebf]/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#ffb364] rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#414141]">Certifications</h3>
              </div>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-[#414141]/70"
                  >
                    <span className="text-[#80907b] mt-1">✓</span>
                    <span>{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
