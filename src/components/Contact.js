import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const result = await emailjs.sendForm(
        'portfolio',              // Service ID
        'template_vtrn9ve',       // Template ID
        formRef.current,
        'gQpAgMUMEyNxbkcQa'       // Public Key
      );
      
      if (result.text === 'OK') {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Error:', err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, text: 'mehanagenta@gmail.com', label: 'Email', link: 'mailto:mehanagenta@gmail.com' },
    { icon: Phone, text: '+383 49 424 78', label: 'Phone', link: 'tel:+3834942478' },
    { icon: MapPin, text: 'Vushtrri, Kosovo', label: 'Location' },
    { icon: Github, text: 'GentianaMehana', label: 'GitHub', link: 'https://github.com/GentianaMehana' },
    { icon: Linkedin, text: 'Gentiana Mehana', label: 'LinkedIn', link: 'https://www.linkedin.com/in/gentiana-mehana-6b63792a1' }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind? Let's work together
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg">
              I'm always interested in hearing about new opportunities, 
              creative projects, or just having a chat. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <item.icon className="text-indigo-500" size={22} />
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-12"
              >
                <AlertCircle size={64} className="text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong!</h3>
                <p className="text-gray-500">Please try again or contact me directly via email.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;