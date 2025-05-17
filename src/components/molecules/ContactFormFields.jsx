import { useState } from "react";

const ContactFormFields = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

    if (name === "terms" && checked) {
      setError(""); // clear error if terms checked
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setError("You must agree to the terms before submitting.");
      return;
    }

    setError("");
    setFormData({
      name: "",
      email: "",
      message: "",
      terms: false,
    });
    console.log("Form Submitted", formData);
    // Submit logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 rounded-md bg-background-dull text-white placeholder-gray-400"
          placeholder="Your name"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-3 rounded-md bg-background-dull text-white placeholder-gray-400"
          placeholder="you@example.com"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          className="w-full p-3 rounded-md bg-background-dull text-white placeholder-gray-400"
          placeholder="Type your message..."
          onChange={handleChange}
          value={formData.message}
          required
        ></textarea>
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          name="terms"
          className="mt-1"
          onChange={handleChange}
          checked={formData.terms}
        />
        <label className="text-sm">
          I agree to the <span className="underline">Terms</span>
        </label>
      </div>

      {error && <p className="text-red-500 text-sm -mt-4">{error}</p>}

      <button
        type="submit"
        className="bg-blue-lighter text-black px-6 py-2 rounded-md font-medium shadow-md hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactFormFields;
