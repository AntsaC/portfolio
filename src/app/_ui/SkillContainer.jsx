"use client";

import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";
import "./SkillContainer.css";

export default function SkillContainer({ type, skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2, bounce: 0 },
      },
    },
  };

  return (
    <motion.div
      className="relative w-full card h-96 py-1 lg:py-5"
      variants={variants}
      initial="hidden"
      animate={isInView && "show"}
      whileHover={{
        y: -5,
      }}
    >
      <motion.svg
        width="100%"
        height="100%"
        className="absolute top-0 text-emerald-600"
      >
        <motion.rect
          width="100%"
          height="100%"
          rx="2"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          variants={draw}
          custom={3}
        />
      </motion.svg>
      <h5
        className="text-xl md:text-2xl absolute left-1/2 transform -translate-x-1/2 text-emerald-600 bg-background px-1 font-semibold"
        style={{ top: -20, backgroundColor: "rgba(6,28,34,0.62)" }}
      >
        {type}
      </h5>
      <div className="flex flex-col justify-around h-full  ">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      <span ref={ref}></span>
    </motion.div>
  );
}
