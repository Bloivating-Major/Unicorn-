import React, { useState } from "react";
import { faqData } from "../../lib/constants/faqs";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white section-wrapper">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow-text block mb-3">FAQs</span>
          <h2 className="heading-text mb-3">Got Questions? We've Got Answers.</h2>
          <p className="body-text text-sm">Everything you need to know about joining Unicorn Chess Academy.</p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden
                ${openIndex === i
                  ? "border-royal/25 bg-royal-50 shadow-card"
                  : "border-border-light bg-white hover:border-royal/15"
                }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-playfair text-base sm:text-lg font-semibold text-ink">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 flex-shrink-0 rounded-full bg-royal/10 border border-royal/20 flex items-center justify-center text-royal text-xl font-light transition-transform duration-300
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

        <p className="text-center text-ink-muted text-sm mt-10">
          Still have questions?{" "}
          <a href="/contact" className="text-royal font-semibold hover:underline underline-offset-2 transition-colors">
            Feel free to reach out →
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQs;