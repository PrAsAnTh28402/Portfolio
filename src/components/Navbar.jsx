import "../styles/Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate back to homepage and pass the section ID
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // Already on homepage, just scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <h2
          className="logo"
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#37353E",
          }}
        >
          Dev Prasath | Full-Stack Developer
        </h2>
        <ul className="nav-links">
          <li>
            <button onClick={() => handleNavClick("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
