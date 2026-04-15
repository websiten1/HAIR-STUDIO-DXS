"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SALON } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          backgroundColor: "#111111",
          borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 32px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 18,
                color: "#FFFFFF",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              HAIR STUDIO{" "}
              <span style={{ color: "#E63329" }}>DXS</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ gap: 40, alignItems: "center" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 600,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  paddingBottom: 2,
                  borderBottom: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#FFFFFF";
                  (e.target as HTMLElement).style.borderBottomColor = "#E63329";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  (e.target as HTMLElement).style.borderBottomColor = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link
              href="/rezervare"
              className="hidden md:inline-flex"
              style={{
                background: "#E63329",
                color: "#FFFFFF",
                padding: "10px 20px",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#B8261E")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#E63329")}
            >
              Rezervă Acum
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
              style={{ background: "none", border: "none", color: "#FFFFFF", cursor: "pointer", padding: 4 }}
              aria-label="Deschide meniu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                zIndex: 60,
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: 280,
                background: "#111111",
                zIndex: 70,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  borderBottom: "0.5px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#FFFFFF",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  DXS
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
                  aria-label="Închide meniu"
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ flex: 1, overflowY: "auto" }}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: 48,
                      padding: "0 24px",
                      borderBottom: "0.5px solid rgba(255,255,255,0.06)",
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 600,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div style={{ padding: 24 }}>
                <a
                  href={`tel:${SALON.phoneRaw}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "14px 0",
                    background: "#E63329",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 600,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={14} />
                  Sună Acum
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
