"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES } from "@/lib/constants";

export default function ServiciiPage() {
  return (
    <>
      {/* Hero compact */}
      <section
        style={{
          background: "#111111",
          minHeight: 400,
          display: "flex",
          alignItems: "flex-end",
          padding: "80px 32px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost */}
        <div
          style={{
            position: "absolute",
            right: -20,
            bottom: -20,
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: 200,
            color: "rgba(255,255,255,0.03)",
            letterSpacing: "-8px",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          SRV
        </div>

        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                18 servicii profesionale
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(40px, 6vw, 64px)",
                textTransform: "uppercase",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "#FFFFFF" }}>SERVICIILE </span>
              <span style={{ color: "#E63329" }}>NOASTRE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padded" style={{ background: "var(--taupe-light)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {SERVICES.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 0.05}>
              <div style={{ marginBottom: 64 }}>
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 0,
                    paddingBottom: 16,
                    borderBottom: "3px solid #E63329",
                  }}
                >
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
                    {cat.ghost}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      fontSize: 22,
                      textTransform: "uppercase",
                      color: "#111111",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {cat.category}
                  </h2>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#E63329",
                      letterSpacing: "1px",
                    }}
                  >
                    {cat.startingFrom}
                  </span>
                </div>

                {/* Service rows */}
                <div>
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ii * 0.04 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "16px 20px",
                        borderBottom: "0.5px solid var(--border)",
                        cursor: "default",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.background = "rgba(230,51,41,0.03)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.background = "transparent")
                      }
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#E63329",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          fontWeight: 500,
                          fontSize: 14,
                          color: "#111111",
                          flex: 1,
                        }}
                      >
                        {item.name}
                      </span>
                      {/* Dotted line */}
                      <div
                        style={{
                          flex: 1,
                          borderBottom: "1px dotted var(--border)",
                          margin: "0 8px",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-space-mono)",
                          fontWeight: 700,
                          fontSize: 13,
                          color: "#E63329",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* CTA */}
          <ScrollReveal delay={0.2}>
            <div
              style={{
                textAlign: "center",
                paddingTop: 40,
                borderTop: "0.5px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: 9,
                  color: "var(--muted)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                Prețurile pot varia în funcție de lungimea și complexitatea serviciului
              </p>
              <Link href="/rezervare" className="btn-red">
                Rezervă Acum <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
