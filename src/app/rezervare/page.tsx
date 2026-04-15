import { Metadata } from "next";
import { Phone, Clock, MapPin } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { SALON } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rezervare Online",
  description: "Rezervă o programare online la Hair Studio Dxs din Iași. Rapid, simplu, confirmăm în 2 ore.",
};

export default function RezervareePage() {
  return (
    <>
      {/* Hero compact */}
      <section
        style={{
          background: "#111111",
          padding: "64px 32px 48px",
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 28, height: 1, background: "#E63329" }} />
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--taupe)",
              }}
            >
              Programare Online
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 56px)",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              color: "#FFFFFF",
            }}
          >
            REZERVĂ{" "}
            <span style={{ color: "#E63329" }}>ACUM</span>
          </h1>
        </div>
      </section>

      {/* Split layout */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          minHeight: "calc(100vh - 200px)",
        }}
        className="booking-grid"
      >
        {/* Left — salon info */}
        <div
          style={{
            background: "#111111",
            padding: "64px 48px 64px 32px",
          }}
        >
          <div style={{ maxWidth: 360, marginLeft: "auto" }}>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#E63329",
                marginBottom: 32,
              }}
            >
              INFORMAȚII SALON
            </div>

            {/* Phone */}
            <div
              style={{
                marginBottom: 32,
                paddingBottom: 32,
                borderBottom: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Phone size={14} color="#E63329" />
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: 8,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Telefon
                </span>
              </div>
              <a
                href={`tel:${SALON.phoneRaw}`}
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  letterSpacing: "1px",
                }}
              >
                {SALON.phone}
              </a>
            </div>

            {/* Program */}
            <div
              style={{
                marginBottom: 32,
                paddingBottom: 32,
                borderBottom: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Clock size={14} color="#E63329" />
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: 8,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Program
                </span>
              </div>
              {SALON.schedule.map((row) => (
                <div
                  key={row.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: 9,
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {row.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 600,
                      fontSize: 12,
                      color: row.hours === "Închis" ? "var(--muted)" : "#FFFFFF",
                    }}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Adresă */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <MapPin size={14} color="#E63329" />
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: 8,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Adresă
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                }}
              >
                {SALON.address}
                <br />
                {SALON.city}
              </p>
            </div>

            {/* Rating */}
            <div
              style={{
                marginTop: 40,
                paddingTop: 28,
                borderTop: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontWeight: 700,
                  fontSize: 28,
                  color: "#E63329",
                  letterSpacing: "-1px",
                }}
              >
                {SALON.rating} ★★★★★
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: 9,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "1px",
                  marginTop: 4,
                }}
              >
                {SALON.reviews} recenzii Google
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div style={{ background: "var(--taupe-light)" }}>
          <BookingForm />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .booking-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
