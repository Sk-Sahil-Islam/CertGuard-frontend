import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Mail, QrCode, Layers, ChevronDown } from "lucide-react";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [showArrow, setShowArrow] = useState(true);

  const features = [
    { icon: <QrCode size={32} />, title: "Instant Verification", text: "Scan a QR or enter a code — know the result in seconds." },
    { icon: <Mail size={32} />, title: "Seamless Delivery", text: "Send digital certificates straight to inboxes with one click." },
    { icon: <ShieldCheck size={32} />, title: "Tamper-Proof Security", text: "Built with cryptographic signatures for 100% authenticity." },
    { icon: <Layers size={32} />, title: "Scalable for Any Use Case", text: "From universities to corporates, Certifyr grows with you." }
  ];

  const useCases = [
    { title: "Universities & Colleges", text: "Issue digital diplomas and certificates that are instantly verifiable online." },
    { title: "Corporate Training", text: "Manage employee certifications and training credentials securely." },
    { title: "Professional Associations", text: "Provide authenticated membership certificates to members worldwide." },
    { title: "Workshops & Events", text: "Deliver instant participation certificates for attendees." },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = document.querySelector(".hero").offsetHeight;
      setShowArrow(window.scrollY < heroHeight - 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Certifyr</div>
        <nav>
  <a href="#features" onClick={(e) => { e.preventDefault(); handleScroll("features"); }}>Features</a>
  <a href="#usecases" onClick={(e) => { e.preventDefault(); handleScroll("usecases"); }}>Use Cases</a>
  <a href="#apply" onClick={(e) => { e.preventDefault(); handleScroll("apply"); }}>Apply</a>
  <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About Us</a>
</nav>

      </header>

      {/* Hero Section */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smart, Secure, Seamless Verification.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Certifyr makes issuing and validating digital certificates effortless — built for speed, trust, and scale.
        </motion.p>
        <motion.button
          className="cta-btn"
          onClick={() => navigate("/form")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Verify a Certificate
        </motion.button>

        {showArrow && (
          <motion.div
            className="scroll-arrow"
            onClick={() => handleScroll("features")}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} color="#fff" />
          </motion.div>
        )}
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Certifyr?</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="usecases-wrapper">
        <h2>Use Cases</h2>
        <p>Certifyr works across industries and organizations of all sizes:</p>
        <div className="usecases-container">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              className="usecase-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="usecase-number">{i + 1}</div>
              <h3>{uc.title}</h3>
              <p>{uc.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="apply-section">
        <h2>Apply for Certifyr Services</h2>
        <p>Fill out the form below and our team will reach out to help your organization implement digital verification.</p>
        <form className="apply-form">
          <input type="text" placeholder="Name / Organization" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Describe your requirement" required></textarea>
          <button type="submit" className="cta-btn">Submit Application</button>
        </form>
      </section>

      {/* About Us Section */}
        <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
            A collaborative{" "}
            <a href="https://quantlake.vercel.app/" target="_blank" rel="noopener noreferrer" className="quantlake-link">
            QuantLake
            </a>{" "}
            product designed for scalable verification systems. Certifyr enables organizations to issue and validate digital certificates seamlessly, ensuring authenticity, security, and efficiency. From universities to corporates, our platform empowers users to manage credentials with confidence and speed.
        </p>
        <div className="about-contact">
            <p><strong>Email:</strong> info.quantlake@gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/quantlake-dot" target="_blank" rel="noopener noreferrer">@quantlake</a></p>
        </div>
        </section>



      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Certifyr. Built for secure and scalable verification.</p>
      </footer>
    </div>
  );
}
