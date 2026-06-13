import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Bot, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend', items: 'React, Next.js, Tailwind, Bootstrap', color: 'from-indigo-500 to-purple-500' },
    { icon: Server, name: 'Backend', items: 'Node.js, Express, C#', color: 'from-purple-500 to-pink-500' },
    { icon: Database, name: 'Database', items: 'MySQL, MongoDB, Supabase', color: 'from-pink-500 to-rose-500' },
    { icon: Bot, name: 'Automation', items: 'n8n, Workflows', color: 'from-indigo-500 to-blue-500' },
    { icon: Layout, name: 'Design', items: 'Figma, UI/UX', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, name: 'Tools', items: 'Git, Postman, VS Code', color: 'from-cyan-500 to-teal-500' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mb-12 max-w-2xl mx-auto"
        >
          Passionate developer creating meaningful digital experiences
        </motion.p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-indigo-500" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>
              <p className="text-gray-600">
                <strong>BSc in Computer Science and Engineering</strong><br />
                University "Isa Boletini", Mitrovica, Kosovo
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-indigo-500" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Certifications</h3>
              </div>
              <p className="text-gray-600">
                ICT & Digital Skills Training on Web Application Development
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Teamwork', 'Time Management', 'Communication', 'Analytical Thinking'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mx-auto mb-3`}>
                    <skill.icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                  <p className="text-gray-500 text-xs">{skill.items}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;