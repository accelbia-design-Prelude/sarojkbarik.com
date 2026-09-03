import SectionHead from "./SectionHead";

export default function ConnectSection() {
  return (
    <section id="connect">
      <SectionHead
        num="§ 05 / Connect"
        title="Get <em>in touch</em>."
        blurb="For collaborations, lectures and press enquiries — the most direct channels:"
      />
      <div className="connect-card">
        <div className="stamp">
          Office
          <br />
          NEHU
          <br />
          Shillong
        </div>
        <div className="connect-grid">
          <div>
            <h2>
              Always glad to <em>hear from</em>
              <br />a fellow naturalist.
            </h2>
            <p>
              Email is the fastest channel; LinkedIn and X are checked weekly.
            </p>
          </div>
          <div className="connect-links">
            <a className="connect-link" href="mailto:sarojkbarik@gmail.com">
              <span>sarojkbarik@gmail.com</span>
              <span className="lbl">Email →</span>
            </a>
            <a
              className="connect-link"
              href="https://www.linkedin.com/in/saroj-barik-01448ba1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>/in/saroj-barik-01448ba1</span>
              <span className="lbl">LinkedIn →</span>
            </a>
            <a
              className="connect-link"
              href="https://x.com/sarojkbarik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>@sarojkbarik</span>
              <span className="lbl">X (Twitter) →</span>
            </a>
            <a
              className="connect-link"
              href="https://scholar.google.co.in/citations?user=4ilAyWsAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Google Scholar</span>
              <span className="lbl">Citations →</span>
            </a>
            <a
              className="connect-link"
              href="https://en.wikipedia.org/wiki/Saroj_Kanta_Barik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Wikipedia profile</span>
              <span className="lbl">Biography →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
