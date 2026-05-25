"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeIn } from "@/lib/animations";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  currentPage: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, currentPage }) => {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-premium flex items-center justify-center overflow-hidden border-b border-white/5">
      {/* Background visual details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,60,151,0.15),transparent_50%)]" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center z-10" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.6, 0.1)}
          className="flex flex-col items-center"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-turquoise">
            <Link href="/" className="hover:text-primary-light transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-500" />
            <span className="text-gray-400">{currentPage}</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
