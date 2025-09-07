import "../styles/contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Hide the message after 3 sec
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">GET IN TOUCH</h2>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3 className="contact-subtitle">Reach me at:</h3>
          <p className="contact-item">
            <FaEnvelope className="contact-icon" /> dev.prasath2842@gmail.com
          </p>
          <p className="contact-item">
            <FaPhone className="contact-icon" /> 9789581669
          </p>
          <p className="contact-item">
            <FaLinkedin className="contact-icon" />{" "}
            <a
              href="https://www.linkedin.com/in/dev-prasath-rp"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className="contact-item">
            <FaGithub className="contact-icon" />{" "}
            <a
              href="https://github.com/PrAsAnTh28402"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3 className="contact-subtitle">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
          {submitted && <p className="success-msg">✅ Message Sent!</p>}
        </div>
      </div>
    </section>
  );
}
