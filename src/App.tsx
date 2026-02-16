import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./App.css";
import HeroSection from "./components/HeroSection";
import WorksSection from "./components/WorksSection";
import StatsSection from "./components/StatsSection";
import VideosSection from "./components/VideosSection";
import HerbariumSection from "./components/HerbariumSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import { StickyMenuBox } from "./components/StickyMenuBox";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current || locomotiveRef.current) return;

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
    };
  }, []);

  return (
    <>
      <StickyMenuBox />
      <div className="scroll-container" data-scroll-container ref={scrollRef}>
        <div className="scroll-content" ref={contentRef}>
          <div data-scroll-section>
            <HeroSection />
          </div>
          <div data-scroll-section>
            <WorksSection />
          </div>
          <div data-scroll-section>
            <StatsSection />
          </div>
          <div data-scroll-section>
            <VideosSection />
          </div>
          <div data-scroll-section>
            <HerbariumSection />
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
