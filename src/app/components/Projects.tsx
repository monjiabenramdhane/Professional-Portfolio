import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: "E-Commerce Revolution",
      category: "Full-Stack Development",
      description: "A modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDA4MDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      color: "#ffb364",
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "Analytics Dashboard Pro",
      category: "Data Visualization",
      description: "Real-time analytics platform with interactive charts and comprehensive reporting tools.",
      image: "https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMTMxMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Next.js", "TypeScript", "Recharts", "TailwindCSS"],
      color: "#80907b",
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "Fitness Tracker Mobile",
      category: "Mobile App",
      description: "Cross-platform fitness app with workout tracking, social features, and personalized plans.",
      image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzY3JlZW5zfGVufDF8fHx8MTc3MDA5NTcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React Native", "Firebase", "GraphQL"],
      color: "#c3cebf",
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "Creative Portfolio CMS",
      category: "Web Development",
      description: "Headless CMS for creatives with drag-and-drop builder and stunning templates.",
      image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwNjYzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Vue.js", "Strapi", "MongoDB"],
      color: "#ffb364",
      link: "https://example.com",
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffeac7] rounded-full opacity-50 blur-3xl"></div>
      
      <motion.div style={{ opacity }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#ffeac7] rounded-full mb-6">
                <span className="text-sm font-medium text-[#414141]">Featured Work</span>
              </div>
              <h2 className="text-[#414141] mb-6">
                Selected Projects
              </h2>
              <p className="text-xl text-[#414141]/60 leading-relaxed">
                A collection of my recent work showcasing my expertise in full-stack development,
                creative problem-solving, and attention to detail.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[500px] object-cover"
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#414141]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8"
                    >
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                        >
                          <ExternalLink className="w-5 h-5 text-[#414141]" />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: -90 }}
                        >
                          <Github className="w-5 h-5 text-[#414141]" />
                        </motion.a>
                      </div>
                    </motion.div>

                    {/* Decorative Corner */}
                    <div 
                      className="absolute -top-4 -right-4 w-24 h-24 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  >
                    <span className="text-sm font-medium text-[#80907b] mb-3 block">
                      {project.category}
                    </span>
                    
                    <h3 className="text-4xl font-bold text-[#414141] mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-[#414141]/60 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.4 + index * 0.2 + techIndex * 0.05 }}
                          className="px-4 py-2 bg-[#ffeac7] text-[#414141] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#414141] font-medium group"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
