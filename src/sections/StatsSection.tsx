"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const STATS_DATA = [
  { value: "18+",  label: "Années\nd'expérience\ncombinée" },
  { value: "140+", label: "Entreprises\ntransformées" },
  { value: "96%",  label: "Satisfaction client\nconfirmée" },
  { value: "38%",  label: "Croissance\nmoyenne générée" },
];

export const StatsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#4A4540", padding: "72px 0" }} className="w-full">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Gauche — label + titre + texte + bouton ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <p style={{
              fontSize: "11px",
              fontWeight: "600",
              letterSpacing: "0.12em",
              color: "#C9C4BE",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              Preuves
            </p>

            {/* Titre */}
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: "900",
              color: "#FFFFFF",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}>
              Les chiffres qui valident notre approche
            </h2>

            {/* Description */}
            <p style={{
              fontSize: "0.825rem",
              color: "#C9C4BE",
              lineHeight: "1.7",
              marginBottom: "28px",
              maxWidth: "340px",
            }}>
              Chaque client est une histoire de transformation. Voici ce que nous avons créé ensemble.
            </p>

            {/* Bouton + flèches */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Link
                href="/a-propos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "9px 20px",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  borderRadius: "9999px",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                Découvrir
              </Link>
            </div>
          </motion.div>

          {/* ── Droite — grille 2x2 stats avec bordures ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 grid-rows-2">
              {STATS_DATA.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: "32px 28px",
                    borderTop:  idx >= 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
                    borderLeft: idx % 2 === 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                  }}
                >
                  {/* Chiffre */}
                  <p style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                    fontWeight: "900",
                    color: "#FFFFFF",
                    lineHeight: "1.0",
                    marginBottom: "10px",
                    letterSpacing: "-0.02em",
                  }}>
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p style={{
                    fontSize: "0.78rem",
                    color: "#C9C4BE",
                    lineHeight: "1.5",
                    fontWeight: "400",
                    whiteSpace: "pre-line",
                  }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;