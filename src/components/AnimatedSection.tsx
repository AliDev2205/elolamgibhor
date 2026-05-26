"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "fadeIn";
  delay?: number;
  duration?: number;
  className?: string;
  viewportOnce?: boolean;
  viewportAmount?: number;
  animateOnLoad?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
  viewportOnce = true,
  viewportAmount = 0.15,
  animateOnLoad = false,
}) => {
  const getVariants = () => {
    switch (animation) {
      case "fadeInUp":
        return fadeIn("up", duration, delay);
      case "fadeInDown":
        return fadeIn("down", duration, delay);
      case "fadeInLeft":
        return fadeIn("left", duration, delay);
      case "fadeInRight":
        return fadeIn("right", duration, delay);
      case "scaleIn":
        return scaleIn(duration, delay);
      case "fadeIn":
      default:
        return fadeIn("none", duration, delay);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={animateOnLoad ? "show" : undefined}
      whileInView={animateOnLoad ? undefined : "show"}
      viewport={animateOnLoad ? undefined : { once: viewportOnce, amount: viewportAmount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
