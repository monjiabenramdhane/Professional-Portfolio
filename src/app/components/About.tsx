import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design-First",
      description: "Believing that great design is the foundation of exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Obsessed with speed, optimization, and delivering blazing-fast applications."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Putting users at the heart of every decision to create meaningful products."
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#ffeac7] relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-[#80907b] rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium text-[#414141]">Get to know me</span>
            </div>

            <h2 className="text-[#414141] mb-6">
              Turning Ideas Into
              <span className="block text-[#80907b]">Digital Reality</span>
            </h2>

            <div className="space-y-4 text-lg text-[#414141]/70 leading-relaxed mb-8">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience
                crafting digital experiences that blend beautiful design with robust
                functionality.
              </p>
              <p>
                My journey in web development started with a curiosity for how things
                work behind the scenes. Today, I specialize in building scalable
                applications that make a real impact.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-[#414141] text-white rounded-full hover:bg-[#80907b] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className="px-8 py-4 border-2 border-[#414141] text-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Values */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#c3cebf]/30 hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-[#ffb364] rounded-2xl flex items-center justify-center mb-4"
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#414141] mb-2">{value.title}</h3>
                <p className="text-sm text-[#414141]/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
