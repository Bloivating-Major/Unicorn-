import React, { useState } from "react";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.terms) newErrors.terms = "You must accept the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="bg-background-dark text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-[#2a2a2a] rounded-md text-white"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-[#2a2a2a] rounded-md text-white"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 py-2 bg-[#2a2a2a] rounded-md text-white"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouchForm;
