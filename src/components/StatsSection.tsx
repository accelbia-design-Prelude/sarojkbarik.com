import { useEffect, useRef, useState } from "react";

/** Eased count-up. Idle until `run` flips true. */
function useCountUp(target: number, run: boolean, dur = 1600): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, dur]);
  return val;
}

/** Bio strip — short editorial blurb + four stat counters. */
export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const pubs = useCountUp(200, seen);
  const cites = useCountUp(5405, seen);
  const yrs = useCountUp(35, seen);
  const taxa = useCountUp(8, seen);

  return (
    <section id="stats">
      <div className="biostrip" ref={ref}>
        <p className="biostrip-lead">
          A botanist with a <em>fieldwork-first</em> practice — describing new
          Himalayan species, modelling ecosystem services and building the
          institutional scaffolding for Indian plant science.
        </p>
        <div className="stat">
          <div className="num">
            {pubs}
            <sup>+</sup>
          </div>
          <div className="lbl">
            Peer-reviewed
            <br />
            publications
          </div>
        </div>
        <div className="stat">
          <div className="num">
            {cites.toLocaleString()}
            <sup>+</sup>
          </div>
          <div className="lbl">
            Career
            <br />
            citations
          </div>
        </div>
        <div className="stat">
          <div className="num">
            {yrs}
            <sup>+</sup>
          </div>
          <div className="lbl">
            Years of
            <br />
            research
          </div>
        </div>
        <div className="stat">
          <div className="num">{taxa}</div>
          <div className="lbl">
            New species
            <br />
            described
          </div>
        </div>
      </div>
    </section>
  );
}
