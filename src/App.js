import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import Background3D from './components/Background3D';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="relative">
      <ParticleBackground />
      <Background3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-gray-400 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2024 Alex Chen. Crafted with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;