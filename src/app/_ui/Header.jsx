"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Projects",
    href: "/project",
  },
  // {
  //   text: "Experiences",
  //   href: "/experience",
  // },
];

export default function Header() {
  return (
    <header className=" flex items-center justify-between flex-wrap px-4 lg:px-12 py-4 fixed top-0 w-full bg-background z-50">
      <div className="flex items-center  text-white mr-6">
        <Link href="/" className="font-semibold text-xl md:text-2xl tracking-tight">
          Ina_Leka_Zao
        </Link>
      </div>
      <MobileMenu />
      <div className="hidden lg:block">
        <NavLinkContainer />
      </div>
    </header>
  );
}

export function NavLinkContainer() {
  return (
    <div className="text-xl lg:text-sm flex flex-col lg:flex-row  items-center mt-28 lg:mt-0 text-center uppercase ">
      {links.map((link) => (
        <NavLink key={link.text} {...link} />
      ))}
    </div>
  );
}

export function NavLink({ text, href }) {
  const path = usePathname();
  const classContainer = clsx(
    "block mt-4 lg:inline-block lg:mt-0 text-teal-200 transition-all duration-200 ease-in-out hover:text-white mr-4 hover:border-b hover:border-teal-200",
    { "border-b border-teal-200 text-white": href == path }
  );
  return (
    <Link href={href} className={classContainer}>
      {text}
    </Link>
  );
}
