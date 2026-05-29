"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin, Globe, Building2, Hash, FileText, ArrowUpRight } from "lucide-react";

const FOOTER_NAV = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Formation", href: "/formation" },
  { name: "Contact", href: "/contact" },
];

const FOOTER_SERVICES = [
  { name: "Audit Stratégique", href: "/services#audit-strategique" },
  { name: "Structuration Financière", href: "/services#structuration-financiere" },
  { name: "Transformation Digitale", href: "/services#transformation-digitale" },
  { name: "Business Intelligence", href: "/services#business-intelligence" },
  { name: "Accompagnement Dirigeant", href: "/services#accompagnement-dirigeant" },
  { name: "Conformité Fiscale", href: "/services#conformite-fiscale" },
];

const SOCIAL_LINKS = [
  { name: "LinkedIn",  href: "https://www.linkedin.com/company/el-olam-gibhor-france-benin/",  Icon: Linkedin  },
  { name: "Facebook",  href: "https://www.facebook.com/share/1BEETcSSkZ/?mibextid=wwXIfr",  Icon: Facebook  },
];

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: "#FFFFFF",
      borderTop: "1px solid #E5E7EB",
      width: "100%",
    }}>
      
      {/* ── Partie principale ── */}
      <div style={{
        width: "100%",
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "clamp(1.5rem, 5vw, 3.5rem)",
        paddingRight: "clamp(1.5rem, 5vw, 3.5rem)",
        paddingTop: "clamp(40px, 8vw, 80px)",
        paddingBottom: "clamp(24px, 5vw, 40px)",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(32px, 6vw, 56px)",
        }}>

          {/* ── Ligne 1 : Logo + Description + Coordonnées ── */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "clamp(24px, 5vw, 48px)",
          }}>

            {/* Logo + tagline */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "300px",
              width: "100%",
            }}>
              <Link href="/" style={{
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "20px",
              }}>
                <img
                  src="/img/logo.png"
                  alt="EL OLAM GIBHOR"
                  style={{
                    height: "clamp(100px, 20vw, 190px)",
                    width: "auto",
                    display: "block",
                  }}
                />
              </Link>
              <p style={{
                fontSize: "clamp(13px, 2vw, 14px)",
                color: "#6B7280",
                lineHeight: "1.7",
                margin: 0,
              }}>
                Structuration financière & conseil stratégique pour les PME binationales Afrique–Europe.
              </p>
            </div>

            {/* Coordonnées complètes */}
            <div style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "clamp(24px, 4vw, 48px)",
            }}>

              {/* Bénin */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                minWidth: "200px",
              }}>
                <p style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  margin: "0 0 4px 0",
                }}>
                  🇧🇯 Bénin (Cotonou)
                </p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#374151" }}>
                  <MapPin size={14} style={{ color: "#1E3A8A", flexShrink: 0, marginTop: "2px" }} />
                  <span>Cotonou, Bénin</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                  <FileText size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  <span>RCCM : RB/COT/17 A 33790</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                  <Hash size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  <span>IFU : 1201503044102</span>
                </div>
              </div>

              {/* France */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                minWidth: "200px",
              }}>
                <p style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  margin: "0 0 4px 0",
                }}>
                  🇫🇷 France
                </p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#374151" }}>
                  <MapPin size={14} style={{ color: "#1E3A8A", flexShrink: 0, marginTop: "2px" }} />
                  <span>23B Avenue de la Réunion<br />93600 Aulnay-sous-Bois</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                  <Building2 size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  <span>SIREN : 992 354 589</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                  <Building2 size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  <span>SIRET : 992 354 589 00010</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                  <FileText size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  <span>Code APE : 70.22Z</span>
                </div>
              </div>

              {/* Contact */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                minWidth: "200px",
              }}>
                <p style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  margin: "0 0 4px 0",
                }}>
                  Contact
                </p>
                <a href="mailto:contact@elolamgibhor.com" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#374151",
                  textDecoration: "none",
                }}>
                  <Mail size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  contact@elolamgibhor.com
                </a>
                <a href="https://www.elolamgibhor.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#374151",
                  textDecoration: "none",
                }}>
                  <Globe size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  www.elolamgibhor.com
                </a>
                <a href="tel:+2290161195319" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#374151",
                  textDecoration: "none",
                }}>
                  <Phone size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  +229 01 61 195 319
                </a>
                <a href="tel:+33759873708" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#374151",
                  textDecoration: "none",
                }}>
                  <Phone size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  +33 7 59 87 37 08
                </a>
                <a href="tel:+33758463169" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#374151",
                  textDecoration: "none",
                }}>
                  <Phone size={14} style={{ color: "#1E3A8A", flexShrink: 0 }} />
                  +33 7 58 46 31 69
                </a>
              </div>
            </div>

          </div>

          {/* ── Ligne 2 : Colonnes de liens ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "clamp(24px, 5vw, 40px)",
            paddingTop: "clamp(24px, 4vw, 32px)",
            borderTop: "1px solid #F3F4F6",
          }}>

            {/* Navigation */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0A0A0A",
                margin: "0 0 16px 0",
              }}>
                Navigation
              </p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}>
                {FOOTER_NAV.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      textDecoration: "none",
                    }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0A0A0A",
                margin: "0 0 16px 0",
              }}>
                Services
              </p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}>
                {FOOTER_SERVICES.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      textDecoration: "none",
                    }}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0A0A0A",
                margin: "0 0 16px 0",
              }}>
                Nous suivre
              </p>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}>
                {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#6B7280",
                      textDecoration: "none",
                    }}
                  >
                    <Icon size={15} style={{ flexShrink: 0 }} />
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Diagnostic */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#F9FAFB",
              padding: "24px 20px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
            }}>
              <p style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#0A0A0A",
                margin: "0 0 8px 0",
                lineHeight: "1.35",
              }}>
                Prêt à transformer<br />votre entreprise ?
              </p>
              <p style={{
                fontSize: "13px",
                color: "#6B7280",
                margin: "0 0 18px 0",
                lineHeight: "1.5",
              }}>
                Réservez un diagnostic stratégique gratuit.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "10px 12px",
                  backgroundColor: "#1E3A8A",
                  color: "#FFFFFF",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  fontSize: "11px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Diagnostic gratuit
                <ArrowUpRight size={14} />
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* ── Barre basse ── */}
      <div style={{
        width: "100%",
        borderTop: "1px solid #F3F4F6",
        paddingTop: "20px",
        paddingBottom: "24px",
        paddingLeft: "clamp(1.5rem, 5vw, 3.5rem)",
        paddingRight: "clamp(1.5rem, 5vw, 3.5rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}>
        <p style={{
          fontSize: "13px",
          color: "#9CA3AF",
          margin: 0,
          textAlign: "center",
        }}>
          © 2026 EL OLAM GIBHOR. Tous droits réservés.
        </p>
        <p style={{
          fontSize: "11px",
          color: "#D1D5DB",
          margin: 0,
          textAlign: "center",
        }}>
          Europe & Afrique
        </p>
      </div>

    </footer>
  );
};

export default Footer;