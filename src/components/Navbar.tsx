import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${!isHeroVisible ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <img
            src={isHeroVisible ? "/logo-white.svg" : "/logo-green.svg"}
            alt="SKB Logo"
            className="logo-img"
          />
        </div>
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("stats")}>About</button>
          <button onClick={() => scrollToSection("videos")}>Videos</button>
          <button onClick={() => scrollToSection("herbarium")}>Gallery</button>
          <button onClick={() => scrollToSection("works")}>Works</button>
          <button onClick={() => scrollToSection("connect")}>Contact</button>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
