import { useMemo, useState } from "react";
import { SPECIES } from "../data/site";
import SectionHead from "./SectionHead";

export default function HerbariumSection() {
  const [family, setFamily] = useState<string>("all");

  const families = useMemo(() => {
    const m = new Map<string, number>();
    SPECIES.forEach((s) => m.set(s.family, (m.get(s.family) ?? 0) + 1));
    return [["all", SPECIES.length] as [string, number], ...Array.from(m.entries())];
  }, []);

  const filtered = useMemo(
    () => (family === "all" ? SPECIES : SPECIES.filter((s) => s.family === family)),
    [family],
  );

  return (
    <section id="index">
      <SectionHead
        num="§ 01 / Field Index"
        title="New species <em>described</em>."
        blurb="Eight taxa pressed, described and published from Himalayan and north-east Indian fieldwork. Each card links to the original taxonomic paper."
      />
      <div className="field-tabs">
        {families.map(([f, n]) => (
          <button
            key={f}
            type="button"
            className={"chip" + (family === f ? " active" : "")}
            onClick={() => setFamily(f)}
          >
            {f === "all" ? "All families" : f}
            <span className="count">{n}</span>
          </button>
        ))}
      </div>
      <div className="field-grid">
        {filtered.map((s) => (
          <a
            key={s.id}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="field-card"
          >
            <div className="frame">
              <span className="num-tag">№ {s.num}</span>
              {s.isNew ? <span className="new-tag">Holotype</span> : null}
              <img src={s.image} alt={`${s.name} (${s.family}) — ${s.isNew ? "holotype" : "specimen"} collected by Saroj Kanta Barik from ${s.location}, ${s.elev}, ${s.year}`} />
            </div>
            <div className="meta">
              <div>
                <h3>{s.name}</h3>
                <div className="loc">{s.location}</div>
                <div className="arrow">Read paper →</div>
              </div>
              <div className="yr">{s.year}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
