import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-header">
          <h2 className="footer-title">
            <div className="prof">PROF.</div>
            <div>SAROJ</div>
            <div>KANTA</div>
            <div>BARIK</div>
          </h2>
        </div>
        <div className="footer-columns">
          <div className="footer-column footer-column-left">
            <div className="footer-experience">
              <div className="footer-experience-list">
                <div className="footer-experience-item">
                  <span className="footer-logo" aria-hidden="true">
                    NEHU
                  </span>
                  <div>
                    <p className="footer-org">North-Eastern Hill University</p>
                    <p className="footer-role">
                      Dean, School of Life Sciences (Aug 2025–Present)
                    </p>
                  </div>
                </div>
                <div className="footer-experience-item">
                  <span className="footer-logo" aria-hidden="true">
                    NBRI
                  </span>
                  <div>
                    <p className="footer-org">
                      CSIR-National Botanical Research Institute, Lucknow
                    </p>
                    <p className="footer-role">Director (Nov 2016–Nov 2022)</p>
                  </div>
                </div>
                <div className="footer-experience-item">
                  <span className="footer-logo" aria-hidden="true">
                    IITR
                  </span>
                  <div>
                    <p className="footer-org">
                      CSIR-Indian Institute of Toxicology Research, Lucknow
                    </p>
                    <p className="footer-role">Director (Nov 2020–Sep 2022)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-column footer-column-right">
            <div className="footer-grid">
              <div className="footer-block">
                <h3>Address</h3>
                <p>
                  Department of Botany, <br />
                  North-Eastern Hill University,
                  <br />
                  Shillong 793022, Meghalaya, India
                </p>
              </div>

              <div className="footer-block">
                <h3>Contact</h3>

                <p>
                  Office Phone:{" "}
                  <a href="tel:+913642722216" className="footer-phone">
                    +91 364 272 2216
                  </a>
                </p>
                <p>
                  Preferred Email:{" "}
                  <a href="mailto:sarojkbarik@gmail.com">
                    sarojkbarik@gmail.com
                  </a>
                </p>
                <p>
                  Web page:{" "}
                  <a
                    href="https://nehu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nehu.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-meta">
          <p>&copy; {currentYear} Saroj Kanta Barik. All rights reserved.</p>
          <p className="footer-credit">
            Site designed by{" "}
            <a
              href="https://accelbia.design"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              accelbia.design
            </a>
            <span className="footer-credit-icon" aria-hidden="true">
              <OpenInNewIcon fontSize="inherit" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
