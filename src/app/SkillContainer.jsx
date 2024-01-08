"use client";

import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";

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
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      },
    },
  };

  return (
    <div>
      <motion.svg viewBox="0 0 ">
        <motion.rect
          width="100%"
          height="140"
          rx="20"
          stroke="#0099ff"
          variants={draw}
          initial="hidden"
          animate="visible"
          custom={3}
        />
      </motion.svg>
    </div>
  );
}
