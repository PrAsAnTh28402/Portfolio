import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Hi, I’m Dev Prasath</h1>
      <p className="hero-subtitle">
        A passionate <span className="font-semibold">Software Engineer</span> skilled in React, Node.js, GoLang & PostgreSQL — 
        building fast, scalable, and user-friendly applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          🚀 View Projects
        </a>

        <a href="#contact" className="btn btn-outline">
          ✉️ Contact Me
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-linkedin"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="icon"
          />
          LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-github"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="icon"
          />
          GitHub
        </a>
      </div>

      <div className="scroll-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
