import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./App.css";

import Topbar from "./components/Topbar";
import Rail from "./components/Rail";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import HerbariumSection from "./components/HerbariumSection";
import WorksSection from "./components/WorksSection";
import Honours from "./components/Honours";
import VideosSection from "./components/VideosSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

import { NAV } from "./data/site";

/** Tracks which section is centred in the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string>("top");
  useEffect(() => {
    const targets = ["top", ...NAV.map((n) => n.id)];
    const els = targets
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) {
      document.body.classList.add("touch-scroll");
    } else {
      document.body.classList.remove("touch-scroll");
    }

    if (!scrollRef.current || locomotiveRef.current || isTouch) return;

    locomotiveRef.current = new LocomotiveScroll({
      lenisOptions: {
        wrapper: scrollRef.current,
        content: contentRef.current ?? scrollRef.current,
        lerp: 0.08,
      },
    });

    return () => {
      locomotiveRef.current?.destroy();
      locomotiveRef.current = null;
      document.body.classList.remove("touch-scroll");
    };
  }, []);

  const active = useActiveSection();

  const onJump = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Topbar active={active} onJump={onJump} />
      <Rail active={active} onJump={onJump} />

      <div className="scroll-container" data-scroll-container ref={scrollRef}>
        <div className="scroll-content" ref={contentRef}>
          <div data-scroll-section>
            <HeroSection />
          </div>
          <div data-scroll-section>
            <StatsSection />
          </div>
          <div data-scroll-section>
            <HerbariumSection />
          </div>
          <div data-scroll-section>
            <WorksSection />
          </div>
          <div data-scroll-section>
            <Honours />
          </div>
          <div data-scroll-section>
            <VideosSection />
          </div>
          <div data-scroll-section>
            <ConnectSection />
          </div>
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
