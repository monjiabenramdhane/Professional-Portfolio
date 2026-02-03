import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "Working with John was an absolute pleasure. His attention to detail and creative problem-solving brought our vision to life beyond our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "John's full-stack expertise and ability to translate complex requirements into elegant solutions made our project a huge success.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CTO at DesignHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "Exceptional developer with a keen eye for design. John delivered a performant, beautiful application that our users absolutely love.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-[#c3cebf] relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#80907b] rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-medium text-[#414141]">Client Feedback</span>
          </div>
          <h2 className="text-[#414141] mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-[#414141]/60 leading-relaxed">
            Don't just take my word for it. Here's what clients have to say about
            working together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl relative shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ffb364] rounded-2xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
                    className="text-[#ffb364] text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#414141]/70 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#c3cebf]/30">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#c3cebf]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#414141]">{testimonial.name}</h4>
                  <p className="text-sm text-[#414141]/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
