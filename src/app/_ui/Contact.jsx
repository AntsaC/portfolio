"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="container py-20">
      <h2 className="text-3xl font-bold text-slate-200 text-center mb-10">Get In Touch</h2>
      <div className="flex flex-col items-center gap-6 text-slate-300">
        <p className="text-center max-w-2xl">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I&apos;ll try my best to get back to you!
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-slate-800 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-slate-800 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2">What&apos;s on your mind?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full p-2 rounded bg-slate-800 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:scale-105 border border-emerald-600 text-white py-3 px-8 transition-all duration-300 rounded-sm ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

