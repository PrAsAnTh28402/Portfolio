import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BookNGo from "./Pages/BookNGo";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/BookNGo" element={<BookNGo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
