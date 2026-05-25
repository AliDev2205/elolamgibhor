"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { LOGO_SRC } from "@/lib/constants";

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
  { name: "LinkedIn",  href: "https://linkedin.com",  Icon: Linkedin  },
  { name: "Twitter",   href: "https://twitter.com",   Icon: Twitter   },
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { name: "Facebook",  href: "https://facebook.com",  Icon: Facebook  },
];

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E5E7EB" }} className="w-full">

      {/* ── Partie principale ── */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-14 py-12 sm:py-16 pb-10 sm:pb-12" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-12 items-start">

          {/* Colonne 1 — Logo + tagline */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "14px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt="EL OLAM GIBHOR"
                style={{ height: "64px", width: "auto", objectFit: "contain", display: "block" }}
              />
            </Link>
            <p style={{
              fontSize: "0.8rem",
              color: "#6B7280",
              lineHeight: "1.7",
              maxWidth: "240px",
            }}>
              Structuration financière & conseil stratégique pour les PME binationales Afrique–Europe.
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "#07111F",
              marginBottom: "20px",
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {FOOTER_NAV.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{
                    fontSize: "0.85rem",
                    color: "#4B5563",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#07111F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4B5563")}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Services */}
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "#07111F",
              marginBottom: "20px",
            }}>
              Services
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {FOOTER_SERVICES.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} style={{
                    fontSize: "0.85rem",
                    color: "#4B5563",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#07111F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4B5563")}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Réseaux sociaux */}
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "#07111F",
              marginBottom: "20px",
            }}>
              Nous suivre
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
                    fontSize: "0.85rem",
                    color: "#4B5563",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#07111F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4B5563")}
                >
                  <Icon style={{ width: "16px", height: "16px", flexShrink: 0 }} />
                  {name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Barre bas ── */}
      <div className="w-full border-t border-gray-200 px-6 sm:px-8 lg:px-12 xl:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
        <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
          © 2026 EL OLAM GIBHOR. Tous droits réservés.
        </p>
        <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
          Europe & Afrique
        </p>
      </div>

    </footer>
  );
};

export default Footer;