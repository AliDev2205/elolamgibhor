"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

// ─── Dynamic Icon Renderer ───────────────────────────────
interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = "h-6 w-6",
}) => {
  // @ts-ignore
  const IconComponent = Icons[name] as LucideIcon;
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
};

// ─── 1. Service Card ─────────────────────────────────────
interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  details?: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconName,
  href,
  details,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
      }}
      className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm h-full"
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/5 text-primary mb-6">
        <DynamicIcon name={iconName} className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-bg-dark mb-3">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow">
        {description}
      </p>

      {details && details.length > 0 && (
        <ul className="flex flex-col gap-2 mb-6 border-t border-gray-50 pt-4">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-center text-xs text-gray-500">
              <Icons.Check className="h-3 w-3 text-turquoise mr-2 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors group mt-auto"
      >
        Découvrir
        <Icons.ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

// ─── 2. Team Card ────────────────────────────────────────
interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  bio,
}) => {
  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-bg-dark">{name}</h3>
        <p className="text-sm text-turquoise font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

// ─── 3. Stat Card (with counter animation) ───────────────
interface StatCardProps {
  value: string;
  label: string;
  dark?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  dark = false,
}) => {
  const [count, setCount] = useState<number | string>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const textPart = value.replace(/[0-9]/g, "");

    if (isNaN(numericPart)) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 2000;
    const increment = numericPart / (duration / 16);
    let timer: ReturnType<typeof setInterval>;

    const counter = () => {
      start += increment;
      if (start >= numericPart) {
        setCount(numericPart + textPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start) + textPart);
      }
    };

    timer = setInterval(counter, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <span
        className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 ${
          dark ? "text-white" : "text-gradient-primary"
        }`}
      >
        {count}
      </span>
      <span
        className={`text-xs md:text-sm font-semibold uppercase tracking-wider ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

// ─── 4. Testimonial Card ─────────────────────────────────
interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
}) => {
  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm h-full">
      <div className="h-8 w-8 text-primary/10 mb-4">
        <Icons.Quote className="h-8 w-8 fill-current" />
      </div>
      <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-gray-50 pt-4 mt-auto">
        <h4 className="font-bold text-bg-dark text-sm md:text-base">
          {author}
        </h4>
        <p className="text-xs text-gray-500 font-medium">{position}</p>
      </div>
    </div>
  );
};

// ─── 5. Problem Card ─────────────────────────────────────
interface ProblemCardProps {
  title: string;
  description: string;
  iconName: string;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  description,
  iconName,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-orange/5 text-orange mb-5">
        <DynamicIcon name={iconName} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-bg-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

// ─── 6. Process Step Card ────────────────────────────────
interface ProcessStepCardProps {
  step: string;
  title: string;
  description: string;
  iconName: string;
  isLast?: boolean;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  step,
  title,
  description,
  iconName,
  isLast = false,
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connecting line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-primary/20 via-turquoise/20 to-primary/20" />
      )}

      {/* Step circle */}
      <div className="relative z-10 h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white shadow-lg mb-5">
        <DynamicIcon name={iconName} className="h-8 w-8" />
      </div>

      {/* Step number */}
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-turquoise mb-2">
        Étape {step}
      </span>

      <h3 className="text-lg font-bold text-bg-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
        {description}
      </p>
    </div>
  );
};

// ─── 7. FAQ Item — style minimaliste ────────────────────
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div style={{ borderBottom: "1px solid rgba(7,17,31,0.15)" }}>
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left" as const,
          gap: "16px",
        }}
      >
        <span style={{
          fontSize: "0.9rem",
          fontWeight: "700",
          color: "#07111F",
          lineHeight: "1.4",
        }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6L8 11L13 6" stroke="#07111F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresenceWrapper isOpen={isOpen}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p style={{
            fontSize: "0.8rem",
            color: "#374151",
            lineHeight: "1.75",
            paddingBottom: "20px",
            maxWidth: "560px",
          }}>
            {answer}
          </p>
        </motion.div>
      </AnimatePresenceWrapper>
    </div>
  );
};
// AnimatePresence wrapper for FAQ
const AnimatePresenceWrapper: React.FC<{
  isOpen: boolean;
  children: React.ReactNode;
}> = ({ isOpen, children }) => {
  const { AnimatePresence } = require("framer-motion");
  return <AnimatePresence>{isOpen && children}</AnimatePresence>;
};
