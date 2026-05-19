import { useCallback, useEffect, useState } from "react";
import { SPECIES } from "../data/site";

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const cur = SPECIES[idx];

  const next = useCallback(() => setIdx((i) => (i + 1) % SPECIES.length), []);
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + SPECIES.length) % SPECIES.length),
    [],
  );

  useEffect(() => {
    const t = window.setInterval(next, 6500);
    return () => window.clearInterval(t);
  }, [next]);

  const onJumpIndex = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("index");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero">
      <div className="hero-meta">
        <span className="crosshair">b. 1965, Odisha · author abbrev. ‘Barik’</span>
        <span>25°34′N · 91°53′E · Shillong, Meghalaya</span>
      </div>

      <div className="hero-left">
        <h1>
          <span className="prof">Prof.</span>
          <span className="ln">Saroj Kanta</span>
          <span className="ln italic">Barik.</span>
        </h1>
        <div className="hero-role">
          <span>Botanist</span>
          <span>Ecologist</span>
          <span>Environmental Scientist</span>
        </div>
        <p className="hero-blurb">
          A botanist, ecologist and academic administrator working across the
          Himalaya and north-east India — on <em>plant ecology</em>,
          <em> biodiversity conservation</em> and the <em>bioprospection</em> of
          medicinal flora. Currently Dean, School of Life Sciences at NEHU
          Shillong; formerly Director of CSIR-NBRI and CSIR-IITR, Lucknow.
        </p>
        <a className="hero-cta" href="#index" onClick={onJumpIndex}>
          Browse the field index <span className="arr">↓</span>
        </a>
      </div>

      <div className="hero-right">
        <div className="specimen-plate">
          <span className="holotype">Holotype</span>
          <img key={cur.id} src={cur.image} alt={cur.name} />
        </div>
        <div className="specimen-strip">
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--ink-soft)",
                textTransform: "uppercase",
              }}
            >
              Plate №{cur.num}
            </div>
            <div className="latin">{cur.name}</div>
          </div>
          <div style={{ textAlign: "center", lineHeight: 1.4 }}>
            <div>{cur.location}</div>
            <div style={{ color: "var(--moss)" }}>
              {cur.elev} · {cur.year}
            </div>
          </div>
          <div className="specimen-counter">
            <button type="button" onClick={prev} aria-label="Previous specimen">
              ‹
            </button>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "var(--ink-soft)",
              }}
            >
              {String(idx + 1).padStart(2, "0")} /{" "}
              {String(SPECIES.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={next} aria-label="Next specimen">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
