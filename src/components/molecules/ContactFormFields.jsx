import { useState } from "react";

const ContactFormFields = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", reason: "", message: "", terms: false,
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "terms" && checked) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      setError("Please agree to the terms before submitting.");
      return;
    }
    setError("");
    setSubmitted(true);
    setFormData({ name: "", email: "", reason: "", message: "", terms: false });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-ivory-dim uppercase tracking-widest mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="premium-input"
          placeholder="Your full name"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-ivory-dim uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="premium-input"
          placeholder="you@example.com"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>

      {/* Reason */}
      <div>
        <label className="block text-xs font-semibold text-ivory-dim uppercase tracking-widest mb-2">
          Reason for Contact
        </label>
        <select
          name="reason"
          className="premium-input appearance-none cursor-pointer"
          onChange={handleChange}
          value={formData.reason}
          required
        >
          <option value="">Select a reason</option>
          <option value="General Query">General Query</option>
          <option value="Support">Support</option>
          <option value="Join Academy">Join Academy</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-ivory-dim uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="premium-input resize-none"
          placeholder="Tell us how we can help…"
          onChange={handleChange}
          value={formData.message}
          required
        />
      </div>

      {/* Terms */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="mt-1 w-4 h-4 accent-gold cursor-pointer"
          onChange={handleChange}
          checked={formData.terms}
        />
        <label htmlFor="terms" className="text-sm text-ivory-dim cursor-pointer leading-6">
          I agree to the{" "}
          <span className="text-gold underline underline-offset-2 cursor-pointer">
            Terms & Conditions
          </span>
        </label>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {submitted && (
        <p className="text-green-400 text-sm font-medium">
          ✓ Message sent! We'll get back to you shortly.
        </p>
      )}

      <button type="submit" className="btn-gold w-full sm:w-auto px-8 py-3 text-sm">
        Send Message →
      </button>
    </form>
  );
};

export default ContactFormFields;