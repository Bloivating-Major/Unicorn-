import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "medium", 
  className = "", 
  ...props 
}) => {
  const baseStyles = "rounded-xl font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-blue-lighter text-black hover:bg-blue-lighter/80",
    secondary: "bg-neutral-lighter border border-white text-black hover:bg-neutral-lighter/80",
    white: "bg-white text-black hover:bg-gray-100"
  };
  
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-2"
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;