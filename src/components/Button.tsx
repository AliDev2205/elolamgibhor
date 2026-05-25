"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  href,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/20 focus:ring-primary-light",
    secondary:
      "bg-turquoise hover:bg-turquoise/90 text-white shadow-lg shadow-turquoise/20 focus:ring-turquoise",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost:
      "text-primary hover:bg-primary/5 hover:text-primary-light focus:ring-primary",
    gold:
      "bg-gradient-to-r from-orange to-orange-gold hover:from-orange/90 hover:to-orange-gold/90 text-white shadow-lg shadow-orange/20 focus:ring-orange",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={`mr-2 h-4 w-4 ${size === "lg" ? "h-5 w-5" : ""}`} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={`ml-2 h-4 w-4 ${size === "lg" ? "h-5 w-5" : ""}`} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={buttonClasses}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {renderContent()}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.div
      className="inline-flex"
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      <button
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {renderContent()}
      </button>
    </motion.div>
  );
};

export default Button;
