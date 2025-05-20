import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What age groups do you teach?",
    answer:
      "We welcome chess enthusiasts of all ages – from young kids to adults. Our programs are tailored for various age groups and skill levels.",
  },
  {
    question: "Do I need prior chess experience?",
    answer:
      "Not at all! We have beginner-friendly lessons for complete newcomers as well as advanced sessions for experienced players.",
  },
  {
    question: "How do online classes work?",
    answer:
      "Our online classes are conducted via video conferencing and interactive boards, providing a real-time learning experience with our coaches.",
  },
  {
    question: "Can I get a free trial class?",
    answer:
      "Yes! We offer a free trial session for new students to explore our teaching style and curriculum.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background-dark text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-background-dull rounded-md p-4 bg-[#1f1f1f]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-neutral-lighter">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
