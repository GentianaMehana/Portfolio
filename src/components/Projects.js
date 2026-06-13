import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Stethoscope, GraduationCap } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "MedPal - Healthcare Platform",
      description: "Digital platform for managing clinics, doctors, and patients with role-based access, appointment scheduling, and medical records management.",
      icon: Stethoscope,
      tags: ["React 19", "Supabase", "Bootstrap 5", "Chart.js", "SMTP"],
      category: "featured",
      github: "https://github.com/GentianaMehana/MedPal-Platform/tree/master",
      demo: "https://medpalplatform.netlify.app/",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 2,
      title: "Bursat - Scholarship Platform",
      description: "Centralized platform aggregating international scholarships for students with automated data collection and real-time updates.",
      icon: GraduationCap,
      tags: ["React", "Tailwind CSS", "Supabase", "n8n", "Analytics"],
      category: "featured",
      github: "https://github.com/GentianaMehana/bursat-app",
      demo: "https://bursat.netlify.app/",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Featured', value: 'featured' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mb-12 max-w-2xl mx-auto"
        >
          Turning complex problems into elegant solutions
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === f.value
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;