import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#ffeac7]">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-[#c3cebf] rounded-full opacity-40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#80907b] rounded-full opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full mb-6 border border-[#80907b]/20"
            >
              <Sparkles className="w-4 h-4 text-[#ffb364]" />
              <span className="text-sm text-[#414141]">Available for freelance</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-6 text-[#414141] leading-[1.1]">
                Creative
                <span className="block text-[#80907b]">Full-Stack</span>
                <span className="block">Developer</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-[#414141]/70 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I craft beautiful digital experiences with clean code and creative design.
              Specializing in modern web technologies and user-centric solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="group px-8 py-4 bg-[#414141] text-white rounded-full flex items-center gap-2 hover:bg-[#80907b] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-[#414141] text-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-16 grid grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Projects Done" },
                { number: "30+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-[#ffb364] mb-1">{stat.number}</div>
                  <div className="text-sm text-[#414141]/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Creative Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                className="absolute top-0 left-0 w-64 h-80 bg-white rounded-3xl shadow-2xl p-6 border border-[#c3cebf]/30"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-12 h-12 bg-[#ffb364] rounded-xl mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-[#c3cebf] rounded-full w-3/4"></div>
                  <div className="h-3 bg-[#c3cebf] rounded-full w-1/2"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-20 right-0 w-64 h-80 bg-[#414141] rounded-3xl shadow-2xl p-6"
                animate={{
                  y: [0, 20, 0],
                  rotate: [2, -2, 2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-12 h-12 bg-[#80907b] rounded-xl mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-3 bg-white/20 rounded-full w-1/2"></div>
                  <div className="h-3 bg-white/20 rounded-full w-2/3"></div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 border-4 border-[#ffb364] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#414141] rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-[#414141] rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
