import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}) => {
  const containerClasses = `flex flex-col max-w-3xl ${
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left"
  } ${className}`;

  return (
    <div className={containerClasses}>
      {subtitle && (
        <span className="text-xs font-semibold uppercase tracking-widest text-turquoise mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          dark ? "text-white" : "text-bg-dark"
        }`}
      >
        {title}
      </h2>
      {align === "center" ? (
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-turquoise rounded mb-6" />
      ) : (
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-turquoise rounded mb-6" />
      )}
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
