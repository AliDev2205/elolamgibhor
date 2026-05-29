"use client";

import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/sections/CTABanner";
import { FOUNDER } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "120px 0 80px" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14 text-center" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimatedSection animation="fadeInUp">
            <p style={{
              fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em",
              color: "#9CA3AF", textTransform: "uppercase" as const, marginBottom: "20px",
            }}>
              À propos
            </p>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: "900", color: "#FFFFFF",
              lineHeight: "1.08", letterSpacing: "-0.025em", marginBottom: "24px",
            }}>
              {"Qui sommes-nous\u00A0?"}
            </h1>
            <p style={{
              fontSize: "0.95rem", color: "#9CA3AF", lineHeight: "1.75",
              maxWidth: "520px", margin: "0 auto",
            }}>
              Un cabinet de structuration financière et de conseil stratégique dédié aux PME binationales Afrique–Europe.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PHILOSOPHIE
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "clamp(3.5rem, 7vw, 6rem)", paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Gauche — texte */}
            <AnimatedSection animation="fadeInRight">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <p style={{
                  fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em",
                  color: "#00A896", textTransform: "uppercase" as const, marginBottom: "12px",
                }}>
                  Notre philosophie
                </p>
                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: "900", color: "#07111F",
                  lineHeight: "1.15", letterSpacing: "-0.02em", marginBottom: "4px",
                }}>
                  Accompagner avec rigueur,
                </h2>
                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: "900", color: "#07111F",
                  lineHeight: "1.15", letterSpacing: "-0.02em", marginBottom: "24px",
                }}>
                  conseiller avec clarté.
                </h2>
                <div style={{ height: "3px", width: "48px", background: "linear-gradient(to right, #1A3DB5, #00A896)", borderRadius: "9999px", marginBottom: "24px" }} />
                <p style={{ fontSize: "0.875rem", color: "#4B5563", lineHeight: "1.75", marginBottom: "16px" }} className="text-center lg:text-left">
                  Nous pensons que la gestion financière ne doit pas se limiter à un exercice comptable rétrospectif. Elle doit être un outil décisionnel puissant, tourné vers l'avenir. C'est pourquoi nous croisons systématiquement l'analyse de données financières avec une compréhension fine des marchés africains et européens.
                </p>
                <p style={{ fontSize: "0.875rem", color: "#4B5563", lineHeight: "1.75" }} className="text-center lg:text-left">
                  Que vous soyez en phase d'hypercroissance, de restructuration ou de transmission, notre équipe s'implique personnellement à vos côtés, offrant un niveau d'engagement et de disponibilité inégalé dans l'industrie.
                </p>
              </div>
            </AnimatedSection>

            {/* Droite — carte engagement */}
            <AnimatedSection animation="fadeInLeft">
              <div style={{
                backgroundColor: "#07111F", borderRadius: "16px", padding: "clamp(1.5rem, 5vw, 2.5rem)",
                border: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "16px", right: "16px",
                  color: "#00A896", opacity: 0.12, fontSize: "80px", fontWeight: "900",
                  fontFamily: "Georgia, serif", lineHeight: 1,
                }}>
                  ✦
                </div>
                <p style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", color: "#00A896", textTransform: "uppercase" as const, marginBottom: "20px" }} className="text-center lg:text-left">
                  Notre engagement
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "Confidentialité absolue et secret professionnel strict.",
                    "Indépendance totale dans nos conclusions d'audits et conseils.",
                    "Transparence des coûts et des honoraires.",
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <ShieldCheck style={{ width: "18px", height: "18px", color: "#00A896", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "0.85rem", color: "#D1D5DB", lineHeight: "1.6" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#C8D0E0", paddingTop: "clamp(3.5rem, 7vw, 5.5rem)", paddingBottom: "clamp(3.5rem, 7vw, 5.5rem)" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <AnimatedSection animation="fadeInLeft">
              <div style={{
                backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "clamp(1.5rem, 5vw, 2.5rem)",
                border: "1px solid rgba(7,17,31,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  backgroundColor: "rgba(0,60,151,0.06)", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3DB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "#07111F", marginBottom: "10px" }}>Notre Mission</h3>
                  <p style={{ fontSize: "0.825rem", color: "#4B5563", lineHeight: "1.75" }}>
                    Structurer les PME binationales en leur apportant de la discipline financière et de l'innovation stratégique. Nous aidons les dirigeants à libérer le plein potentiel de leur entreprise en optimisant l'allocation de leurs capitaux et de leurs ressources.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection animation="fadeInRight">
              <div style={{
                backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "clamp(1.5rem, 5vw, 2.5rem)",
                border: "1px solid rgba(7,17,31,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  backgroundColor: "rgba(0,191,166,0.06)", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "#07111F", marginBottom: "10px" }}>Notre Vision</h3>
                  <p style={{ fontSize: "0.825rem", color: "#4B5563", lineHeight: "1.75" }}>
                    Devenir le cabinet de référence pour les PME binationales Afrique–Europe, en démocratisant des pratiques d'ingénierie financière de haut niveau habituellement réservées aux grands groupes cotés.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FONDATEUR
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", paddingTop: "clamp(3.5rem, 7vw, 6rem)", paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Gauche — texte */}
            <AnimatedSection animation="fadeInRight" className="order-2 lg:order-1 w-full">
              <div className="text-left flex flex-col items-start w-full">
                <p style={{
                  fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em",
                  color: "#9CA3AF", textTransform: "uppercase" as const, marginBottom: "16px",
                }}>
                  Pilote
                </p>
                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(2.8rem, 5vw, 4rem)",
                  fontWeight: "900", color: "#FFFFFF",
                  lineHeight: "1.0", letterSpacing: "-0.03em", marginBottom: "16px",
                }}>
                  Ulrich<br />ADEBIAYE
                </h2>
                <p style={{
                  fontSize: "0.75rem", color: "#9CA3AF",
                  lineHeight: "1.7", marginBottom: "24px", maxWidth: "420px",
                }}
                className="mr-auto lg:mr-0 text-left"
                >
                  Senior Finance Manager | Financial Controller (MBA) | IFRS & SYSCOHADA | International Reporting & Governance | Digital Transformation & BI | Fractional CFO | Founder – EL OLAM GIBHOR | Europe & Africa
                </p>
                <p style={{ fontSize: "0.875rem", color: "#D1D5DB", lineHeight: "1.75", marginBottom: "24px" }} className="text-left">
                  {FOUNDER.bio}
                </p>

                <div className="flex flex-col items-start gap-3 w-full mb-7">
                  {FOUNDER.expertise.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <CheckCircle2 style={{ width: "16px", height: "16px", color: "#00A896", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.825rem", color: "#D1D5DB" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <blockquote style={{
                  paddingTop: "12px", paddingBottom: "12px", marginBottom: "32px",
                }}
                className="text-left border-l-3 border-[#1A3DB5] pl-4 w-full"
                >
                  <p style={{ fontSize: "0.825rem", color: "#9CA3AF", fontStyle: "italic", lineHeight: "1.7" }}>
                    &ldquo;{FOUNDER.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="flex flex-wrap justify-start gap-3 w-full">
                  <Link href="/contact" style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    padding: "10px 22px", backgroundColor: "#FFFFFF", color: "#0A0A0A",
                    borderRadius: "9999px", fontWeight: "600", fontSize: "13px",
                    textDecoration: "none", transition: "opacity 0.2s",
                  }}>
                    Discuter
                  </Link>
                  <Link href="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "10px 22px", backgroundColor: "transparent", color: "#FFFFFF",
                    border: "1.5px solid rgba(255,255,255,0.35)", borderRadius: "9999px",
                    fontWeight: "500", fontSize: "13px", textDecoration: "none",
                  }}>
                    Contacter
                    <ArrowRight style={{ width: "14px", height: "14px" }} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Droite — photo */}
            <AnimatedSection animation="fadeInLeft" className="order-1 lg:order-2 w-full">
              <div style={{ borderRadius: "14px", overflow: "hidden", aspectRatio: "3/4" }}>
                <img
                  src={FOUNDER.image}
                  alt={FOUNDER.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Trait séparateur entre les deux sections noires */}
      <div style={{ backgroundColor: "#0A0A0A" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto", padding: "0 24px",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }} />
      </div>

      <CTABanner />
      <Footer />
    </>
  );
}