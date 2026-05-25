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
  const [headerHeight, setHeaderHeight] = useState(80);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
  }, [isScrolled, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const textColor = "text-gray-700";
  const hoverColor = "hover:text-blue-600";

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
          isScrolled ? "shadow-sm py-2.5" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center gap-4">

            <Link href="/" className="flex items-center group shrink-0 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt="EL OLAM GIBHOR"
                className="h-14 sm:h-16 w-auto max-w-[200px] sm:max-w-[240px] object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-300 py-2 flex items-center gap-1 ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : `${textColor} ${hoverColor}`
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4 opacity-60" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  padding: "10px 24px",
                  backgroundColor: "#2563EB",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  fontWeight: "700",
                  fontSize: "14px",
                  transition: "all 0.3s",
                }}
                className="hover:bg-blue-700"
              >
                Commencer
              </Link>
            </div>

            <div className="md:hidden shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg focus:outline-none cursor-pointer transition-colors text-gray-600 hover:bg-gray-100"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              style={{ top: headerHeight }}
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed left-0 right-0 bottom-0 z-50 bg-white md:hidden flex flex-col border-t border-gray-100 shadow-lg overflow-y-auto"
              style={{ top: headerHeight }}
            >
              <nav className="flex flex-col gap-1 px-6 py-6">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3.5 text-lg font-semibold transition-colors ${
                          isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {link.name}
                          {link.hasDropdown && (
                            <ChevronDown className="h-5 w-5 opacity-50" />
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto px-6 pb-8 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 32px",
                    backgroundColor: "#2563EB",
                    color: "#ffffff",
                    borderRadius: "12px",
                    fontWeight: "700",
                    fontSize: "16px",
                    width: "100%",
                    textDecoration: "none",
                  }}
                  className="hover:opacity-90"
                >
                  Commencer
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
