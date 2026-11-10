import { useState } from 'react';
import ProjectCard from './components/ProjectCard.jsx';
import projects from './data/projects.js';

const toolGroups = [
  { number: '01', title: 'Frontend', lines: <>HTML · CSS · JavaScript<br />React · Next.js · Tailwind</> },
  { number: '02', title: 'Backend & data', lines: <>Node.js · Express.js · C#<br />MySQL · MongoDB · Supabase</> },
  { number: '03', title: 'Automation', lines: <>n8n · Workflow design<br />Process automation</> },
  { number: '04', title: 'Working together', lines: <>Git · GitHub · Figma<br />Postman · Problem solving</> },
];

const education = [
  {
    label: 'NOW',
    degree: 'MSc, Computer Science & Engineering',
    detail: 'Data Science & AI · University for Business and Technology (UBT)',
    symbol: '↗',
  },
  {
    label: 'DEGREE',
    degree: 'BSc, Computer Science & Engineering',
    detail: 'University “Isa Boletini” · Mitrovica, Kosovo',
    symbol: '✳',
  },
  {
    label: 'TRAINING',
    degree: 'Web Application Development',
    detail: 'ICT & Digital Skills Training · Practical web development',
    symbol: '⌘',
  },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navClass = `nav-links${menuOpen ? ' is-open' : ''}`;

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Gentiana Mehana, home">GM<span>.</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <div className={navClass} id="nav-links">
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-hello" href="mailto:mehanagenta@gmail.com">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="availability-dot" /> SOFTWARE DEVELOPER <i>·</i> KOSOVO
        </p>
        <h1>Good ideas<br />deserve <em>good</em><br /><span className="hero-last">software.</span></h1>
        <div className="hero-bottom">
          <p>I’m <strong>Gentiana</strong> — a developer and Data Science &amp; AI student making digital products that solve everyday problems.</p>
          <a className="round-link" href="#work" aria-label="Explore selected projects">↓</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/GentianaMehana" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>
          <a href="https://www.linkedin.com/in/gentiana-mehana-6b63792a1" target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a>
          <span>BASED IN VUSHTRRI</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Prishtina architecture, featured in Elsewhere — Prishtina">
        <img src="/assets/elsewhere-library.jpg" alt="National Library of Kosovo in Prishtina" fetchPriority="high" />
        <div className="hero-image-shade" />
        <div className="hero-image-label"><span>MY CORNER OF THE WORLD</span><b>Prishtina, Kosovo</b></div>
        <span className="hero-image-index">42°39'45.8"N<br />21°09'43.5"E</span>
        <span className="hero-image-stamp">MADE WITH<br />CURIOSITY <i>✳</i></span>
      </div>
      <div className="hero-index">
        <span>01</span>
        <span>PORTFOLIO / 2026</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="wrap about-layout">
        <div className="about-side">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <span className="about-monogram">G<span>.</span>M</span>
          <span className="about-location">VUSHTRRI<br />KOSOVO</span>
        </div>
        <div className="about-main">
          <h2>Technology should feel<br />like a <em>helping hand.</em></h2>
          <p>I’m a Computer Science and Engineering graduate, now pursuing a master’s degree in Data Science and AI. I like bringing thoughtful interfaces, reliable systems, and clear problem solving together.</p>
          <p>My work spans frontend and backend development, databases, and workflow automation. I’m especially drawn to projects that make important services easier to access.</p>
          <a className="about-link" href="mailto:mehanagenta@gmail.com">
            Have something in mind? <span>Let’s talk ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="toolkit-section section wrap" id="toolkit">
      <div className="section-head toolkit-head">
        <div>
          <p className="eyebrow">MY EVERYDAY TOOLKIT</p>
          <h2>Curious by<br /><em>default.</em></h2>
        </div>
        <p className="section-note">The tools change. The goal stays the same: build useful, dependable experiences.</p>
      </div>
      <div className="toolkit-grid">
        {toolGroups.map((tool) => (
          <div className="tool-block" key={tool.number}>
            <span>{tool.number}</span>
            <h3>{tool.title}</h3>
            <p>{tool.lines}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey-section section" id="journey">
      <div className="wrap journey-layout">
        <div>
          <p className="eyebrow">THE JOURNEY SO FAR</p>
          <h2>Learn it.<br /><em>Build it.</em></h2>
        </div>
        <div className="journey-list">
          {education.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <div><h3>{item.degree}</h3><p>{item.detail}</p></div>
              <b aria-hidden="true">{item.symbol}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section wrap" id="contact">
      <div className="contact-card">
        <div className="contact-decoration" aria-hidden="true">✳</div>
        <p className="eyebrow">HAVE A GOOD IDEA?</p>
        <h2>Let’s make<br /><em>it happen.</em></h2>
        <p className="contact-copy">Have a project in mind or want to work together? I’d love to hear from you.</p>
        <a className="contact-button" href="mailto:mehanagenta@gmail.com">
          mehanagenta@gmail.com <span>↗</span>
        </a>
        <div className="contact-links">
          <a href="https://github.com/GentianaMehana" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/gentiana-mehana-6b63792a1" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <section className="work-section section wrap" id="work">
          <div className="section-head">
            <div><p className="eyebrow">A FEW THINGS I’VE MADE</p><h2>Selected<br /><em>projects.</em></h2></div>
            <p className="section-note">Useful ideas, shaped into real products. Pick one and take a look.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>
        <About />
        <Toolkit />
        <Journey />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a className="brand" href="#top">GM<span>.</span></a>
          <span>DESIGNED &amp; BUILT WITH CARE</span>
          <span>© <span id="year">{new Date().getFullYear()}</span> GENTIANA MEHANA</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
