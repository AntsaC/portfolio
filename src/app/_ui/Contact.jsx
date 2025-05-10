"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
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
      <h2 className="text-3xl font-bold text-slate-200 text-center mb-10">{t("title")}</h2>
      <div className="flex flex-col items-center gap-6 text-slate-300">
        <p className="text-center max-w-2xl">
          {t("description")}
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">{t("name")}</label>
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
            <label htmlFor="email" className="block mb-2">{t("email")}</label>
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
            <label htmlFor="message" className="block mb-2">{t("message")}</label>
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
            {t("send")}
          </button>
        </form>
      </div>
    </section>
  );
}

