import React, { useState } from "react";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", message: "", terms: false,
  });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = "Name is required.";
    if (!formData.email.trim())   e.email   = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email.";
    if (!formData.message.trim()) e.message = "Message is required.";
    if (!formData.terms)          e.terms   = "You must accept the terms.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "", terms: false });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const Field = ({ label, error, children }) => (
    <div>
      <label className="block text-xs font-semibold text-ink-muted uppercase tracking-widest mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );

  return (
    <section className="bg-white section-wrapper">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="eyebrow-text block mb-3">Get in Touch</span>
          <h2 className="heading-text mb-3">
            Start a{" "}
            <em className="italic text-royal">conversation</em>
          </h2>
          <p className="body-text text-sm">
            Whether you want to join our team or ask a question, we'd love to hear from you.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white border border-border-light rounded-2xl shadow-card p-8 space-y-6">

          <Field label="Full Name" error={errors.name}>
            <input
              type="text"
              name="name"
              className="premium-input"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </Field>

          <Field label="Email Address" error={errors.email}>
            <input
              type="email"
              name="email"
              className="premium-input"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </Field>

          <Field label="Message" error={errors.message}>
            <textarea
              name="message"
              rows="5"
              className="premium-input resize-none"
              placeholder="Tell us about yourself or your inquiry…"
              value={formData.message}
              onChange={handleChange}
            />
          </Field>

          {/* Terms */}
          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="terms"
                id="terms-git"
                className="mt-1 w-4 h-4 accent-royal cursor-pointer"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms-git" className="text-sm text-ink-light cursor-pointer leading-6">
                I agree to the{" "}
                <span className="text-royal underline underline-offset-2">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1.5 ml-7">{errors.terms}</p>
            )}
          </div>

          {submitted && (
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <p className="text-green-700 text-sm font-medium">
                ✓ Message sent! We'll get back to you within 24 hours.
              </p>
            </div>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn-gold w-full justify-center py-3.5 text-sm"
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchForm;