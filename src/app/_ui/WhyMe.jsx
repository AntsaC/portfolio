"use client";

import React from "react";
import { motion } from "framer-motion";
import Subtitle from "./shared/Subtitle";
import { Code2, Users, CheckCircle2, BookText, Book, Rocket, Heart, Ear } from "lucide-react";

export default function WhyMe() {
  return (
    <section id="why-me" className="container mt-5 lg:mt-0">
      <Subtitle text="Why Work With Me?" />
      <div className="mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReasonCard
            title="Clean Code Advocate" 
            description="I enjoy writing clean, well-tested code following proven design patterns to create maintainable solutions that are easy to understand and scale."
            icon={<Code2 className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title="Quick Learner/Adaptor"
            description="I grasp new technologies easily by focusing on core principles and patterns. I adapt quickly to deliver value with new tools and frameworks."
            icon={<Book className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title="Business-Oriented Developer"
            description="I excel at understanding business needs and delivering tailored solutions that align with business objectives. I leverage Domain-Driven Design principles to create impactful software."
            icon={<Ear className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title="Team Player"
            description="I excel in collaborative environments using Agile, Scrum methodologies and git. I believe great software is built by great teams working together."
            icon={<Users className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard
            title="Productivity Focused"
            description="I leverage AI tools and modern development environments (Cursor, ChatGPT, etc.) to boost productivity while maintaining quality."
            icon={<Rocket className="w-8 h-8 text-emerald-400" />}
          />
          <ReasonCard 
            title="Passionate Developer"
            description="Last but not least, I'm a passionate developer :) "
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
