"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function LandingIntro() {
  const statementLines = [
    siteConfig.statement[0],
    siteConfig.statement.slice(1).join(" "),
  ];

  return (
    <section
      className="w-full"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {statementLines.map((line, i) => (
          <motion.p
            key={i}
            className={i === 0 ? "font-playfair italic" : ""}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: "100%",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.25,
              letterSpacing: i === 0 ? "normal" : "-0.02em",
              fontWeight: i === 0 ? "normal" : 300,
              color: i === 0 ? "var(--text)" : "var(--text-muted)",
              fontSize:
                i === 0
                  ? "clamp(3.5rem, 8vw, 6rem)" // Made it slightly larger since serif italic reads a bit smaller
                  : "clamp(1.25rem, 2.8vw, 2.25rem)",
              maxWidth: i === 0 ? "100%" : "38ch",
              marginTop: i === 0 ? 0 : "1.25rem",
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
