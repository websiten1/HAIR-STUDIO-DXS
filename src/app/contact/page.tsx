import { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { SALON } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează Hair Studio Dxs din Iași. Telefon: 0747 533 806. Rond Târgu Cucu 10.",
};

export default function ContactPage() {
  const contactItems = [
    {
      icon: Phone,
      label: "Telefon",
      value: SALON.phone,
      href: `tel:${SALON.phoneRaw}`,
    },
    {
      icon: MapPin,
      label: "Adresă",
      value: `${SALON.address}, ${SALON.city}`,
      href: SALON.googleMapsUrl,
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@hairstudiodxs.ro",
      href: "mailto:contact@hairstudiodxs.ro",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#111111",
          padding: "80px 32px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: 160,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-6px",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          DXS
        </div>
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
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
              Ia legătura cu noi
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              lineHeight: 1,
              color: "#FFFFFF",
            }}
          >
            CON<span style={{ color: "#E63329" }}>TACT</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 500,
        }}
        className="contact-grid"
      >
        {/* Contact info */}
        <div className="contact-left" style={{ background: "var(--taupe-light)", padding: "72px 48px 72px 32px" }}>
          <div style={{ maxWidth: 420, marginLeft: "auto" }}>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#E63329",
                marginBottom: 40,
              }}
            >
              DATE DE CONTACT
            </div>

            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    paddingBottom: i < contactItems.length - 1 ? 32 : 0,
                    marginBottom: i < contactItems.length - 1 ? 32 : 0,
                    borderBottom:
                      i < contactItems.length - 1
                        ? "0.5px solid var(--border)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <Icon size={14} color="#E63329" />
                    <span
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: 8,
                        color: "var(--muted)",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <a
                    href={item.href}
                    target={item.label === "Adresă" ? "_blank" : undefined}
                    rel={item.label === "Adresă" ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 500,
                      fontSize: 16,
                      color: "#111111",
                      textDecoration: "none",
                    }}
                  >
                    {item.value}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Program + CTA */}
        <div className="contact-right" style={{ background: "#111111", padding: "72px 32px 72px 48px" }}>
          <div style={{ maxWidth: 400 }}>
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
              PROGRAM DE LUCRU
            </div>

            {SALON.schedule.map((row, i) => (
              <div
                key={row.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom:
                    i < SALON.schedule.length - 1
                      ? "0.5px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Clock size={11} color="rgba(255,255,255,0.3)" />
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: 9,
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {row.day}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 600,
                    fontSize: 13,
                    color: row.hours === "Închis" ? "var(--muted)" : "#FFFFFF",
                  }}
                >
                  {row.hours}
                </span>
              </div>
            ))}

            <div style={{ marginTop: 48 }}>
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#E63329",
                  letterSpacing: "-1px",
                  marginBottom: 4,
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
                  marginBottom: 32,
                }}
              >
                {SALON.reviews} recenzii Google
              </div>

              <Link href="/rezervare" className="btn-red">
                Rezervă Acum →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
