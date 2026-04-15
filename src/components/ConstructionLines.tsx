"use client";

import { motion } from "framer-motion";

interface Props {
  dark?: boolean;
  verticalAt?: string;
  horizontalAt?: string;
}

export default function ConstructionLines({
  dark = true,
  verticalAt = "60%",
  horizontalAt = "50%",
}: Props) {
  const color = dark
    ? "rgba(255,255,255,0.05)"
    : "rgba(0,0,0,0.04)";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {/* Horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{
          position: "absolute",
          top: horizontalAt,
          left: 0,
          right: 0,
          height: "0.5px",
          background: color,
          transformOrigin: "left",
        }}
      />
      {/* Vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        style={{
          position: "absolute",
          left: verticalAt,
          top: 0,
          bottom: 0,
          width: "0.5px",
          background: color,
          transformOrigin: "top",
        }}
      />
    </div>
  );
}
