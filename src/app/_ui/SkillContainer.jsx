"use client";

import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";

export default function SkillContainer({ type, skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const borderVariants = {
    hidden: { 
      pathLength: 0, 
      opacity: 0,
      stroke: "rgba(16, 185, 129, 0.3)"
    },
    show: {
      pathLength: 1,
      opacity: 1,
      stroke: "rgba(16, 185, 129, 0.8)",
      transition: {
        pathLength: { 
          type: "spring", 
          duration: 2.5, 
          bounce: 0.3,
          ease: "easeInOut"
        },
        stroke: { duration: 0.5, delay: 1.5 }
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="modern-card relative w-full h-[400px] p-6 group overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <motion.svg
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        <motion.rect
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          x="1"
          y="1"
          rx="12"
          strokeWidth={2}
          fill="none"
          variants={borderVariants}
        />
      </motion.svg>
      
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-center items-center flex-1 gap-2">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
