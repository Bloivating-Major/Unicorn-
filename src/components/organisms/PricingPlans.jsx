import React, { useState } from "react";
import { pricingPlans } from "../../lib/constants/pricingPlans";
import Button from "../atoms/Button";

const PricingPlans = () => {
  const [billing, setBilling] = useState("Monthly");

  return (
    <section className="bg-obsidian section-wrapper">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="eyebrow-text block mb-3">Pricing</span>
        <h2 className="heading-text mb-4">
          Invest in{" "}
          <em className="italic text-gold-light">greatness</em>
        </h2>
        <p className="body-text max-w-md mx-auto">
          Transparent pricing. No hidden fees. Cancel anytime.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center bg-dark-3 border border-gold/15 rounded-full p-1 mt-6">
          {["Monthly", "Yearly"].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBilling(cycle)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${billing === cycle
                  ? "bg-gold text-obsidian shadow-gold-sm"
                  : "text-ivory-dim hover:text-ivory"
                }`}
            >
              {cycle}
              {cycle === "Yearly" && (
                <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                  −15%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => {
          const isFeatured = index === 1;
          const price = billing === "Yearly"
            ? `₹${Math.round(parseInt(plan.price.replace(/[^0-9]/g, "")) * 0.85 / 1000) * 1000}`
            : plan.price.replace("/mo", "");

          return (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1
                ${isFeatured
                  ? "bg-gradient-to-b from-gold/12 to-gold/4 border-gold/40 shadow-gold-md"
                  : "bg-dark-2 border-gold/10 hover:border-gold/25"
                }`}
            >
              {/* Most popular badge */}
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-obsidian text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-gold-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p className="eyebrow-text mb-3">{plan.name}</p>

              {/* Price */}
              <div className="mb-1">
                <span className="font-playfair text-4xl font-bold text-ivory leading-none">
                  {price}
                </span>
              </div>
              <p className="text-xs text-ivory-dim mb-6">
                per month{billing === "Yearly" ? " · billed annually" : ""}
              </p>

              {/* Divider */}
              <div className="h-px bg-gold/10 mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ivory-dim">
                    <span className="text-gold font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={isFeatured ? "primary" : "secondary"}
                size="large"
                className="w-full justify-center"
              >
                Get Started
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingPlans;