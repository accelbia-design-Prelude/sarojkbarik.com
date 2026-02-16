import { useEffect, useRef } from "react";
import gsap from "gsap";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import "../styles/ConnectSection.css";

export default function ConnectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });
      }
      observer.unobserve(sectionRef.current!);
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="connect" className="connect-section" ref={sectionRef}>
      <div ref={contentRef} className="connect-content">
        <h2>Let's Connect</h2>
        <p>Get in touch with me through any of these platforms</p>
        <div className="connect-buttons">
          <a href="mailto:sarojkbarik@gmail.com" className="connect-btn email">
            <span className="icon" aria-hidden="true">
              <EmailIcon fontSize="inherit" />
            </span>
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/saroj-barik-01448ba1/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn linkedin"
          >
            <span className="icon" aria-hidden="true">
              <LinkedInIcon fontSize="inherit" />
            </span>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/sarojkbarik"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn x"
          >
            <span className="icon" aria-hidden="true">
              <XIcon fontSize="inherit" />
            </span>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}
