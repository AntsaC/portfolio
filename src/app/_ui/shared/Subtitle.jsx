"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Subtitle({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
        {text}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="h-1 bg-accent-primary mx-auto rounded-full"
      />
    </motion.div>
  );
}
