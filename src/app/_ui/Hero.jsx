"use client";

import React from "react";
import Image from "next/image";
import CrafContainer from "./CrafItems";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");
  
  return (
      <section id="hero" className="container md:mt-12 lg:mt-0 lg:h-dvh relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="flex flex-col h-full md:flex-row md:items-center md:justify-between gap-y-14 lg:gap-0 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-text-primary text-center md:text-start space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-2xl lg:text-3xl"> {t("title")} 
                <span className="lg:text-3xl text-3xl font-bold text-gradient ml-2">
                    Antsa Fiderana
                </span>
              </h1>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-text-primary">{t("subtitle1")}</span>
              <br />
              <span className="text-gradient">{t("subtitle2")}</span>
            </motion.h2>
            
            <div
              className="mt-4 lg:mt-10 text-3xl lg:text-5xl  font-bold glow "
            >
              Web and mobile application
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col md:flex-row text-center pt-8"
            >
              <Link
                  href="#contact"
                  className="glow-button text-white py-4 px-8 rounded-xl font-semibold text-lg inline-block w-fit mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
              >
                {t("cta")}
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-emerald-gradient rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse"></div>
            <div className="relative bg-surface-light/50 backdrop-blur-sm border border-accent-primary/30 rounded-2xl p-2 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <Image
                  className="transform -rotate-3 rounded-xl w-[300px] h-[300px] lg:w-[460px] lg:h-[460px] object-cover"
                  src="/photo/profile.jpg"
                  alt="Profile"
                  width={460}
                  height={460}
                  priority
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
}
