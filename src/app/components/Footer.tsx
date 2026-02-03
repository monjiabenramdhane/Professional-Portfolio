import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <footer className="bg-[#414141] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#80907b] rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#ffb364] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-2xl font-bold">John Doe</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Full-Stack Developer crafting beautiful digital experiences with
              clean code and creative design.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffb364] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-white/60 hover:text-[#ffb364] transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="mailto:john.doe@example.com" className="hover:text-[#ffb364] transition-colors">
                  john.doe@example.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-[#ffb364] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>© 2026 John Doe. Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-[#ffb364] fill-current" />
            </motion.div>
            <span>and React</span>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-[#ffb364] rounded-lg flex items-center justify-center hover:bg-[#80907b] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
