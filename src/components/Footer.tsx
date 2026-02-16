import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-header">
          <h2>Prof. Saroj Kanta Barik</h2>
        </div>

        <div className="footer-grid">
          <div className="footer-block">
            <h3>Address</h3>
            <p>
              Department of Botany, North-Eastern Hill University,
              <br />
              Shillong 793022, Meghalaya, India
            </p>
          </div>

          <div className="footer-block">
            <h3>Contact</h3>
            <p>Office: (0364) 272 2216</p>
            <p>
              Preferred Email:{" "}
              <a href="mailto:sarojkbarik@gmail.com">sarojkbarik@gmail.com</a>
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

        <div className="footer-meta">
          <p>&copy; {currentYear} Saroj Kanta Barik. All rights reserved.</p>
          {/* <p className="footer-credit">
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
          </p> */}
        </div>
      </div>
    </footer>
  );
}
