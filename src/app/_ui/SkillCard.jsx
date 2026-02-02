"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillCard({ src, label, style, extension = "svg", index = 0 }) {
  const variants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 20
    },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.1
      }
    },
  };

  return (
    <motion.div
      variants={variants}
      className="flex flex-col items-center justify-center p-3 rounded-lg group hover:bg-surface-light/30 transition-colors duration-300"
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
    >
      <motion.div
        className="relative"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-16 h-16 flex items-center justify-center bg-surface/50 rounded-full border border-accent-primary/20 group-hover:border-accent-primary/40 transition-colors duration-300">
          <Image
            src={"/photo/skills/" + src + "-icon." + extension}
            alt={src}
            width={40}
            height={40}
            style={style}
            className="object-contain"
          />
        </div>
      </motion.div>

      <div className="mt-2 text-center">
        <h4 className="text-xs md:text-sm text-text-primary font-semibold group-hover:text-gradient transition-colors duration-300">
          {label}
        </h4>
      </div>
    </motion.div>
  );
}
