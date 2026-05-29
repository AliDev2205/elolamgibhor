"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building2, Hash, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT_INFO } from "@/lib/constants";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.488 1.977 14.021 1.053 11.998 1.053c-5.444 0-9.87 4.372-9.874 9.8.001 2.03.535 4.02 1.547 5.765l-.974 3.562 3.65-.958zm12.35-5.321c-.328-.164-1.94-.959-2.241-1.07-.301-.11-.52-.164-.74.164-.22.329-.85 1.07-1.042 1.29-.191.22-.383.246-.71.082-.329-.164-1.389-.512-2.646-1.633-.978-.872-1.637-1.95-1.829-2.277-.193-.329-.02-.507.144-.669.148-.146.329-.383.493-.575.165-.192.22-.329.329-.548.11-.219.055-.411-.028-.575-.082-.164-.74-1.782-1.014-2.44-.267-.643-.539-.556-.74-.566-.207-.01-.444-.012-.68-.012-.237 0-.623.089-.949.444-.328.356-1.253 1.226-1.253 2.988 0 1.762 1.282 3.462 1.462 3.702.18.24 2.525 3.856 6.118 5.4 1.83.788 3.256 1.253 4.371 1.605 1.84.585 3.513.5 4.836.303 1.474-.22 3.013-1.233 3.431-2.427.417-1.194.417-2.22.293-2.439-.124-.219-.444-.329-.773-.493z" />
  </svg>
);

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

                {/* Cartes Bureaux France / Bénin */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "100%",
                  maxWidth: "480px",
                  marginBottom: "28px",
                }}>
                  {/* Bureau Bénin */}
                  <div style={{
                    backgroundColor: "#F9FAFB",
                    borderRadius: "14px",
                    padding: "20px",
                    border: "1px solid #E5E7EB",
                    textAlign: "left" as const,
                  }}>
                    <p style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: "#1A3DB5",
                      marginBottom: "12px",
                    }}>
                      🇧🇯 Bureau Bénin (Cotonou)
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.8rem", color: "#4B5563" }}>
                        <MapPin size={15} style={{ color: "#1A3DB5", flexShrink: 0, marginTop: "2px" }} />
                        <span>Cotonou, Bénin</span>
                      </div>
                      <a href="tel:+2290161195319" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563", textDecoration: "none" }}>
                        <Phone size={15} style={{ color: "#1A3DB5", flexShrink: 0 }} />
                        <span>+229 01 61 195 319</span>
                      </a>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563" }}>
                        <FileText size={15} style={{ color: "#1A3DB5", flexShrink: 0 }} />
                        <span>RCCM : RB/COT/17 A 33790</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563" }}>
                        <Hash size={15} style={{ color: "#1A3DB5", flexShrink: 0 }} />
                        <span>IFU : 1201503044102</span>
                      </div>
                    </div>

                    {/* Bouton WhatsApp Bénin */}
                    <a
                      href="https://wa.me/2290161195319"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        backgroundColor: "#25D366",
                        color: "#FFFFFF",
                        borderRadius: "9999px",
                        fontWeight: "600",
                        fontSize: "11px",
                        textDecoration: "none",
                        marginTop: "14px",
                        transition: "background-color 0.2s, transform 0.2s",
                      }}
                      className="hover:bg-[#20ba56] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <WhatsAppIcon style={{ width: "14px", height: "14px" }} />
                      WhatsApp Bénin
                    </a>
                  </div>

                  {/* Bureau France */}
                  <div style={{
                    backgroundColor: "#F9FAFB",
                    borderRadius: "14px",
                    padding: "20px",
                    border: "1px solid #E5E7EB",
                    textAlign: "left" as const,
                  }}>
                    <p style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: "#1A3DB5",
                      marginBottom: "12px",
                    }}>
                      🇫🇷 Bureau France (Paris)
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.8rem", color: "#4B5563" }}>
                        <MapPin size={15} style={{ color: "#1A3DB5", flexShrink: 0, marginTop: "2px" }} />
                        <span>23B Avenue de la Réunion, 93600 Aulnay-sous-Bois</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <a href="tel:+33759873708" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563", textDecoration: "none" }}>
                          <Phone size={15} style={{ color: "#1A3DB5", flexShrink: 0 }} />
                          <span>+33 7 59 87 37 08</span>
                        </a>
                        <a href="tel:+33758463169" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563", textDecoration: "none", marginLeft: "25px" }}>
                          <span>+33 7 58 46 31 69</span>
                        </a>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563" }}>
                        <Building2 size={15} style={{ color: "#1A3DB5", flexShrink: 0 }} />
                        <span>SIRET : 992 354 589 00010</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563" }}>
                        <FileText size={15} style={{ color: "#1A3DB5", flexShrink: 0 }} />
                        <span>Code APE : 70.22Z</span>
                      </div>
                    </div>

                    {/* Bouton WhatsApp France */}
                    <a
                      href="https://wa.me/33759873708"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        backgroundColor: "#25D366",
                        color: "#FFFFFF",
                        borderRadius: "9999px",
                        fontWeight: "600",
                        fontSize: "11px",
                        textDecoration: "none",
                        marginTop: "14px",
                        transition: "background-color 0.2s, transform 0.2s",
                      }}
                      className="hover:bg-[#20ba56] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <WhatsAppIcon style={{ width: "14px", height: "14px" }} />
                      WhatsApp France
                    </a>
                  </div>

                  {/* Infos Générales */}
                  <div style={{
                    backgroundColor: "#F9FAFB",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    border: "1px solid #E5E7EB",
                    textAlign: "left" as const,
                  }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <a href="mailto:contact@elolamgibhor.com" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#4B5563", textDecoration: "none" }}>
                        <Mail size={15} style={{ color: "#1A3DB5", flexShrink: 0 }} />
                        <span>contact@elolamgibhor.com</span>
                      </a>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.8rem", color: "#4B5563" }}>
                        <Clock size={15} style={{ color: "#1A3DB5", flexShrink: 0, marginTop: "2px" }} />
                        <span>{CONTACT_INFO.hours}</span>
                      </div>
                    </div>
                  </div>
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