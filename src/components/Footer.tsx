import Link from "next/link";
import { NAV_LINKS, SALON } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111111",
        borderTop: "3px solid #E63329",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "64px 32px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          }}
          className="footer-grid"
        >
          {/* Left */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 20,
                color: "#FFFFFF",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              HAIR STUDIO{" "}
              <span style={{ color: "#E63329" }}>DXS</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 10,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "1px",
                marginBottom: 24,
                lineHeight: 1.8,
              }}
            >
              {SALON.tagline}
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 9,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "1px",
              }}
            >
              © {new Date().getFullYear()} Hair Studio Dxs.<br />
              Toate drepturile rezervate.
            </p>
          </div>

          {/* Center */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#E63329",
                marginBottom: 20,
              }}
            >
              Navigare
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                }}
              >
                Acasă
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#E63329",
                marginBottom: 20,
              }}
            >
              Contact
            </div>
            <a
              href={`tel:${SALON.phoneRaw}`}
              style={{
                display: "block",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                fontSize: 16,
                color: "#FFFFFF",
                textDecoration: "none",
                marginBottom: 12,
                letterSpacing: "1px",
              }}
            >
              {SALON.phone}
            </a>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 9,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.5px",
                lineHeight: 2,
                marginBottom: 16,
              }}
            >
              {SALON.address}<br />
              {SALON.city}
            </p>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 11,
                color: "#E63329",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              {SALON.rating} ★★★★★ Google
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 8,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            HAIR STUDIO DXS · FRIZERIE PREMIUM · IAȘI, ROMÂNIA · ROND TÂRGU CUCU 10
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
