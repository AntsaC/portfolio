"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CraftItems.css";
import { useTranslations } from "next-intl";
export default function CrafContainer() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("hero");
  return (
    <motion.div
      className="mt-4 lg:mt-7 text-3xl lg:text-5xl  font-bold glow "
      key={index}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2.5 }}
      onAnimationComplete={() =>
        setIndex((prevIndex) => (prevIndex + 1) % t('craft').length)
      }
    >
      {t(`craft.${index % 5}`)}
    </motion.div>
  );
}
