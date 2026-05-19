import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import "../styles/HeroSection.css";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate title with SplitText - animate each div as lines with height mask
    if (titleRef.current) {
      const divs = titleRef.current.querySelectorAll("div");

      // Set initial state with overflow hidden on parent
      titleRef.current.style.overflow = "hidden";

      gsap.set(divs, {
        height: 0,
        y: 20,
        opacity: 1,
      });

      gsap.to(divs, {
        height: "auto",
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 ref={titleRef}>
            <div className="prof">PROF.</div>
            <div>SAROJ</div>
            <div>KANTA</div>
            <div>BARIK</div>
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            botanist and ecologist
          </p>
        </div>
        <div className="hero-right">
          <video
            className="background-video"
            src="/public/BGV.MOV"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
  );
}
