import { useState } from "react";
import { VIDEOS } from "../data/site";
import SectionHead from "./SectionHead";

export default function VideosSection() {
  const [i, setI] = useState(0);
  const cur = VIDEOS[i];

  return (
    <section id="media">
      <SectionHead
        num="§ 04 / Media"
        title="Talks, <em>lectures</em> & press."
        blurb="Selected appearances on broadcast television and conference inaugurations from the past few years."
      />
      <div className="media-wrap">
        <div>
          <div className="video-frame">
            <iframe
              key={cur.id}
              src={`https://www.youtube.com/embed/${cur.id}`}
              title={cur.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video-caption">{cur.title}</div>
          <div className="video-meta">
            {cur.source} · {cur.year}
          </div>
        </div>
        <div className="video-list">
          {VIDEOS.map((v, idx) => (
            <button
              key={v.id}
              type="button"
              className={"video-thumb" + (idx === i ? " active" : "")}
              onClick={() => setI(idx)}
            >
              <div
                className="thumb"
                style={{ backgroundImage: `url(https://i.ytimg.com/vi/${v.id}/mqdefault.jpg)` }}
              />
              <div>
                <div className="ttl">{v.title}</div>
                <div className="src">{v.source}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
