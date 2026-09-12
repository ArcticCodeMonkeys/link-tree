import React, { useEffect, useRef } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import profileImage from "./assets/profile.jpg";
import theatreDemo from "./assets/TheatreDemo.mp4";
import wikiDemo from "./assets/HallowcrestWikiDemo.mp4";
import pyGuideDemo from "./assets/PyGuideAIDemo.mp4";
import resume from "./assets/Resume.pdf";

const projects = [
  {
    number: "01",
    title: "Theatre",
    eyebrow: "Collaborative virtual tabletop",
    video: theatreDemo,
    tags: ["TypeScript", "Socket.IO", "SQL.js", "Architecture"],
    description: "Theatre is an open-source, browser-based virtual tabletop for Ruin, built as a TypeScript monorepo with a React client, Express and Socket.IO server, and shared rules engine. It combines layered tactical maps, character sheets, image libraries, chat, live presence, targeting geometry, and reaction prompts in one system. A server-authoritative data layer persists users, sheets, images, map state, and messages, while Google OAuth and per-user ownership support multiplayer sessions. The architecture is designed for shared state, session recovery, and consistent rule processing across connected clients.",
  },
  {
    number: "02",
    title: "Hallowcrest Wiki",
    eyebrow: "A living campaign archive",
    video: wikiDemo,
    tags: ["Python", "Quartz", "Content pipeline", "Automation"],
    description: "Hallowcrest is a linked campaign knowledge base for a fantasy tabletop world, organizing factions, locations, people, items, history, and plot material into a player-facing wiki. The vault is edited in Obsidian and supported by a publishing workflow that deploys only entries marked for release. A censoring tool keeps unrevealed information private, turning a large world-building archive into a controlled, maintainable content pipeline.",
  },
  {
    number: "03",
    title: "PyGuide AI",
    eyebrow: "Learn Python by doing",
    video: pyGuideDemo,
    tags: ["JavaScript", "OpenAI API", "Judge0", "JSON"],
    description: "PyGuide.ai is an interactive Python learning platform that combines gamified progression with practical programming challenges. It delivers custom questions and built-in test cases across fundamentals and data structures, runs code through a Judge0-powered IDE, and uses an OpenAI assistant to provide contextual hints without taking the problem away from the learner. Achievements, badges, leaderboards, and unlockable PyGuides turn a structured exercise system into a motivating learning loop.",
  },
];

function ProjectVideo({ src, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-frame">
      <video ref={videoRef} src={src} muted loop playsInline preload="metadata" aria-label={`${title} demo`} />
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#top" aria-label="Carter Reid home"><span>CR</span> / portfolio</a>
        <div className="nav-links"><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#about">About</a><details className="contact-menu"><summary className="nav-contact">Let&apos;s talk <span aria-hidden="true">⌄</span></summary><div className="contact-dropdown"><a href="mailto:carterreid11@gmail.com"><strong>Personal Email</strong><span>carterreid11@gmail.com</span></a><a href="mailto:cereid@uwaterloo.ca"><strong>University Email</strong><span>cereid@uwaterloo.ca</span></a><a href="https://www.linkedin.com/in/carter-reid-a98443254/" target="_blank" rel="noreferrer"><strong>LinkedIn</strong><span>Open profile ↗</span></a><a href="tel:+16139156675"><strong>Phone Number</strong><span>(613) 915 6675</span></a></div></details></div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal"><p className="kicker"><span className="status-dot" /> Backend developer / systems thinker</p><h1>Creative ideas.<br /><em>Serious systems.</em></h1><p className="hero-intro">I&apos;m Carter, a backend developer focused on networking, security, databases, and architecture design. I build the reliable systems that let ambitious products feel effortless to use.</p><a className="text-link" href="#work">Explore the work <span aria-hidden="true">↓</span></a></div>
        <div className="hero-portrait reveal"><div className="portrait-ring"><img src={profileImage} alt="Carter Reid" /></div><p>Based in Waterloo, CA</p></div>
      </section>

      <section className="work shell" id="work"><div className="section-heading"><p className="kicker">Systems, products, and experiments</p><h2>Selected work</h2></div>
        <div className="project-list">{projects.map((project) => <article className="project reveal" key={project.title}><div className="project-meta"><span className="project-number">{project.number}</span><div><p className="kicker">{project.eyebrow}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div><ProjectVideo src={project.video} title={project.title} /></article>)}</div>
      </section>

      <section className="experience shell" id="experience"><div className="section-heading"><p className="kicker">Where I&apos;ve put the work into practice</p><h2>Experience</h2></div><div className="experience-list"><article className="experience-item"><div className="experience-date">2025 — 2026</div><div><h3>Backend Developer <span>/ CIBC</span></h3><p>Designed reusable Go backend libraries and API infrastructure running in Docker and OpenShift for secure internal payment services. Built networking frameworks for concurrency, asynchronous processing, retries, failover, throttling, and distributed service communication.</p><p>Developed a Store and Forward system supporting millions of clients and traffic up to 600 TPS, using persistent queues and replay mechanisms with Azure-hosted PostgreSQL, OAuth2, and JWT validation. Created stress-testing, mock-client, and observability tooling to improve latency, throughput, CPU efficiency, and reliability under traffic spikes.</p></div></article><article className="experience-item"><div className="experience-date">2025</div><div><h3>Software Developer <span>/ Tuq</span></h3><p>Developed configurable forms, question flows, and subscription management for a pharmacy platform. Integrated an AI chatbot into a mobile mental-wellness app with contextual history, voice recognition, and text-to-speech, while building reusable React components across six concurrent projects.</p></div></article><article className="experience-item"><div className="experience-date">2024</div><div><h3>Sales Marketing Coordinator <span>/ Electrolux</span></h3><p>Built Python and Pandas automation to populate product emails from database data, plus VBA tooling to send thousands of personalized messages across a large campaign.</p></div></article></div></section>

      <section className="about shell" id="about"><div><p className="kicker">A little context</p><h2>Architecture with<br /><em>room for imagination.</em></h2></div><div className="about-copy"><p>I enjoy the boundary between creative products and serious engineering: designing the APIs, data models, networking layers, and security controls that make an idea dependable at scale.</p><p>My experience spans Go, C, C++, C#, Java, Python, SQL, Bash, Node.js, PostgreSQL, Docker, OpenShift, WebSockets, OAuth2, JWT, distributed systems, asynchronous processing, observability, and load testing.</p><p>Whether I&apos;m building a multiplayer game system or automating a real business workflow, I care about clear boundaries, resilient state, and architecture that can grow without losing its character.</p><div className="social-links"><a href="https://www.linkedin.com/in/carter-reid-a98443254/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn <span>↗</span></a><a href="https://github.com/ArcticCodeMonkeys" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub <span>↗</span></a><a href={resume} download="Resume_Carter.pdf">Download resume <span>↓</span></a></div></div></section>

      <footer className="footer shell"><span>© 2026 Carter Reid</span><span>Built with curiosity <b>✦</b></span></footer>
    </main>
  );
}

export default App;