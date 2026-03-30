import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { error } = await supabase.from("contact_messages").insert([
      {
        name,
        email,
        phone,
        company,
        message,
        subscribe,
      },
    ]);

    if (error) {
      setError("Error submitting form: " + error.message);
    } else {
      setSuccess("Thank you! Our production team will get back to you shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
      setSubscribe(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-2xl rounded-sm p-8 mt-10 border-t-4 border-secondary text-left">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary font-headline uppercase tracking-tight">
        Inquiry Form
      </h2>
      <p className="text-on-surface-variant text-center mb-6 font-body">
        Partner with Kota Items for industrial-grade manufacturing. We’ll get back to you as soon as we can.
      </p>

      {error && <p className="text-red-500 text-center mb-2 font-body">{error}</p>}
      {success && <p className="text-green-500 text-center mb-2 font-body">{success}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-widest font-space">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            className="w-full py-3 px-4 bg-surface-container-low border border-outline-variant focus:outline-none focus:border-secondary font-body"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-widest font-space">
            Corporate Email
          </label>
          <input
            type="email"
            value={email}
            placeholder="john@company.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 px-4 bg-surface-container-low border border-outline-variant focus:outline-none focus:border-secondary font-body"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-widest font-space">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+263 ..."
            className="w-full py-3 px-4 bg-surface-container-low border border-outline-variant focus:outline-none focus:border-secondary font-body"
            required
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-widest font-space">
            Company Name
          </label>
          <input
            type="text"
            value={company}
            placeholder="Enter Company"
            onChange={(e) => setCompany(e.target.value)}
            className="w-full py-3 px-4 bg-surface-container-low border border-outline-variant focus:outline-none focus:border-secondary font-body"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-widest font-space">
            Inquiry Details
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your manufacturing requirements..."
            rows="4"
            className="w-full py-3 px-4 bg-surface-container-low border border-outline-variant focus:outline-none focus:border-secondary font-body"
            required
          ></textarea>
        </div>

        {/* Subscribe */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-secondary"
          />
          <label htmlFor="subscribe" className="ml-2 text-on-surface-variant text-sm font-body">
            Receive monthly production updates and industrial reports.
          </label>
        </div>

        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest font-space"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
