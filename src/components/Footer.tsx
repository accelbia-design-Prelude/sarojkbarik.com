import { EXPERIENCE } from "../data/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="col">
          <h5>Appointments</h5>
          <ul className="timeline">
            {EXPERIENCE.map((e, i) => (
              <li key={i}>
                <span className="yr">{e.yr}</span>
                <div>
                  <div className="role">{e.role}</div>
                  <div className="org">{e.org}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h5>Postal address</h5>
          <p>
            Department of Botany
            <br />
            North-Eastern Hill University
            <br />
            Shillong 793022
            <br />
            Meghalaya, India
          </p>
        </div>
        <div className="col">
          <h5>Direct lines</h5>
          <p>
            <a href="tel:+913642722216">+91 364 272 2216</a>
            <br />
            <a href="mailto:sarojkbarik@gmail.com">sarojkbarik@gmail.com</a>
            <br />
            <a href="https://nehu.ac.in" target="_blank" rel="noopener noreferrer">
              nehu.ac.in ↗
            </a>
          </p>
        </div>
      </div>
      <div className="meta">
        <span>© {new Date().getFullYear()} · All rights reserved</span>
        <span className="meta-name">Saroj Kanta Barik · Field Journal</span>
        <span>Shillong / Lucknow</span>
      </div>
      <div className="meta" style={{ justifyContent: "center", paddingTop: 0 }}>
        <span>
          Designed by{" "}
          <a href="https://accelbia.design" target="_blank" rel="noopener noreferrer">
            accelbia.design
          </a>
        </span>
      </div>
    </footer>
  );
}
