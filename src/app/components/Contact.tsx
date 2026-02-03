import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a demo form.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.doe@example.com",
      link: "mailto:john.doe@example.com",
      color: "#ffb364"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "#80907b"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null,
      color: "#ffb364"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffeac7] rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#ffeac7] rounded-full mb-6">
            <span className="text-sm font-medium text-[#414141]">Let's Connect</span>
          </div>
          <h2 className="text-[#414141] mb-6">
            Start a Project Together
          </h2>
          <p className="text-xl text-[#414141]/60 leading-relaxed">
            Have an exciting project in mind? Let's discuss how we can work together
            to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#414141] mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-[#ffeac7]/50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#80907b] transition-all placeholder:text-[#414141]/30"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#414141] mb-2">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-[#ffeac7]/50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#80907b] transition-all placeholder:text-[#414141]/30"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#414141] mb-2">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={8}
                  className="w-full px-6 py-4 bg-[#ffeac7]/50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#80907b] transition-all resize-none placeholder:text-[#414141]/30"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="group w-full md:w-auto px-10 py-4 bg-[#414141] text-white rounded-full flex items-center justify-center gap-3 hover:bg-[#80907b] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: -5 }}
                className="bg-[#ffeac7]/50 p-6 rounded-2xl border border-[#c3cebf]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: info.color }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-[#414141]/60 mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#414141] font-medium hover:text-[#80907b] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#414141] font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#ffeac7]/50 p-6 rounded-2xl border border-[#c3cebf]/30"
            >
              <p className="text-sm font-medium text-[#414141] mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-[#414141] rounded-xl flex items-center justify-center text-white hover:bg-[#80907b] transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-[#80907b] to-[#ffb364] p-6 rounded-2xl text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Work</span>
              </div>
              <p className="text-sm text-white/80">
                Currently accepting new projects for Q1 2026
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
