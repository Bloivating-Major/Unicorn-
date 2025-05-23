import React, { useState } from "react";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$19/mo",
    features: [
      "Access to beginner classes",
      "Weekly practice sessions",
      "Online resources included",
    ],
  },
  {
    name: "Business Plan",
    price: "$29/mo",
    features: [
      "All Basic features",
      "Monthly tournaments access",
      "Personal coaching sessions",
      "Exclusive member events",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$49/mo",
    features: [
      "All Business features",
      "Advanced strategy workshops",
      "Priority support access",
      "Custom training plans",
      "Monthly analysis reports",
    ],
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <section className="bg-background-dark text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-neutral-400 mb-2">Affordable</p>
        <h2 className="text-3xl font-semibold mb-2">Pricing Plans</h2>
        <p className="text-neutral-400 mb-6">
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
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-background-light border border-neutral-800 rounded-xl p-6 flex flex-col justify-between shadow-md"
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
              <button className="mt-auto bg-primary-light text-black font-medium px-4 py-2 rounded-md hover:bg-primary">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
