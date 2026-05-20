import { FELLOWSHIPS, AWARDS, SERVICE } from "../data/site";
import SectionHead from "./SectionHead";

export default function Honours() {
  return (
    <section id="honours">
      <SectionHead
        num="§ 03 / Honours"
        title="Fellowships <em>&amp;</em> awards."
        blurb="Elected Fellow of all six major Indian science academies and the Linnean Society of London. Awards from Indian botanical and forestry bodies."
      />
      <div className="honours">
        <div className="honour-col">
          <h4>
            <span>Fellowships elected</span>
            <span className="ct">{FELLOWSHIPS.length}</span>
          </h4>
          <ul>
            {FELLOWSHIPS.map((f, i) => (
              <li key={i}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="name">
                  {f.name}
                  <em>{f.full}</em>
                </span>
                <span className="yr">{f.yr}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="honour-col">
          <h4>
            <span>Awards received</span>
            <span className="ct">{AWARDS.length}</span>
          </h4>
          <ul>
            {AWARDS.map((a, i) => (
              <li key={i}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="name">
                  {a.name}
                  <em>{a.org ?? " "}</em>
                </span>
                <span className="yr">{a.yr}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-wrap">
        <div className="service-card">
          <h4>Service &amp; advisory roles</h4>
          <ul>
            {SERVICE.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
