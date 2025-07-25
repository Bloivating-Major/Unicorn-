import React, { useState } from "react";
import { pricingPlans } from "../../lib/constants/pricingPlans";
import Button from "../atoms/Button";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <section className="section-wrapper max-sm:px-5">
      <div className="text-center">
        <p className="body-text mb-2">Affordable</p>
        <h2 className="heading-text mb-2">Pricing Plans</h2>
        <p className="body-text mb-2">
          Choose a plan that suits your chess journey.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center bg-background-dull rounded-full p-1 mb-10">
          <button
            onClick={() => setBillingCycle("Monthly")}
            className={`px-4 py-1 rounded-full transition-all ${
              billingCycle === "Monthly"
                ? "bg-white text-black"
                : "text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("Yearly")}
            className={`px-4 py-1 rounded-full transition-all ${
              billingCycle === "Yearly"
                ? "bg-white text-black"
                : "text-white"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 ">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-background-dull border border-neutral-800 rounded-xl p-6 flex flex-col justify-between shadow-md"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="text-left space-y-2 mb-6 text-neutral-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="primary" size="large">
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
