"use client";

import React from "react";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/sections/CTABanner";
import { DynamicIcon } from "@/components/Card";
import { SERVICES } from "@/lib/constants";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Diagnostic",
    text: "Analyse holistique de vos données, entretiens avec les équipes et diagnostic des forces et faiblesses.",
  },
  {
    num: "02",
    title: "Modélisation",
    text: "Co-construction de la feuille de route stratégique et modélisation financière prévisionnelle.",
  },
  {
    num: "03",
    title: "Exécution",
    text: "Mise en œuvre des processus, recherche de financements et gestion du changement organisationnel.",
  },
  {
    num: "04",
    title: "Optimisation",
    text: "Suivi des indicateurs clés (KPIs), audits réguliers de performance et ajustements stratégiques continus.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", paddingTop: "clamp(5rem, 10vw, 7.5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14 text-center" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimatedSection animation="fadeInUp">
            <p style={{
              fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em",
              color: "#9CA3AF", textTransform: "uppercase" as const, marginBottom: "20px",
            }}>
              Services
            </p>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: "900", color: "#FFFFFF",
              lineHeight: "1.08", letterSpacing: "-0.025em", marginBottom: "24px",
            }}>
              Nos expertises
            </h1>
            <p style={{
              fontSize: "0.95rem", color: "#9CA3AF", lineHeight: "1.75",
              maxWidth: "480px", margin: "0 auto",
            }}>
              Un catalogue complet de solutions en conseil stratégique et ingénierie financière.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LISTE SERVICES — alternance gauche/droite
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "clamp(3.5rem, 7vw, 6rem)", paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
            {SERVICES.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={service.id} id={service.id} style={{ scrollMarginTop: "100px" }}>
                  <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    style={{ direction: isEven ? "ltr" : "rtl" as React.CSSProperties["direction"] }}
                  >

                    {/* Visuel */}
                    <AnimatedSection animation={isEven ? "fadeInRight" : "fadeInLeft"}>
                      <div style={{
                        direction: "ltr",
                        backgroundColor: "#D6DCE8",
                        borderRadius: "16px",
                        padding: "clamp(1.5rem, 5vw, 3rem)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}>
                        <div style={{
                          width: "64px", height: "64px", borderRadius: "16px",
                          backgroundColor: "#1A3DB5", display: "flex",
                          alignItems: "center", justifyContent: "center",
                          marginBottom: "24px",
                          boxShadow: "0 8px 24px rgba(0,60,151,0.25)",
                        }}>
                          <DynamicIcon name={service.icon} className="h-7 w-7 text-white" />
                        </div>
                        <h3 style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "1.3rem", fontWeight: "800", color: "#07111F",
                          marginBottom: "12px",
                        }}>
                          {service.title}
                        </h3>
                        <p style={{ fontSize: "0.8rem", color: "#4B5563", lineHeight: "1.6" }}>
                          Accompagnement d'excellence assuré par nos consultants seniors.
                        </p>
                        <div style={{
                          height: "3px", width: "40px",
                          background: "linear-gradient(to right, #1A3DB5, #00A896)",
                          borderRadius: "9999px", marginTop: "20px",
                        }} />
                      </div>
                    </AnimatedSection>

                    {/* Contenu */}
                    <AnimatedSection animation={isEven ? "fadeInLeft" : "fadeInRight"}>
                      <div style={{ direction: "ltr" }} className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h2 style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                          fontWeight: "900", color: "#07111F",
                          lineHeight: "1.15", letterSpacing: "-0.02em", marginBottom: "16px",
                        }}
                        className="text-center lg:text-left"
                        >
                          {service.title}
                        </h2>
                        <p style={{
                          fontSize: "0.9rem", color: "#4B5563",
                          lineHeight: "1.75", marginBottom: "28px",
                        }}
                        className="text-center lg:text-left"
                        >
                          {service.description}
                        </p>

                        <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "24px" }} className="w-full">
                          <p style={{
                            fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em",
                            color: "#1A3DB5", textTransform: "uppercase" as const, marginBottom: "16px",
                          }}
                          className="text-center lg:text-left w-full"
                          >
                            Champs d'intervention clés
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-6 text-left w-full">
                            {service.details.map((detail, i) => (
                              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                <Check style={{ width: "14px", height: "14px", color: "#00A896", flexShrink: 0, marginTop: "3px" }} />
                                <span style={{ fontSize: "0.8rem", color: "#374151", lineHeight: "1.6" }}>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESSUS — fond sombre
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", paddingTop: "clamp(3.5rem, 7vw, 6rem)", paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>

          {/* Header */}
          <AnimatedSection animation="fadeInUp">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{
                fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em",
                color: "#9CA3AF", textTransform: "uppercase" as const, marginBottom: "16px",
              }}>
                Notre méthode
              </p>
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: "900", color: "#FFFFFF",
                lineHeight: "1.12", letterSpacing: "-0.025em", marginBottom: "16px",
              }}>
                Un processus rigoureux pour garantir le succès
              </h2>
              <p style={{
                fontSize: "0.875rem", color: "#9CA3AF",
                lineHeight: "1.7", maxWidth: "480px", margin: "0 auto",
              }}>
                Nous appliquons un cadre de travail structuré et collaboratif afin de maximiser l'efficacité de nos interventions.
              </p>
            </div>
          </AnimatedSection>

          {/* 4 étapes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "clamp(1.25rem, 4vw, 1.75rem)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Numéro en filigrane */}
                  <span style={{
                    position: "absolute", top: "12px", right: "16px",
                    fontSize: "3.5rem", fontWeight: "900",
                    color: "rgba(255,255,255,0.05)",
                    fontFamily: "Georgia, serif", lineHeight: 1,
                  }}>
                    {step.num}
                  </span>
                  {/* Numéro visible */}
                  <p style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.8rem", fontWeight: "900",
                    color: "#FFFFFF", lineHeight: "1",
                    marginBottom: "16px", letterSpacing: "-0.02em",
                  }}>
                    {step.num}
                  </p>
                  <h3 style={{
                    fontSize: "1rem", fontWeight: "700",
                    color: "#FFFFFF", marginBottom: "10px",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "#9CA3AF", lineHeight: "1.7" }}>
                    {step.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
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