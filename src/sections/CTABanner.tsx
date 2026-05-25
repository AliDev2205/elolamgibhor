"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const CTABanner: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#0A0A0A", padding: "100px 0" }} className="w-full">
      <div style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "0 24px",
        textAlign: "center",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Titre */}
          <h2 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: "900",
            color: "#FFFFFF",
            lineHeight: "1.1",
            letterSpacing: "-0.025em",
            marginBottom: "28px",
          }}>
            Vous avez besoin d'un pilote
          </h2>

          {/* Description */}
          <p style={{
            fontSize: "0.875rem",
            color: "#9CA3AF",
            lineHeight: "1.75",
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}>
            Pas de plus de prestataires. Pas de plus de consultants qui disparaissent après leur rapport. Vous avez besoin d'un vrai partenaire qui reste à vos côtés et pilote votre croissance.
          </p>

          {/* Boutons */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}>

            {/* Réserver — fond blanc, texte noir */}
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "11px 26px",
                backgroundColor: "#FFFFFF",
                color: "#0A0A0A",
                border: "none",
                borderRadius: "9999px",
                fontWeight: "600",
                fontSize: "13px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Réserver
            </Link>

            {/* Découvrir — outlined blanc */}
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "11px 26px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1.5px solid rgba(255,255,255,0.4)",
                borderRadius: "9999px",
                fontWeight: "500",
                fontSize: "13px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              Découvrir
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;