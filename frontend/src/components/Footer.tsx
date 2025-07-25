
const Footer = () => (
  <footer style={{ background: "#181a1a", color: "#fff", padding: "2.5rem 0 1.2rem 0" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Brand */}
        <div style={{ fontSize: "1.7rem", fontWeight: "bold", marginBottom: "1.2rem" }}>
          Noir Shades
        </div>
        {/* Policy Buttons */}
        <div style={{ display: "flex", gap: "2.2rem", alignItems: "center" }}>
          <button style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
            padding: 0
          }}>
            Privacy Policy
          </button>
          <button style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
            padding: 0
          }}>
            Terms of Use
          </button>
        </div>
      </div>
      <hr style={{ border: "none", borderTop: "1px solid #444", margin: "1.2rem 0" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ fontSize: "1rem", color: "#ccc" }}>
          Copyright © 2024 Noir Shades. All rights reserved
        </div>
        {/* Social Icons */}
        <div style={{ display: "flex", gap: "1.2rem" }}>
          {/* Instagram */}
          <a href="#" style={{ color: "#fff" }} aria-label="Instagram">
            {/* Placeholder for Instagram icon */}
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="18" height="18" rx="5" />
              <circle cx="13" cy="13" r="4" />
              <circle cx="18" cy="8" r="1" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" style={{ color: "#fff" }} aria-label="Facebook">
            {/* Placeholder for Facebook icon */}
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="18" height="18" rx="5" />
              <path d="M16 13h-2v5h-3v-5h-1v-3h1v-1.5A2.5 2.5 0 0113.5 7H16v3h-2.5A.5.5 0 0013 10.5V10h3v3z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" style={{ color: "#fff" }} aria-label="YouTube">
            {/* Placeholder for YouTube icon */}
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="18" height="18" rx="5" />
              <polygon points="11,10 17,13 11,16" fill="#fff" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

