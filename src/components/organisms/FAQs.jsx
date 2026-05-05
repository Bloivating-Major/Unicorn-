import React, { useState } from "react";
import { faqData } from "../../lib/constants/faqs";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-obsidian section-wrapper">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow-text block mb-3">FAQs</span>
          <h2 className="heading-text">Frequently asked questions</h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden
                ${openIndex === i
                  ? "border-gold/30 bg-dark-2"
                  : "border-gold/10 bg-dark-2 hover:border-gold/20"
                }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-playfair text-base sm:text-lg font-semibold text-ivory">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 flex-shrink-0 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold text-xl font-light transition-transform duration-300
                    ${openIndex === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300
                  ${openIndex === i ? "max-h-64 pb-5" : "max-h-0"}`}
              >
                <p className="body-text text-sm leading-7">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;