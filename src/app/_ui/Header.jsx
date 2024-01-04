"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function Header() {
  const [togle, setTogle] = useState("hidden");
  const isSmallDevice = useMediaQuery({ query: "(max-width: 768px)" });

  const variants = {
    show: {
      opacity: 1,
      height: 100,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <nav className=" flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center  text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Ina_Leka_Zao
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() =>
            setTogle((prev) => (prev == "show" ? "hidden" : "show"))
          }
          className="flex items-center px-3 py-2  text-teal-200  hover:text-white "
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <motion.div
        initial="hidden"
        animate={isSmallDevice ? togle : { opacity: 1 }}
        className="w-full opacity-0 lg:opacity-100 lg:flex lg:items-center lg:w-auto"
        variants={variants}
      >
        <div className="text-sm lg:flex-grow">
          <NavLink text={"Home"} href="/" />
          <NavLink text={"Projects"} href="/project" />
          <NavLink text={"Experiences"} href="/" />
        </div>
      </motion.div>
    </nav>
  );
}

function NavLink({ text, href }) {
  return (
    <Link
      href={href}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 transition-all duration-200 ease-in-out hover:text-white mr-4 hover:border-b hover:border-teal-200"
    >
      {text}
    </Link>
  );
}
