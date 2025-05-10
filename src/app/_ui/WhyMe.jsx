"use client";

import React from "react";
import { motion } from "framer-motion";
import Subtitle from "./shared/Subtitle";
import { Code2, Users, CheckCircle2, BookText, Book, Rocket, Heart, Ear } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyMe() {
  const t = useTranslations("whyMe");
  return (
    <section id="why-me" className="container mt-5 lg:mt-0">
      <Subtitle text={t("title")} />
      <div className="mt-8 text-center px-4">
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>
      <div className="mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReasonCard
            title={t("reason1.title")} 
            description={t("reason1.description")}
            icon={<Code2 className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title={t("reason2.title")}
            description={t("reason2.description")}
            icon={<Book className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title={t("reason3.title")}
            description={t("reason3.description")}
            icon={<Ear className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title={t("reason4.title")}
            description={t("reason4.description")}
            icon={<Users className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title={t("reason5.title")}
            description={t("reason5.description")}
            icon={<Rocket className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard 
            title={t("reason6.title")}
            description={t("reason6.description")}
            icon={<Heart className="w-8 h-8 text-emerald-400" />}
          />
        </div>
      </div>
    </section>
  );
}

const ReasonCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-950/50 p-10 rounded-lg border border-emerald-900"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-emerald-400 text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
};
