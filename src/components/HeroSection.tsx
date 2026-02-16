import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import "../styles/HeroSection.css";

gsap.registerPlugin(SplitText);

declare global {
  interface Window {
    VANTA?: {
      CELLS: (options: object) => object;
    };
  }
}

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Wait for Vanta to load
    const initVanta = () => {
      if (window.VANTA && vantaRef.current) {
        try {
          window.VANTA.CELLS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            color1: 0x34a053,
            color2: 0xc5c58a,
            size: 1,
          });
        } catch (e) {
          console.error("Vanta initialization error:", e);
        }
      } else if (!window.VANTA) {
        // Retry if VANTA not loaded yet
        setTimeout(initVanta, 100);
      }
    };

    // Start initialization with a small delay to ensure scripts are loaded
    const timer = setTimeout(initVanta, 100);

    return () => {
      clearTimeout(timer);
    };
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
          <div className="vanta-frame" ref={vantaRef}></div>
        </div>
      </div>
    </section>
  );
}
