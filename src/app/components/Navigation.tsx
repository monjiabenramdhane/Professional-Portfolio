import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#414141] rounded-xl flex items-center justify-center">
                  <span className="text-[#ffb364] font-bold text-lg">J</span>
                </div>
                <span className="text-xl font-bold text-[#414141]">John Doe</span>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-[#414141] hover:text-[#80907b] transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffb364] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              
              <div className="flex items-center gap-3 ml-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#c3cebf]/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Github className="w-5 h-5 text-[#414141]" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#c3cebf]/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Linkedin className="w-5 h-5 text-[#414141]" />
                </motion.a>
              </div>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="px-6 py-2.5 bg-[#414141] text-white rounded-full hover:bg-[#80907b] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-[#414141]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ type: 'tween' }}
        className="fixed inset-0 bg-[#ffeac7] z-40 lg:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-4xl font-bold text-[#414141] hover:text-[#80907b] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          
          <div className="flex gap-4 mt-8">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#414141] text-white"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#414141] text-white"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:john@example.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#414141] text-white"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
