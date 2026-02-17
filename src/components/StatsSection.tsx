import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import gsap from "gsap";
import "../styles/StatsSection.css";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const publicationsRef = useRef<HTMLSpanElement>(null);
  const experienceRef = useRef<HTMLSpanElement>(null);
  const citationsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (!entry?.isIntersecting) return;

      if (statsRef.current) {
        gsap.from(statsRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (publicationsRef.current) {
        const countUp = new CountUp(publicationsRef.current, 190, {
          duration: 2,
        });
        if (!countUp.error) {
          countUp.start();
        }
      }

      if (experienceRef.current) {
        const countUp = new CountUp(experienceRef.current, 35, {
          duration: 2,
        });
        if (!countUp.error) {
          countUp.start();
        }
      }

      if (citationsRef.current) {
        const countUp = new CountUp(citationsRef.current, 5000, {
          duration: 2.5,
        });
        if (!countUp.error) {
          countUp.start();
        }
      }

      observer.unobserve(sectionRef.current!);
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="stats-section" ref={sectionRef}>
      <div ref={statsRef} className="stats-container">
        <div className="stat-item">
          <h2 className="stat-number">
            <span ref={publicationsRef}>0</span>
            <span className="stat-suffix">+</span>
          </h2>
          <p className="stat-label">Publications</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">
            <span ref={experienceRef}>0</span>
            <span className="stat-suffix">+</span>
          </h2>
          <p className="stat-label">Years of Research Experience</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">
            <span ref={citationsRef}>0</span>
            <span className="stat-suffix">+</span>
          </h2>
          <p className="stat-label">Citations</p>
        </div>
      </div>
      {/* <a
        className="stats-cta"
        href="#works"
        aria-disabled="true"
        tabIndex={-1}
        onClick={(e) => e.preventDefault()}
      >
        Explore Publications & Works
      </a> */}
    </section>
  );
}
