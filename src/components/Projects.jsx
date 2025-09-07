import "../Styles/Project.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "BookNGo – Event Booking Platform",
    description: [
      "Full-stack platform with Admin & User dashboards.",
      "Event lifecycle management with CRUD and real-time updates.",
      "Frontend & backend deployed on Vercel with CI/CD.",
      "Modular architecture using React, Node.js, Express, PostgreSQL.",
      "Responsive UI with reusable components and error handling.",
      "Secured APIs with authentication and validation middleware.",
      "Optimized PostgreSQL queries for fast data retrieval.",
      "Version control with structured branching and PR reviews.",
      "Ready for future billing & invoice features.",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    liveDemo: "https://bookngofrontend.vercel.app/",
    github: "https://github.com/PrAsAnTh28402?tab=repositories",
    designDocs:
      "https://drive.google.com/drive/folders/1-fO_KMSCx3M50sL8fgxNegHtxVoc4yGM?usp=drive_link",
    route: "/projects/BookNGo", // add route for navigation
    image: "/BookNGo_Logo.png",
  },
];

export default function Projects() {
  const navigate = useNavigate(); // Correct hook usage

  const handleOnClick = (route) => {
    navigate(route); // Navigate to the project page
  };

  return (
    <section id="projects" className="projects-section">
      {/* Use the same class as MY SKILLS heading */}
      <h2 className="section-title">MY PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card landscape cursor-pointer"
            onClick={() => handleOnClick(project.route)}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <button className="project-more-info">
                Click here for more info ⬇️
              </button>
            </div>

            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <ul className="project-desc">
                {project.description.map((point, i) => (
                  <li key={i} className="desc-point">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-live"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-github"
                >
                  GitHub
                </a>
                <a
                  href={project.designDocs}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-docs"
                >
                  Design Docs
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
