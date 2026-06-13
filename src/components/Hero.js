import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code, Palette, Workflow, Sparkles, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    { title: 'Full Stack Developer', icon: Code },
    { title: 'UI/UX Designer', icon: Palette },
    { title: 'Process Automation', icon: Workflow },
    { title: 'Tech Innovator', icon: Sparkles }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]); // <- Kjo është e vetmja ndryshim

  const IconComponent = roles[currentRole].icon;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center px-4 z-10 max-w-5xl mx-auto">
        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text"
        >
          Gentiana Mehana
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-cyan-300"
            >
              <IconComponent size={28} className="text-cyan-400" />
              <span>{roles[currentRole].title}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-300 max-w-2xl mx-auto mb-6 text-lg"
        >
          Computer Science student passionate about creating innovative web solutions 
          and automating workflows. Building technology that makes a difference.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <Mail size={14} className="text-cyan-400" />
            <span>mehanagenta@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <Phone size={14} className="text-cyan-400" />
            <span>+383 49 424 78</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <MapPin size={14} className="text-cyan-400" />
            <span>Vushtrri, Kosovo</span>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center space-x-4 mb-10"
        >
          <motion.a
            href="https://github.com/GentianaMehana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 transition-colors border border-slate-700"
          >
            <Github size={20} className="text-slate-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gentiana-mehana-6b63792a1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 transition-colors border border-slate-700"
          >
            <Linkedin size={20} className="text-slate-300" />
          </motion.a>
          <motion.a
            href="mailto:mehanagenta@gmail.com"
            whileHover={{ scale: 1.1, y: -3 }}
            className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 transition-colors border border-slate-700"
          >
            <Mail size={20} className="text-slate-300" />
          </motion.a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Explore My Work <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;