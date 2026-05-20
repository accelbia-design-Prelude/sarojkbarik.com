import { useEffect, useState } from "react";
import { NAV } from "../data/site";

type Props = {
  active: string;
  onJump: (id: string) => void;
};

export default function Topbar({ active, onJump }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Works with both native scroll and LocomotiveScroll: when the hero leaves the
    // viewport, the bar enters the "scrolled" state. Falls back to window.scrollY
    // if the hero isn't found yet (first paint).
    const hero = document.getElementById("top");
    if (!hero) {
      const onScroll = () => setScrolled(window.scrollY > 80);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-90px 0px 0px 0px", threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header className={"topbar" + (scrolled ? " scrolled" : "")}>
      <button
        type="button"
        className="topbar-brand"
        onClick={() => onJump("top")}
        aria-label="Back to top"
      >
        <span className="topbar-mark">b</span>
        <span className="topbar-name">
          <em>Prof.</em>Saroj Kanta Barik
        </span>
      </button>
      <nav className="topbar-nav" aria-label="Primary">
        {NAV.map((n, i) => (
          <span key={n.id} style={{ display: "inline-flex", alignItems: "center" }}>
            <button
              type="button"
              className={active === n.id ? "active" : ""}
              onClick={() => onJump(n.id)}
            >
              {n.label}
            </button>
            {i < NAV.length - 1 ? <span className="divider" /> : null}
          </span>
        ))}
      </nav>
    </header>
  );
}
