"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, LOGO_SRC } from "@/lib/constants";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isScrolled]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Header ── */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
          isScrolled ? "border-gray-200 shadow-sm py-2" : "border-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" style={{ maxWidth: "180px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt="EL OLAM GIBHOR"
                style={{
                  height: "clamp(40px, 8vw, 56px)",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{
                      position: "relative",
                      fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "#2563EB" : "#374151",
                      textDecoration: "none",
                      padding: "8px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.2s",
                    }}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={14} style={{ opacity: 0.5 }} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Bouton CTA desktop */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  padding: "10px 24px",
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
              >
                Commencer
              </Link>
            </div>

            {/* Burger mobile */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 rounded-lg focus:outline-none text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Menu mobile fullscreen ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: headerHeight }}
          >
            {/* Fond semi-transparent */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Panneau menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Liens de navigation */}
              <div className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "14px 16px",
                            fontSize: "17px",
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? "#2563EB" : "#1F2937",
                            textDecoration: "none",
                            borderRadius: "12px",
                            backgroundColor: isActive ? "#EFF6FF" : "transparent",
                            transition: "all 0.2s",
                          }}
                        >
                          {link.name}
                          {link.hasDropdown && (
                            <ChevronDown size={16} style={{ opacity: 0.4 }} />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bouton CTA en bas */}
              <div className="px-6 pb-8 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 32px",
                    backgroundColor: "#2563EB",
                    color: "#FFFFFF",
                    borderRadius: "14px",
                    fontWeight: 700,
                    fontSize: "16px",
                    width: "100%",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  Commencer
                </Link>
                <p style={{
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#9CA3AF",
                  marginTop: "16px",
                }}>
                  Diagnostic stratégique gratuit
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Espaceur pour compenser le header fixed */}
      <div style={{ height: headerHeight }} />
    </>
  );
};

export default Navbar;