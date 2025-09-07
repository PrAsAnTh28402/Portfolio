import "../styles/About.css";
import profileImg from "../../public/me2.jpg"

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m Dev Prasath RP, a passionate Software Engineer with expertise in
          Full-Stack Development using React, Node.js, GoLang, and PostgreSQL.
          I build fast, scalable, and user-friendly applications.
        </p>
        <ul className="about-list">
          <li>💻 Full-Stack Web Development</li>
          <li>⚡ Performance Optimization</li>
          <li>🎯 Clean and Maintainable Code</li>
          <li>🚀 Passion for Learning New Technologies</li>
        </ul>
      </div>
      <div className="about-right">
        <img
          src={profileImg}
          alt="Dev Prasath RP"
          className="about-photo"
        />
      </div>
    </section>
  );
}
