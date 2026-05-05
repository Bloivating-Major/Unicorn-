import React from "react";
import Button from "../atoms/Button";

const CHESS_ICONS = ["♟", "♜", "♞"];

const FeatureCard = ({ title, description, buttonText, iconUrl, index = 0 }) => {
  return (
    <div className="group premium-card p-7 flex flex-col gap-4">
      {/* top gold line reveal on hover */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-7 -mx-7 mb-3" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl">
        {iconUrl
          ? <img src={iconUrl} alt="" className="w-7 h-7 object-contain brightness-0 invert sepia saturate-200 hue-rotate-[10deg]" />
          : <span>{CHESS_ICONS[index % CHESS_ICONS.length]}</span>
        }
      </div>

      {/* Text */}
      <h3 className="font-playfair text-xl font-semibold text-ivory leading-snug">
        {title}
      </h3>
      <p className="body-text text-sm flex-1">{description}</p>

      {/* Link */}
      <button className="text-gold text-sm font-semibold tracking-wide uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-200 w-fit">
        {buttonText} <span>→</span>
      </button>
    </div>
  );
};

export default FeatureCard;