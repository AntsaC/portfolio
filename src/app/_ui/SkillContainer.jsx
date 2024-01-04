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

  return (
    <motion.div
      className="relative border-2 rounded  border-green-500 w-4/5 lg:w-56 h-96"
      variants={variants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <h5
        className="text-xl absolute left-1/2 transform -translate-x-1/2 text-emerald-600 bg-background px-1 font-semibold"
        style={{ top: -18 }}
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
