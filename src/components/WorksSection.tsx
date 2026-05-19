import { Fragment, useMemo, useState } from "react";
import { PUBLICATIONS } from "../data/site";
import SectionHead from "./SectionHead";

const FILTERS = [
  { id: "all",  label: "All recent" },
  { id: "2026", label: "2026" },
  { id: "2025", label: "2025" },
  { id: "2024", label: "2024" },
  { id: "2023", label: "2023" },
] as const;

/** Bold the senior author's surname in the author string. */
function renderAuthors(s: string) {
  return s.split(/(Barik, S\.K\.\*?)/g).map((part, i) =>
    part.startsWith("Barik") ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>,
  );
}

export default function WorksSection() {
  const [filt, setFilt] = useState<string>("all");

  const rows = useMemo(
    () => (filt === "all" ? PUBLICATIONS : PUBLICATIONS.filter((p) => String(p.yr) === filt)),
    [filt],
  );

  return (
    <section id="publications">
      <SectionHead
        num="§ 02 / Publications"
        title="Selected <em>recent</em> writing."
        blurb="A live selection drawn from Google Scholar (2023–26) — spanning cyanide bioremediation, alpine genetics, forest bioeconomy, biodiversity governance and ethnopharmacology."
      />
      <div className="pubs-wrap">
        <div className="pubs-filters">
          <span className="label">Filter</span>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={"chip" + (filt === f.id ? " active" : "")}
              onClick={() => setFilt(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        {rows.map((p, i) => (
          <a
            key={i}
            className="pub-row"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="yr">{p.yr}</div>
            <div>
              <div className="title">{p.title}</div>
              <div className="authors">{renderAuthors(p.authors)}</div>
            </div>
            <div className="journal">
              {p.journal}
              <span className="if">IF · {p.if.toFixed(1)}</span>
            </div>
            <div className="arrow">↗</div>
          </a>
        ))}
        <a
          className="pubs-more"
          href="https://scholar.google.co.in/citations?user=4ilAyWsAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full list on Google Scholar &nbsp;→
        </a>
      </div>
    </section>
  );
}
