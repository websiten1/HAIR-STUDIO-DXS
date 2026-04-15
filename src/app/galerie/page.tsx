"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CATEGORIES = ["Toate", "Tunsori", "Bărbierit", "Tratamente", "Fade Cut"] as const;
type Category = (typeof CATEGORIES)[number];

interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<Category, "Toate">;
  aspect: "square" | "tall";
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: "Fade Cut Modern", category: "Fade Cut", aspect: "square" },
  { id: 2, title: "Tunsoare Clasică", category: "Tunsori", aspect: "tall" },
  { id: 3, title: "Bărbierit cu Lamă", category: "Bărbierit", aspect: "square" },
  { id: 4, title: "Keratină Premium", category: "Tratamente", aspect: "square" },
  { id: 5, title: "Skin Fade", category: "Fade Cut", aspect: "tall" },
  { id: 6, title: "Tunsoare Personalizată", category: "Tunsori", aspect: "square" },
  { id: 7, title: "Tuns Barbă", category: "Bărbierit", aspect: "square" },
  { id: 8, title: "Vopsire Păr", category: "Tratamente", aspect: "square" },
  { id: 9, title: "Fade + Texturat", category: "Fade Cut", aspect: "square" },
  { id: 10, title: "Tunsoare Lungă", category: "Tunsori", aspect: "tall" },
  { id: 11, title: "Bărbierit Clasic", category: "Bărbierit", aspect: "square" },
  { id: 12, title: "Botox Păr", category: "Tratamente", aspect: "square" },
];

// Color palette for placeholder images
const PALETTE = [
  "#1a1a1a", "#2a1515", "#151a15", "#1a1522",
  "#0f1520", "#1a120f", "#0f1a18", "#200f15",
  "#151520", "#1a1a0f", "#0f1515", "#150f1a",
];

export default function GaleriePage() {
  const [active, setActive] = useState<Category>("Toate");

  const filtered =
    active === "Toate"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <>
      {/* Hero compact */}
      <section
        style={{
          background: "#111111",
          padding: "64px 32px 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -10,
            bottom: -20,
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: 180,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-8px",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          GAL
        </div>
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                Înainte & După · Lucrările noastre
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(48px, 6vw, 80px)",
                textTransform: "uppercase",
                letterSpacing: "-3px",
                lineHeight: 1,
                color: "#FFFFFF",
              }}
            >
              GALE<span style={{ color: "#E63329" }}>RIE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <div
        style={{
          background: "#FFFFFF",
          borderBottom: "0.5px solid var(--border)",
          padding: "0 32px",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            gap: 0,
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "16px 24px",
                fontFamily: "var(--font-space-mono)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "none",
                borderBottom: active === cat ? "2px solid #E63329" : "2px solid transparent",
                background: active === cat ? "#111111" : "transparent",
                color: active === cat ? "#FFFFFF" : "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section style={{ background: "var(--taupe-light)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.5px",
                background: "var(--border)",
              }}
              className="gallery-grid"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
                  className="gallery-item"
                >
                  {/* Placeholder */}
                  <div
                    style={{
                      aspectRatio: item.aspect === "tall" ? "3/4" : "1/1",
                      background: PALETTE[item.id % PALETTE.length],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Placeholder text */}
                    <div
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: 9,
                        color: "rgba(255,255,255,0.15)",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        textAlign: "center",
                        zIndex: 1,
                      }}
                    >
                      {item.title}
                      <br />
                      <span style={{ fontSize: 8, opacity: 0.6 }}>Foto în curând</span>
                    </div>

                    {/* Corner accent */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: "#E63329",
                        opacity: 0.5,
                      }}
                    />

                    {/* Hover overlay */}
                    <div
                      className="gallery-overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.7)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.25s",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-space-mono)",
                          fontSize: 8,
                          fontWeight: 700,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: "#E63329",
                        }}
                      >
                        {item.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          fontWeight: 700,
                          fontSize: 14,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          color: "#FFFFFF",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <ScrollReveal delay={0.2}>
            <div
              style={{
                textAlign: "center",
                marginTop: 56,
                paddingTop: 48,
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
                Îți place ce vezi? Rezervă același stil pentru tine.
              </p>
              <Link href="/rezervare" className="btn-red">
                Rezervă Același Stil <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item {
          transition: transform 0.2s;
        }
        .gallery-item:hover {
          transform: scale(1.02);
          z-index: 2;
        }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
