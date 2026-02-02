"use client";

import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { motion } from "framer-motion";

const links = [
  {
    text: "projects",
    href: "#projects",
  },
  {
    text: "whyMe",
    href: "#why-me",
  },
  {
    text: "skills",
    href: "#skills",
  },
  {
    text: "contact",
    href: "#contact",
  }
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`glass-effect flex items-center justify-between flex-wrap px-4 lg:px-12 py-4 fixed top-0 w-full z-50 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center text-white mr-6"
      >
        <Link 
          href="#hero" 
          className="font-bold text-xl md:text-2xl tracking-tight text-gradient hover:scale-105 transition-transform duration-200" 
          onClick={() => setShow(false)}
        >
          Ina_Leka_Zao
        </Link>
      </motion.div>
      <MobileMenu />
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:block"
      >
        <NavLinkContainer />
      </motion.div>
    </header>
  );
}

export function NavLinkContainer({ onClick }) {
  return (
    <div className="text-xl lg:text-sm flex flex-col lg:flex-row items-center mt-28 lg:mt-0 text-center space-y-4 lg:space-y-0 lg:space-x-1">
      {links.map((link, index) => (
        <motion.div
          key={link.text}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <NavLink {...link} onClick={onClick} />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: links.length * 0.1, duration: 0.3 }}
      >
        <LocaleSwitcher />
      </motion.div>
    </div>
  );
}

export function NavLink({ text, href, onClick }) {
  const path = usePathname();
  const t = useTranslations("header");

  const isActive = href === path;

  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        href={href} 
        className={clsx(
          "block px-4 py-2 rounded-lg text-text-secondary font-medium transition-all duration-200 ease-in-out hover:text-text-primary relative group",
          { "text-text-primary": isActive }
        )}
        onClick={onClick}
      >
        {t(text)}
        <motion.div
          className="absolute inset-0 bg-accent-primary/10 rounded-lg -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-1/2 w-1 h-1 bg-accent-primary rounded-full"
            layoutId="activeIndicator"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ x: "-50%" }}
          />
        )}
      </Link>
    </motion.div>
  );
}
