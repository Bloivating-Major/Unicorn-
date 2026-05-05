import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group premium-card p-7 flex flex-col gap-5 h-full">
      {/* Stars */}
      <div className="flex gap-1">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-gold text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-ivory text-sm leading-7 italic flex-1">
        "{testimonial.message}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-gold/10">
        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-playfair text-sm font-bold text-gold-light flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-ivory">{testimonial.name}</p>
          <p className="text-xs text-ivory-dim">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;