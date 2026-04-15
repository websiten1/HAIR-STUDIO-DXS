"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import ConstructionLines from "@/components/ConstructionLines";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import { SALON, SERVICES } from "@/lib/constants";

/* ────────────────────────────── SECTION 1 — HERO ─────────────────── */
function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#111111",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
      }}
    >
      <ConstructionLines dark verticalAt="60%" horizontalAt="50%" />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "60% 40%",
          width: "100%",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div style={{ padding: "80px 0" }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}
          >
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
              Frizerie Premium · Iași, România
            </span>
          </motion.div>

          {/* H1 */}
          <div style={{ lineHeight: 1, marginBottom: 36 }}>
            {["HAIR", "STUDIO", "DXS"].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "clamp(60px, 8vw, 100px)",
                  letterSpacing: "-3px",
                  textTransform: "uppercase",
                  color: word === "STUDIO" ? "#E63329" : "#FFFFFF",
                  lineHeight: 0.95,
                  display: "block",
                }}
              >
                {word}
              </motion.div>
            ))}
          </div>

          {/* Divider + tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}
          >
            <div style={{ width: 44, height: 1, background: "rgba(255,255,255,0.2)" }} />
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 9,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {SALON.tagline}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 460,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Experiență premium de frizerie în inima Iașiului. Tunsori personalizate,
            bărbierit clasic cu lamă și tratamente profesionale pentru fiecare client.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <Link href="/rezervare" className="btn-red">
              Rezervă Acum <ArrowRight size={14} />
            </Link>
            <a href={`tel:${SALON.phoneRaw}`} className="btn-outline-white">
              <Phone size={14} />
              Sună: {SALON.phone}
            </a>
          </motion.div>
        </div>

        {/* Right column */}
        <div
          style={{
            background: "#141414",
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          className="hero-right"
        >
          {/* Grid pattern */}
          <div
            className="grid-bg-dark"
            style={{ position: "absolute", inset: 0 }}
          />

          {/* Ghost DXS */}
          <div
            style={{
              position: "absolute",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(120px, 16vw, 240px)",
              color: "rgba(255,255,255,0.04)",
              letterSpacing: "-8px",
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1,
            }}
          >
            DXS
          </div>

          {/* Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                fontSize: 72,
                color: "#E63329",
                letterSpacing: "-3px",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              5.0
            </div>
            <div
              style={{
                color: "#E63329",
                fontSize: 18,
                letterSpacing: "4px",
                marginBottom: 10,
              }}
            >
              ★★★★★
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 10,
                color: "var(--taupe)",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {SALON.reviews} recenzii Google
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ────────────────────── SECTION 2 — SOCIAL PROOF BAR ─────────────── */
function SocialProofBar() {
  const items = [
    `5.0 ★★★★★`,
    `${SALON.reviews} Recenzii Google`,
    "Deschis Luni–Sâmbătă",
    "Iași, Rond Târgu Cucu 10",
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderTop: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        overflow: "hidden",
      }}
    >
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && (
            <div
              style={{
                width: "0.5px",
                height: 20,
                background: "var(--border)",
                margin: "0 28px",
              }}
            />
          )}
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--black)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ────────────────────── SECTION 3 — SERVICES FEATURED ────────────── */
function ServicesSection() {
  return (
    <section
      style={{
        background: "var(--taupe-light)",
        padding: "96px 32px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Eyebrow */}
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#E63329",
              }}
            >
              SERVICIILE NOASTRE
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "#E63329" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              textTransform: "uppercase",
              color: "#111111",
              letterSpacing: "-1px",
              marginBottom: 56,
            }}
          >
            Fiecare serviciu, executat cu precizie
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "0.5px solid var(--border)",
            borderLeft: "0.5px solid var(--border)",
          }}
          className="services-grid"
        >
          {SERVICES.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 0.1}>
              <div
                style={{
                  borderRight: "0.5px solid var(--border)",
                  borderBottom: "0.5px solid var(--border)",
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  borderTop: "3px solid #E63329",
                }}
              >
                {/* Ghost number */}
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 16,
                    fontFamily: "var(--font-space-mono)",
                    fontWeight: 700,
                    fontSize: 72,
                    color: "rgba(17,17,17,0.05)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {cat.ghost}
                </div>

                {/* Tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: 8,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#E63329",
                    }}
                  >
                    {cat.category}
                  </span>
                  <div style={{ flex: 1, height: "0.5px", background: "#E63329", opacity: 0.4 }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 20,
                    textTransform: "uppercase",
                    color: "#111111",
                    letterSpacing: "-0.5px",
                    marginBottom: 24,
                  }}
                >
                  {cat.category === "TUNSORI"
                    ? "Tunsori"
                    : cat.category === "BĂRBIERIT & BARBĂ"
                    ? "Bărbierit & Barbă"
                    : "Tratamente & Styling"}
                </h3>

                {/* List */}
                <ul style={{ listStyle: "none", marginBottom: 28 }}>
                  {cat.items.slice(0, 5).map((item) => (
                    <li
                      key={item.name}
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 300,
                        fontSize: 13,
                        color: "var(--muted)",
                        lineHeight: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: "#E63329", fontSize: 10 }}>—</span>
                      {item.name}
                    </li>
                  ))}
                </ul>

                {/* Price tag */}
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#E63329",
                    borderTop: "0.5px solid var(--border)",
                    paddingTop: 12,
                    display: "block",
                  }}
                >
                  {cat.startingFrom}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/servicii" className="btn-black">
              Vezi Toate Serviciile <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ────────────────────────── SECTION 4 — BIG STATS ────────────────── */
function StatsSection() {
  const stats = [
    { value: "5.0★", label: "Rating Google", desc: "Cel mai bun rating posibil", accent: "#E63329", numeric: false },
    { value: 513, suffix: "", label: "Recenzii verificate", desc: "Clienți mulțumiți Google", accent: "var(--taupe)", numeric: true },
    { value: 10, suffix: "+", label: "Ani de experiență", desc: "Pasiune și dedicare", accent: "#E63329", numeric: true },
    { value: 18, suffix: "", label: "Servicii disponibile", desc: "Pentru orice stil", accent: "rgba(255,255,255,0.1)", numeric: true },
  ];

  return (
    <section style={{ background: "#111111", position: "relative" }}>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.08}>
            <div
              style={{
                padding: "72px 40px",
                borderRight: i < 3 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
                borderTop: `3px solid ${stat.accent}`,
                position: "relative",
                overflow: "hidden",
              }}
              className="stat-item"
            >
              {/* Ghost bg */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "var(--font-space-mono)",
                  fontWeight: 700,
                  fontSize: 120,
                  color: "rgba(255,255,255,0.03)",
                  pointerEvents: "none",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {stat.numeric ? stat.value : stat.value}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: 8,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: 12,
                }}
              >
                {stat.label}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontWeight: 700,
                  fontSize: "clamp(40px, 4vw, 58px)",
                  color: "#E63329",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {stat.numeric ? (
                  <StatCounter target={stat.value as number} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 300,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                {stat.desc}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-item { border-right: none !important; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────── SECTION 5 — WHY US ──────────────────────── */
function WhyUsSection() {
  const panels = [
    {
      bg: "#1c0c0b",
      accent: "#E63329",
      value: "5.0★",
      valueColor: "#E63329",
      title: "Rating Perfect",
      desc: "Fiecare client pleacă mulțumit. Nu facem compromisuri cu calitatea.",
    },
    {
      bg: "#161410",
      accent: "var(--taupe)",
      value: "±0",
      valueColor: "var(--taupe)",
      title: "Zero Așteptare",
      desc: "Sistem de programări online. Vii la ora ta, pleci perfect aranjat.",
    },
    {
      bg: "#141414",
      accent: "rgba(255,255,255,0.12)",
      value: "10+",
      valueColor: "rgba(255,255,255,0.25)",
      title: "Experiență",
      desc: "Meșteri cu ani de practică și pasiune pentru fiecare detaliu.",
    },
  ];

  return (
    <section style={{ background: "#111111" }}>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
        className="why-grid"
      >
        {panels.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div
              style={{
                background: p.bg,
                padding: "72px 48px",
                borderTop: `3px solid ${p.accent}`,
                borderRight: i < 2 ? "0.5px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontWeight: 700,
                  fontSize: 52,
                  color: p.valueColor,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  marginBottom: 20,
                }}
              >
                {p.value}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: 22,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  letterSpacing: "-0.5px",
                  marginBottom: 12,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 300,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.8,
                }}
              >
                {p.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────── SECTION 6 — REVIEWS ─────────────────────── */
function ReviewsSection() {
  const reviews = [
    {
      text: "Cel mai bun loc din Iași pentru o tunsoare fade. Andrei e meticulos și îți înțelege exact ce vrei. Merg de 2 ani și nu îmi doresc alt frizerie.",
      author: "Mihai C.",
      stars: "★★★★★",
    },
    {
      text: "Atmosferă premium, igienă impecabilă și rezultate perfecte de fiecare dată. Bărbieritul cu lamă e o experiență pe care trebuie să o încerci.",
      author: "Alexandru P.",
      stars: "★★★★★",
    },
    {
      text: "Am venit pentru keratină și am fost uimită de rezultat. Prețuri corecte și personal super profesionist. Recomand cu căldură!",
      author: "Diana M.",
      stars: "★★★★★",
    },
  ];

  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "96px 32px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#E63329",
              }}
            >
              CE SPUN CLIENȚII
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(24px, 3vw, 36px)",
              textTransform: "uppercase",
              letterSpacing: "-1px",
              color: "#111111",
              marginBottom: 8,
            }}
          >
            513 recenzii · Rating 5.0 pe Google
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            marginTop: 56,
            borderTop: "0.5px solid var(--border)",
            borderLeft: "0.5px solid var(--border)",
          }}
          className="reviews-grid"
        >
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  padding: "40px 32px",
                  borderRight: "0.5px solid var(--border)",
                  borderBottom: "0.5px solid var(--border)",
                  borderLeft: "3px solid #E63329",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "#111111",
                    lineHeight: 1.8,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 600,
                        fontSize: 12,
                        color: "#111111",
                      }}
                    >
                      — {r.author}
                    </div>
                    <div
                      style={{
                        color: "#E63329",
                        fontSize: 12,
                        letterSpacing: "2px",
                        marginTop: 2,
                      }}
                    >
                      {r.stars}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ──────────────────── SECTION 7 — SCHEDULE & LOCATION ────────────── */
function ScheduleSection() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "60% 40%" }} className="schedule-grid">
      {/* Left — dark */}
      <div style={{ background: "#111111", padding: "80px 64px 80px 32px" }}>
        <div style={{ maxWidth: 560, marginLeft: "auto" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
              <span
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: 8,
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#E63329",
                }}
              >
                PROGRAM
              </span>
              <div style={{ width: 40, height: 1, background: "#E63329", opacity: 0.5 }} />
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
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: row.hours === "Închis" ? "var(--muted)" : "#FFFFFF",
                  }}
                >
                  {row.hours}
                </span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>

      {/* Right — taupe-light */}
      <div style={{ background: "var(--taupe-light)", padding: "80px 32px 80px 64px" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#E63329",
              }}
            >
              LOCAȚIE
            </span>
            <div style={{ width: 40, height: 1, background: "#E63329", opacity: 0.5 }} />
          </div>

          <div style={{ marginBottom: 32 }}>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 22,
                color: "#111111",
                lineHeight: 1.4,
                marginBottom: 4,
              }}
            >
              Rond Târgu Cucu
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 22,
                color: "#111111",
                marginBottom: 4,
              }}
            >
              Poziția 10
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 10,
                color: "var(--muted)",
                letterSpacing: "1px",
                marginTop: 8,
              }}
            >
              700259 Iași, România
            </p>
          </div>

          <a
            href={`tel:${SALON.phoneRaw}`}
            style={{
              display: "block",
              fontFamily: "var(--font-space-mono)",
              fontWeight: 700,
              fontSize: 28,
              color: "#111111",
              textDecoration: "none",
              marginBottom: 28,
              letterSpacing: "-1px",
            }}
          >
            {SALON.phone}
          </a>

          <a
            href={SALON.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <MapPin size={14} />
            Deschide în Google Maps →
          </a>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .schedule-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────── SECTION 8 — CTA ─────────────────────────── */
function CtaSection() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
        minHeight: 480,
      }}
      className="cta-grid"
    >
      {/* Left */}
      <div
        style={{
          background: "#111111",
          padding: "80px 64px 80px 32px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="grid-bg-dark" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ lineHeight: 0.9, marginBottom: 28 }}>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "clamp(48px, 6vw, 72px)",
                  textTransform: "uppercase",
                  letterSpacing: "-2px",
                  color: "#FFFFFF",
                }}
              >
                REZERVĂ
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "clamp(48px, 6vw, 72px)",
                  textTransform: "uppercase",
                  letterSpacing: "-2px",
                  color: "#E63329",
                }}
              >
                ACUM
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 300,
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                marginBottom: 32,
              }}
            >
              Programează-te online și bucură-te de o experiență premium.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/rezervare" className="btn-red">
                Rezervă Online <ArrowRight size={14} />
              </Link>
              <a href={`tel:${SALON.phoneRaw}`} className="btn-outline-white">
                <Phone size={14} />
                Sună: {SALON.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Right — red */}
      <div
        style={{
          background: "#E63329",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "60px 40px",
        }}
      >
        {/* Ghost DXS */}
        <div
          style={{
            position: "absolute",
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(80px, 10vw, 140px)",
            color: "rgba(0,0,0,0.1)",
            letterSpacing: "-4px",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          DXS
        </div>

        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            border: "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: "50%",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: 20,
              color: "#FFFFFF",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            HAIR STUDIO DXS
          </div>
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 9,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Iași · Rond Târgu Cucu 10
          </div>
          <div
            style={{
              marginTop: 16,
              fontFamily: "var(--font-space-mono)",
              fontSize: 22,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "2px",
            }}
          >
            5.0 ★★★★★
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ───────────────────────────── PAGE ──────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <ReviewsSection />
      <ScheduleSection />
      <CtaSection />
    </>
  );
}
