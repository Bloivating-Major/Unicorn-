import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl tracking-wide uppercase transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-light to-gold text-obsidian shadow-gold-md hover:shadow-gold-lg hover:-translate-y-0.5",
    secondary:
      "bg-transparent border border-gold/30 text-ivory hover:border-gold hover:text-gold-light",
    white:
      "bg-ivory text-obsidian hover:bg-ivory/90",
    ghost:
      "bg-transparent text-ivory hover:text-gold-light",
  };

  const sizes = {
    small:  "px-4 py-2 text-xs gap-1.5",
    medium: "px-5 py-2.5 text-sm gap-2",
    large:  "px-7 py-3 text-sm gap-2",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;