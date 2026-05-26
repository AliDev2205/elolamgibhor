"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ServiceCard,
  TestimonialCard,
  ProcessStepCard,
  FAQItem,
  DynamicIcon,
} from "@/components/Card";
import StatsSection from "@/sections/StatsSection";
import CTABanner from "@/sections/CTABanner";
import {
  CLIENT_PROBLEMS,
  OFFRE_PHARE,
  SERVICES,
  FOUNDER,
  PROCESS_STEPS,
  TESTIMONIALS,
  FAQ,
} from "@/lib/constants";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          1. HERO SECTION — Décalage droite appliqué
      ═══════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-stretch pt-[72px]">
        <div className="flex flex-col lg:flex-row w-full">

          {/* Left content — pl-32 xl:pl-44 pour décalage droite */}
<div className="w-full lg:w-1/2 flex flex-col justify-center py-16 lg:py-0 bg-white"
  style={{
    paddingLeft: "clamp(2rem, 10vw, 11rem)",
    paddingRight: "clamp(2rem, 5vw, 5rem)"
  }}
>            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <h1
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  fontWeight: "900",
                  color: "#0A0A0A",
                  lineHeight: "1.0",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                  maxWidth: "540px",
                }}
              >
                Bâtissez une entreprise solide, pilotée par les chiffres et libérée du stress
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6B7280",
                  lineHeight: "1.65",
                  marginBottom: "2rem",
                  maxWidth: "400px",
                  fontWeight: "400",
                }}
              >
                L'expertise financière, fiscale et stratégique dédiée aux PME binationales Afrique–Europe. Transformez vos défis en opportunités de croissance maîtrisée.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <div className="flex flex-wrap items-center gap-3">

                {/* Diagnostic — bleu foncé pill */}
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 22px",
                    backgroundColor: "#1E3A8A",
                    color: "#ffffff",
                    borderRadius: "9999px",
                    fontWeight: "600",
                    fontSize: "13px",
                    textDecoration: "none",
                    border: "none",
                    transition: "opacity 0.2s",
                  }}
                  className="hover:opacity-90"
                >
                  Diagnostic
                </Link>

                {/* Découvrir — outlined pill */}
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 22px",
                    backgroundColor: "#F9FAFB",
                    color: "#374151",
                    borderRadius: "9999px",
                    fontWeight: "500",
                    fontSize: "13px",
                    textDecoration: "none",
                    border: "1.5px solid #D1D5DB",
                    transition: "border-color 0.2s",
                  }}
                  className="hover:border-gray-400"
                >
                  Découvrir
                </Link>

              </div>
            </AnimatedSection>
          </div>

          {/* Right image — pleine hauteur */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/hero-section.jpg"
              alt="EL OLAM GIBHOR - Structuration financière"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. PROBLÈMES CLIENTS
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#4A4540", paddingTop: "140px", paddingBottom: "110px" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>

          {/* Header */}
          <AnimatedSection animation="fadeInUp">
            <div style={{ textAlign: "center", marginBottom: "72px" }}>

              {/* Subtitle "Réalités" */}
              <p style={{
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.14em",
                color: "#C9C4BE",
                textTransform: "uppercase" as const,
                marginBottom: "22px",
              }}>
                Réalités
              </p>

              {/* Titre principal */}
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.6rem, 5vw, 3.4rem)",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "1.1",
                letterSpacing: "-0.025em",
                marginBottom: "28px",
                maxWidth: "700px",
                marginLeft: "auto",
                marginRight: "auto",
              }}>
                Ce que vivent vraiment<br />les PME binationales
              </h2>

              {/* Description */}
              <p style={{
                fontSize: "0.875rem",
                color: "#D1CBC3",
                lineHeight: "1.8",
                maxWidth: "520px",
                margin: "0 auto",
                fontWeight: "400",
              }}>
                Les chiffres ne mentent pas. Sans visibilité financière, sans stratégie claire, sans
                accompagnement, vous restez bloqué. C'est une réalité que nous voyons
                chaque jour.
              </p>
            </div>
          </AnimatedSection>

          {/* Grid 4 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">

            {/* Colonne 1 — Eye */}
            <AnimatedSection animation="fadeInUp" delay={0.0}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ marginBottom: "28px", color: "#FFFFFF", opacity: 0.9 }}>
                  <DynamicIcon name="Eye" className="h-6 w-6" />
                </div>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                }}>
                  Manque de visibilité sur les chiffres
                </h3>
                <p style={{
                  fontSize: "0.78rem",
                  color: "#ADA79F",
                  lineHeight: "1.7",
                  fontWeight: "400",
                }}>
                  Les données sont éparpillées, les rapports arrivent trop tard, vous ne savez jamais vraiment où vous en êtes.
                </p>
              </div>
            </AnimatedSection>

            {/* Colonne 2 — Wrench */}
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ marginBottom: "28px", color: "#FFFFFF", opacity: 0.9 }}>
                  <DynamicIcon name="Wrench" className="h-6 w-6" />
                </div>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                }}>
                  Croissance chaotique et non structurée
                </h3>
                <p style={{
                  fontSize: "0.78rem",
                  color: "#ADA79F",
                  lineHeight: "1.7",
                  fontWeight: "400",
                }}>
                  Vous grandissez vite mais sans fondations solides, sans processus, sans vision à long terme.
                </p>
              </div>
            </AnimatedSection>

            {/* Colonne 3 — AlertCircle */}
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ marginBottom: "28px", color: "#FFFFFF", opacity: 0.9 }}>
                  <DynamicIcon name="AlertCircle" className="h-6 w-6" />
                </div>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                }}>
                  Risques fiscaux et réglementaires
                </h3>
                <p style={{
                  fontSize: "0.78rem",
                  color: "#ADA79F",
                  lineHeight: "1.7",
                  fontWeight: "400",
                }}>
                  La complexité binationale crée des zones grises. Une erreur peut coûter très cher.
                </p>
              </div>
            </AnimatedSection>

            {/* Colonne 4 — Gauge */}
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ marginBottom: "28px", color: "#FFFFFF", opacity: 0.9 }}>
                  <DynamicIcon name="Gauge" className="h-6 w-6" />
                </div>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                }}>
                  Stress et isolement du dirigeant
                </h3>
                <p style={{
                  fontSize: "0.78rem",
                  color: "#ADA79F",
                  lineHeight: "1.7",
                  fontWeight: "400",
                }}>
                  Vous portez seul le poids des décisions stratégiques sans conseil structuré ni soutien.
                </p>
              </div>
            </AnimatedSection>

          </div>

          <AnimatedSection animation="fadeInUp">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                href="/contact"
                style={{
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "500",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
                className="hover:opacity-75 transition-opacity"
              >
                Agir
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. OFFRE PHARE — deux blocs
      ═══════════════════════════════════════════════════ */}

      {/* 3A — Bande noire titre */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "72px 0" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center text-center lg:text-left">

            {/* Gauche — label + titre */}
            <AnimatedSection animation="fadeInRight">
              <p style={{
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textTransform: "uppercase" as const,
                marginBottom: "20px",
                opacity: 0.7,
              }}>
                Solution
              </p>
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "1.0",
                letterSpacing: "-0.03em",
              }}>
                Gibhor<br />pilotage 360°
              </h2>
            </AnimatedSection>

            {/* Droite — texte + boutons */}
            <AnimatedSection animation="fadeInLeft">
              <p className="mx-auto lg:mx-0" style={{
                fontSize: "0.95rem",
                color: "#D1D5DB",
                lineHeight: "1.75",
                marginBottom: "32px",
                maxWidth: "420px",
              }}>
                Un accompagnement complet qui sécurise votre croissance, clarifie vos chiffres et libère votre énergie de dirigeant. Vous n'avez pas besoin de plus de prestataires. Vous avez besoin d'un pilote.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 22px",
                    backgroundColor: "#FFFFFF",
                    color: "#0A0A0A",
                    borderRadius: "9999px",
                    fontWeight: "600",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  className="hover:opacity-90"
                >
                  Démarrer
                </Link>

                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 22px",
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "1.5px solid #FFFFFF",
                    borderRadius: "9999px",
                    fontWeight: "500",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  className="hover:opacity-90"
                >
                  Découvrir
                </Link>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 3B — Grille features + photo */}
      <section style={{ backgroundColor: "#D6DCE8", padding: "64px 0" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

            {/* ── Colonne 1 features gauche ── */}
            <div className="flex flex-col gap-10 lg:gap-12 items-center text-center lg:items-start lg:text-left">

              {/* Feature 1 — BarChart2 */}
              <AnimatedSection animation="fadeInUp" delay={0.0}>
                <div className="flex flex-col items-center lg:items-start">
                  <div style={{ marginBottom: "14px" }}>
                    <DynamicIcon name="BarChart2" className="h-7 w-7 text-[#07111F]" />
                  </div>
                  <h3 style={{
                    fontSize: "1.05rem",
                    fontWeight: "800",
                    color: "#07111F",
                    lineHeight: "1.25",
                    marginBottom: "10px",
                  }}>
                    Sécurisation<br />financière
                  </h3>
                  <p style={{
                    fontSize: "0.78rem",
                    color: "#374151",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}>
                    Nous consolidons vos données, clarifions votre situation, éliminons les risques cachés.
                  </p>
                </div>
              </AnimatedSection>

              {/* Feature 3 — BarChart */}
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <div className="flex flex-col items-center lg:items-start">
                  <div style={{ marginBottom: "14px" }}>
                    <DynamicIcon name="BarChart" className="h-7 w-7 text-[#07111F]" />
                  </div>
                  <h3 style={{
                    fontSize: "1.05rem",
                    fontWeight: "800",
                    color: "#07111F",
                    lineHeight: "1.25",
                    marginBottom: "10px",
                  }}>
                    Tableaux de bord<br />intelligents
                  </h3>
                  <p style={{
                    fontSize: "0.78rem",
                    color: "#374151",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}>
                    Des outils modernes qui parlent votre langue, pas celle des comptables. Simples, clairs, actionnables.
                  </p>
                </div>
              </AnimatedSection>

            </div>

            {/* ── Colonne 2 features droite ── */}
            <div className="flex flex-col gap-10 lg:gap-12 items-center text-center lg:items-start lg:text-left">

              {/* Feature 2 — Eye */}
              <AnimatedSection animation="fadeInUp" delay={0.1}>
                <div className="flex flex-col items-center lg:items-start">
                  <div style={{ marginBottom: "14px" }}>
                    <DynamicIcon name="Eye" className="h-7 w-7 text-[#07111F]" />
                  </div>
                  <h3 style={{
                    fontSize: "1.05rem",
                    fontWeight: "800",
                    color: "#07111F",
                    lineHeight: "1.25",
                    marginBottom: "10px",
                  }}>
                    Pilotage financier<br />continu
                  </h3>
                  <p style={{
                    fontSize: "0.78rem",
                    color: "#374151",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}>
                    Des tableaux de bord en temps réel qui vous donnent la vraie visibilité sur votre business.
                  </p>
                </div>
              </AnimatedSection>

              {/* Feature 4 — Gauge */}
              <AnimatedSection animation="fadeInUp" delay={0.3}>
                <div className="flex flex-col items-center lg:items-start">
                  <div style={{ marginBottom: "14px" }}>
                    <DynamicIcon name="Gauge" className="h-7 w-7 text-[#07111F]" />
                  </div>
                  <h3 style={{
                    fontSize: "1.05rem",
                    fontWeight: "800",
                    color: "#07111F",
                    lineHeight: "1.25",
                    marginBottom: "10px",
                  }}>
                    Accompagnement<br />du dirigeant
                  </h3>
                  <p style={{
                    fontSize: "0.78rem",
                    color: "#374151",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}>
                    Vous n'êtes plus seul. Un expert à vos côtés pour les décisions stratégiques qui comptent vraiment.
                  </p>
                </div>
              </AnimatedSection>

            </div>

            {/* ── Colonne 3 — Photo pleine hauteur ── */}
            <AnimatedSection animation="fadeInLeft" delay={0.1} className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div style={{
                borderRadius: "12px",
                overflow: "hidden",
                width: "100%",
                aspectRatio: "4/5",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/offre-phare3B.jpg"
                  alt="Solution Gibhor Pilotage 360°"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. SERVICES — mb-24 pour espacement bouton
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "80px 0" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>

          {/* Header centré */}
          <AnimatedSection animation="fadeInUp">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>

              {/* Label */}
              <p style={{
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.12em",
                color: "#9CA3AF",
                textTransform: "uppercase" as const,
                marginBottom: "20px",
              }}>
                Offres
              </p>

              {/* Titre */}
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.6rem, 5vw, 4rem)",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "1.08",
                letterSpacing: "-0.025em",
                marginBottom: "24px",
                maxWidth: "560px",
                marginLeft: "auto",
                marginRight: "auto",
              }}>
                Nos services pour transformer votre entreprise
              </h2>

              {/* Description */}
              <p style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
                lineHeight: "1.7",
                maxWidth: "420px",
                margin: "0 auto",
                fontWeight: "400",
              }}>
                Chaque service est conçu pour répondre à un besoin spécifique. Ensemble, ils forment une stratégie cohérente et puissante.
              </p>
            </div>
          </AnimatedSection>

          {/* 3 cards — mb-24 pour espacement */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">

            {[
              {
                img: "/img/audit-strategique.jpg",
                title: "Audit stratégique",
                text: "Diagnostic complet de votre situation financière et stratégique.",
              },
              {
                img: "/img/transformation -digitale.jpg",
                title: "Transformation digitale",
                text: "Modernisez vos processus et gagnez en efficacité opérationnelle.",
              },
              {
                img: "/img/business-intelligence.jpg",
                title: "Business intelligence",
                text: "Convertissez vos données en décisions stratégiques puissantes.",
              },
            ].map((card, idx) => (
              <AnimatedSection key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

                  {/* Photo */}
                  <div style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "24px",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Titre */}
                  <h3 style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.3rem",
                    fontWeight: "800",
                    color: "#FFFFFF",
                    lineHeight: "1.2",
                    marginBottom: "12px",
                  }}>
                    {card.title}
                  </h3>

                  {/* Texte */}
                  <p style={{
                    fontSize: "0.8rem",
                    color: "#9CA3AF",
                    lineHeight: "1.65",
                    maxWidth: "260px",
                  }}>
                    {card.text}
                  </p>

                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bas — bouton + flèches */}
          <AnimatedSection animation="fadeInUp">
           <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  paddingTop: "80px",
}}>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 24px",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                className="hover:border-white"
              >
                Tous les services
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. STATISTIQUES
      ═══════════════════════════════════════════════════ */}
      <StatsSection />

      {/* ═══════════════════════════════════════════════════
          6. FONDATEUR
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "96px 0" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Gauche — label + nom + texte + boutons ── */}
            <AnimatedSection animation="fadeInRight">
              <div className="text-center lg:text-left">
                <p style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "0.12em",
                  color: "#9CA3AF",
                  textTransform: "uppercase" as const,
                  marginBottom: "16px",
                }}>
                  Pilote
                </p>

                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
                  fontWeight: "900",
                  color: "#FFFFFF",
                  lineHeight: "1.0",
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                }}>
                  Ulrich<br />ADEBIAYE
                </h2>

                <p className="mx-auto lg:mx-0" style={{
                  fontSize: "0.75rem",
                  color: "#9CA3AF",
                  lineHeight: "1.7",
                  marginBottom: "28px",
                  maxWidth: "420px",
                  fontWeight: "400",
                }}>
                  Senior Finance Manager | Financial Controller (MBA) | IFRS &amp; SYSCOHADA | International Reporting &amp; Governance | Digital Transformation &amp; BI | Fractional CFO | Founder – EL OLAM GIBHOR | Europe &amp; Africa
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 22px",
                      backgroundColor: "#FFFFFF",
                      color: "#0A0A0A",
                      border: "1.5px solid #FFFFFF",
                      borderRadius: "9999px",
                      fontWeight: "600",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    className="hover:opacity-90"
                  >
                    Discuter
                  </Link>

                  <Link
                    href="/a-propos"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 22px",
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                      border: "1.5px solid rgba(255,255,255,0.4)",
                      borderRadius: "9999px",
                      fontWeight: "500",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                    className="hover:border-white"
                  >
                    Contacter
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Droite — photo fondateur ── */}
            <AnimatedSection animation="fadeInLeft">
              <div style={{
                borderRadius: "14px",
                overflow: "hidden",
                width: "100%",
                aspectRatio: "3/4",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOUNDER.image}
                  alt={FOUNDER.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════
          7. PROCESSUS — Timeline — Espacement accru
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#C8D0E0", padding: "110px 0 120px" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>

          {/* Header centré */}
          <AnimatedSection animation="fadeInUp">
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <p style={{
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.12em",
                color: "#4B5563",
                textTransform: "uppercase" as const,
                marginBottom: "16px",
              }}>
                Étapes
              </p>
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: "900",
                color: "#07111F",
                lineHeight: "1.1",
                letterSpacing: "-0.025em",
                marginBottom: "24px",
              }}>
                Votre chemin vers la<br />croissance maîtrisée
              </h2>
              <p style={{
                fontSize: "0.875rem",
                color: "#374151",
                lineHeight: "1.7",
                maxWidth: "420px",
                margin: "0 auto 24px",
                border: "1px solid rgba(30,58,138,0.25)",
                padding: "14px 20px",
                borderRadius: "4px",
              }}>
                Chaque étape est conçue pour construire sur la précédente. De la clarté à l'action, du diagnostic à la domination de votre marché.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <Link href="/services" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "9px 20px",
                  backgroundColor: "transparent",
                  color: "#07111F",
                  border: "1.5px solid rgba(7,17,31,0.35)",
                  borderRadius: "9999px",
                  fontWeight: "500", fontSize: "12px", textDecoration: "none",
                }}>
                  Découvrir
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline — Espacement accru */}
          <div className="relative">

            {/* Ligne verticale centrale */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              backgroundColor: "rgba(7,17,31,0.2)",
              transform: "translateX(-50%)",
            }} />

            {/* Étapes */}
            {[
              {
                num: "01",
                title: "Diagnostic complet",
                text: "Nous analysons votre situation financière, vos risques cachés, vos opportunités manquées. Rien n'échappe à notre regard.",
                cta: "Commencer",
                img: "/img/diagnostic.jpg",
                side: "right",
              },
              {
                num: "02",
                title: "Structuration stratégique",
                text: "Nous construisons les fondations solides de votre croissance. Processus clairs, structures adaptées, vision partagée.",
                cta: "Avancer",
                img: "/img/structuration.jpg",
                side: "left",
              },
              {
                num: "03",
                title: "Pilotage en temps réel",
                text: "Vous voyez enfin vos chiffres clairement. Des tableaux de bord qui parlent votre langue, des décisions éclairées chaque jour.",
                cta: "Piloter",
                img: "/img/pilotage.jpg",
                side: "right",
              },
              {
                num: "04",
                title: "Croissance durable",
                text: "Vous maîtrisez votre expansion. Chaque décision est fondée sur des données. Chaque mouvement crée de la valeur réelle.",
                cta: "Croître",
                img: "/img/croissance.jpg",
                side: "left",
              },
            ].map((step, idx) => (
              <AnimatedSection key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div className="relative grid grid-cols-2 gap-0 mb-20 sm:mb-[120px]">

                  {/* Bullet central sur la ligne */}
                  <div style={{
                    position: "absolute",
                    left: "50%",
                    top: "18px",
                    transform: "translateX(-50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#07111F",
                    zIndex: 2,
                  }} />

                  {step.side === "right" ? (
                    <>
                      {/* Gauche vide */}
                      <div />
                      {/* Droite — contenu + photo — paddings augmentés */}
<div className="text-left flex flex-col items-start"
  style={{
    paddingLeft: "clamp(2rem, 8vw, 7rem)"
  }}
>                        <p style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                          fontWeight: "900",
                          color: "#07111F",
                          lineHeight: "1.0",
                          marginBottom: "8px",
                          letterSpacing: "-0.02em",
                        }}>
                          {step.num}
                        </p>
                        <h3 style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
                          fontWeight: "800",
                          color: "#07111F",
                          marginBottom: "8px",
                          lineHeight: "1.25",
                        }}>
                          {step.title}
                        </h3>
                        <p style={{
                          fontSize: "clamp(0.68rem, 1.8vw, 0.8rem)",
                          color: "#374151",
                          lineHeight: "1.6",
                          marginBottom: "12px",
                          maxWidth: "340px",
                        }}>
                          {step.text}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                          <Link href="/contact" style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            padding: "6px 14px",
                            backgroundColor: "transparent",
                            color: "#07111F",
                            border: "1.5px solid rgba(7,17,31,0.3)",
                            borderRadius: "9999px",
                            fontWeight: "500", fontSize: "11px", textDecoration: "none",
                          }}>
                            {step.cta}
                          </Link>
                        </div>
                        {/* Photo */}
                        <div style={{ borderRadius: "8px", overflow: "hidden", width: "100%", aspectRatio: "4/3" }}>
                          <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Gauche — contenu + photo — paddings augmentés */}
<div className="text-right flex flex-col items-end"
  style={{
    paddingRight: "clamp(2rem, 8vw, 7rem)"
  }}
>                       <p style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                          fontWeight: "900",
                          color: "#07111F",
                          lineHeight: "1.0",
                          marginBottom: "8px",
                          letterSpacing: "-0.02em",
                        }}>
                          {step.num}
                        </p>
                        <h3 style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
                          fontWeight: "800",
                          color: "#07111F",
                          marginBottom: "8px",
                          lineHeight: "1.25",
                        }}>
                          {step.title}
                        </h3>
                        <p style={{
                          fontSize: "clamp(0.68rem, 1.8vw, 0.8rem)",
                          color: "#374151",
                          lineHeight: "1.6",
                          marginBottom: "12px",
                          maxWidth: "340px",
                          marginLeft: "auto",
                        }}>
                          {step.text}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", marginBottom: "16px" }}>
                          <Link href="/contact" style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            padding: "6px 14px",
                            backgroundColor: "transparent",
                            color: "#07111F",
                            border: "1.5px solid rgba(7,17,31,0.3)",
                            borderRadius: "9999px",
                            fontWeight: "500", fontSize: "11px", textDecoration: "none",
                          }}>
                            {step.cta}
                          </Link>
                        </div>
                        {/* Photo */}
                        <div style={{ borderRadius: "8px", overflow: "hidden", width: "100%", aspectRatio: "4/3" }}>
                          <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                      </div>
                      {/* Droite vide */}
                      <div />
                    </>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. TÉMOIGNAGES
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "100px 0" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>

          {/* Header */}
          <AnimatedSection animation="fadeInUp">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "1.1",
                letterSpacing: "-0.025em",
                marginBottom: "16px",
              }}>
                Témoignages
              </h2>
              <p style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
                lineHeight: "1.6",
              }}>
                Les dirigeants qui ont transformé leur entreprise avec nous.
              </p>
            </div>
          </AnimatedSection>

          {/* 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {[
              {
                quote: '"Nous avions besoin de clarté. EL OLAM GIBHOR nous l\'a donnée. Nos chiffres parlent maintenant, nos décisions sont fondées, notre croissance est maîtrisée."',
                name: "Sophie Ndiaye",
                role: "Présidente, Ndiaye Solutions",
                initials: "SN",
                color: "#1E3A8A",
              },
              {
                quote: '"L\'accompagnement stratégique a changé notre vision. Nous avons structuré notre expansion binationale et doublé notre rentabilité en dix-huit mois."',
                name: "Michel Kouassi",
                role: "Directeur général, Kouassi Logistics",
                initials: "MK",
                color: "#00A896",
              },
              {
                quote: '"Ulrich comprend vraiment les défis des PME binationales. Il a transformé notre chaos en stratégie claire et exécutable. C\'est un vrai pilote."',
                name: "Fatima Bah",
                role: "Fondatrice, Bah Digital Africa",
                initials: "FB",
                color: "#4A4540",
              },
            ].map((t, idx) => (
              <AnimatedSection key={idx} animation="fadeInUp" delay={idx * 0.12}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}>

                  {/* Citation */}
                  <p style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "#FFFFFF",
                    lineHeight: "1.65",
                    marginBottom: "32px",
                    fontWeight: "400",
                  }}>
                    {t.quote}
                  </p>

                  {/* Initiales */}
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: t.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      color: "#FFFFFF",
                      letterSpacing: "0.05em",
                    }}>
                      {t.initials}
                    </span>
                  </div>

                  {/* Nom */}
                  <p style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    marginBottom: "4px",
                  }}>
                    {t.name}
                  </p>

                  {/* Rôle */}
                  <p style={{
                    fontSize: "0.72rem",
                    color: "#6B7280",
                    fontWeight: "400",
                  }}>
                    {t.role}
                  </p>

                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. FAQ
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#C8D0E0", padding: "100px 0" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

            {/* ── Gauche — titre + sous-titre + bouton ── */}
            <AnimatedSection animation="fadeInRight">
              <div className="lg:sticky lg:top-[100px]">

                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(2.8rem, 5vw, 4rem)",
                  fontWeight: "900",
                  color: "#07111F",
                  lineHeight: "1.0",
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                }}>
                  Questions
                </h2>

                <p style={{
                  fontSize: "0.85rem",
                  color: "#374151",
                  lineHeight: "1.7",
                  marginBottom: "28px",
                  maxWidth: "260px",
                }}>
                  Tout ce que vous devez savoir avant de nous contacter.
                </p>

                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "9px 22px",
                    backgroundColor: "transparent",
                    color: "#07111F",
                    border: "1.5px solid rgba(7,17,31,0.35)",
                    borderRadius: "9999px",
                    fontWeight: "500",
                    fontSize: "12px",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  Contacter
                </Link>
              </div>
            </AnimatedSection>

            {/* ── Droite — accordion FAQ ── */}
            <AnimatedSection animation="fadeInLeft">
              <div>
                {[
                  {
                    q: "Quel est votre processus exact?",
                    a: "Nous commençons par un diagnostic profond de votre situation. Ensuite, nous structurons votre entreprise avec des processus clairs et des tableaux de bord. Enfin, nous vous accompagnons dans le pilotage continu de votre croissance.",
                  },
                  {
                    q: "Travaillez-vous avec toutes les PME?",
                    a: "Non. Nous nous spécialisons dans les PME binationales Afrique-Europe. Si votre entreprise a entre 500 000 et 50 millions d'euros de chiffre d'affaires et opère entre l'Afrique et l'Europe, nous sommes faits pour travailler ensemble.",
                  },
                  {
                    q: "Combien coûte un diagnostic?",
                    a: "Le diagnostic stratégique initial est une conversation de deux heures. Nous discutons de votre situation, vos défis, vos opportunités. Ensuite, nous proposons un devis transparent pour l'accompagnement complet.",
                  },
                  {
                    q: "Pouvez-vous garantir des résultats?",
                    a: "Nous garantissons notre expertise et notre engagement. Les résultats dépendent de votre volonté d'agir et de votre engagement dans le processus. Nous avons un taux de satisfaction de 96 pour cent.",
                  },
                  {
                    q: "Comment nous contacter pour commencer?",
                    a: "Réservez un diagnostic stratégique sur notre site. Ou contactez-nous directement par email ou téléphone. Nous répondons dans les 24 heures.",
                  },
                ].map((item, idx) => (
                  <FAQItem
                    key={idx}
                    question={item.q}
                    answer={item.a}
                    isOpen={openFAQ === idx}
                    onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  />
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. CTA FINAL
      ═══════════════════════════════════════════════════ */}
      <CTABanner />

      {/* ═══════════════════════════════════════════════════
          11. FOOTER
      ═══════════════════════════════════════════════════ */}
      <Footer />
    </>
  );
}