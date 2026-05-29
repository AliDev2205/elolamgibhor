"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT_INFO } from "@/lib/constants";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  backgroundColor: "#FFFFFF",
  border: "1.5px solid #E5E7EB",
  borderRadius: "10px",
  fontSize: "0.85rem",
  color: "#07111F",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#6B7280",
  marginBottom: "8px",
  display: "block",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",
    subject: "Conseil Stratégique", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("sujet") === "formation") {
        setFormData((prev) => ({ ...prev, subject: "Formation Professionnelle" }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "Conseil Stratégique", message: "" });
    }, 1500);
  };

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
              Contact
            </p>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: "900", color: "#FFFFFF",
              lineHeight: "1.08", letterSpacing: "-0.025em", marginBottom: "24px",
            }}>
              Contactez-nous
            </h1>
            <p style={{
              fontSize: "0.95rem", color: "#9CA3AF", lineHeight: "1.75",
              maxWidth: "480px", margin: "0 auto",
            }}>
              Nos consultants se tiennent à votre disposition pour planifier un entretien ou répondre à vos questions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTENU PRINCIPAL
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "clamp(3.5rem, 7vw, 6rem)", paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }} className="w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

            {/* ── Gauche — Coordonnées + carte ── */}
            <AnimatedSection animation="fadeInRight">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
                <h3 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "1.6rem", fontWeight: "900",
                  color: "#07111F", marginBottom: "32px",
                  letterSpacing: "-0.02em",
                }}
                className="text-center lg:text-left"
                >
                  Nos coordonnées
                </h3>

                <div className="w-full flex flex-col items-center lg:items-start gap-6 mb-10">
                  {[
                    { Icon: MapPin, label: "Adresse", value: CONTACT_INFO.address, href: null },
                    { Icon: Phone, label: "Téléphone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}` },
                    { Icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                    { Icon: Clock, label: "Horaires", value: CONTACT_INFO.hours, href: null },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }} className="w-full max-w-[400px] text-left">
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "10px",
                        backgroundColor: "rgba(0,60,151,0.06)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Icon style={{ width: "18px", height: "18px", color: "#1A3DB5" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", color: "#07111F", textTransform: "uppercase" as const, marginBottom: "4px" }}>
                          {label}
                        </p>
                        {href ? (
                          <a href={href} style={{ fontSize: "0.825rem", color: "#4B5563", textDecoration: "none" }}>
                            {value}
                          </a>
                        ) : (
                          <p style={{ fontSize: "0.825rem", color: "#4B5563", lineHeight: "1.6" }}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carte Google Maps */}
                <div style={{ height: "220px", borderRadius: "12px", overflow: "hidden", border: "1px solid #E5E7EB", width: "100%", maxWidth: "480px" }}>
                  <iframe
                    src={CONTACT_INFO.googleMapsUrl}
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    title="EL OLAM GIBHOR office map"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* ── Droite — Formulaire ── */}
            <AnimatedSection animation="fadeInLeft">
              <div style={{
                backgroundColor: "#F5F7FA",
                borderRadius: "20px",
                padding: "clamp(1.25rem, 5vw, 2.5rem)",
                border: "1px solid #E5E7EB",
              }}>
                <h3 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "1.4rem", fontWeight: "900",
                  color: "#07111F", marginBottom: "28px",
                  letterSpacing: "-0.02em",
                }}
                className="text-center lg:text-left"
                >
                  Envoyez-nous un message
                </h3>

                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    >
                      {/* Nom + Téléphone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label style={labelStyle}>Nom complet</label>
                          <input type="text" name="name" required value={formData.name}
                            onChange={handleChange} placeholder="Samuel Olam" style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Téléphone</label>
                          <input type="tel" name="phone" value={formData.phone}
                            onChange={handleChange} placeholder="+33 6 00 00 00 00" style={inputStyle} />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label style={labelStyle}>Adresse email</label>
                        <input type="email" name="email" required value={formData.email}
                          onChange={handleChange} placeholder="adresse@entreprise.com" style={inputStyle} />
                      </div>

                      {/* Sujet */}
                      <div>
                        <label style={labelStyle}>Sujet</label>
                        <select name="subject" value={formData.subject}
                          onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer", appearance: "none" as any }}>
                          <option value="Conseil Stratégique">Conseil Stratégique</option>
                          <option value="Gestion Financière">Gestion Financière</option>
                          <option value="Audit & Conformité">Audit & Conformité</option>
                          <option value="Transformation Digitale">Transformation Digitale</option>
                          <option value="Accompagnement de Projets">Accompagnement de Projets</option>
                          <option value="Formation Professionnelle">Formation Professionnelle</option>
                          <option value="Autre demande">Autre demande</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={labelStyle}>Message</label>
                        <textarea name="message" required rows={5} value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez brièvement vos besoins stratégiques ou financiers..."
                          style={{ ...inputStyle, resize: "none" }} />
                      </div>

                      {/* Bouton submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                          gap: "8px", padding: "14px 28px",
                          backgroundColor: isSubmitting ? "#9CA3AF" : "#1A3DB5",
                          color: "#FFFFFF", border: "none", borderRadius: "9999px",
                          fontWeight: "600", fontSize: "14px", cursor: isSubmitting ? "not-allowed" : "pointer",
                          transition: "background-color 0.2s", width: "100%",
                        }}
                      >
                        <Send style={{ width: "16px", height: "16px" }} />
                        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center", textAlign: "center", padding: "48px 0",
                      }}
                    >
                      <div style={{
                        width: "64px", height: "64px", borderRadius: "50%",
                        backgroundColor: "rgba(0,191,166,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: "24px",
                      }}>
                        <CheckCircle style={{ width: "32px", height: "32px", color: "#00A896" }} />
                      </div>
                      <h4 style={{
                        fontFamily: "Georgia, serif", fontSize: "1.2rem",
                        fontWeight: "800", color: "#07111F", marginBottom: "12px",
                      }}>
                        Votre demande a été envoyée
                      </h4>
                      <p style={{
                        fontSize: "0.825rem", color: "#6B7280",
                        lineHeight: "1.7", maxWidth: "320px", marginBottom: "28px",
                      }}>
                        Merci pour votre intérêt. Un consultant d'EL OLAM GIBHOR étudiera votre demande et vous recontactera sous 24 heures ouvrées.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        style={{
                          padding: "10px 24px", backgroundColor: "transparent",
                          color: "#07111F", border: "1.5px solid rgba(7,17,31,0.25)",
                          borderRadius: "9999px", fontWeight: "500", fontSize: "13px",
                          cursor: "pointer",
                        }}
                      >
                        Envoyer un autre message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}