"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillCard({ src, label, style, extension = "svg" }) {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={variants}
      className="flex flex-col items-center justify-center"
    >
      <Image
        src={"/photo/skills/" + src + "-icon." + extension}
        alt={src}
        width={50}
        height={50}
        style={style}
      />
      <h4 className="text-base md:text-xl text-slate-50 font-semibold mt-2">{label}</h4>
    </motion.div>
  );
}
