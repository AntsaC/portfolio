"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Why me?",
    href: "#why-me",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Contact",
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
    <header className={`flex items-center justify-between flex-wrap px-4 lg:px-12 py-4 fixed top-0 w-full bg-background z-50 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center  text-white mr-6">
        <Link href="#hero" className="font-semibold text-xl md:text-2xl tracking-tight" onClick={() => setShow(false)}>
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

export function NavLinkContainer({ onClick }) {
  return (
    <div className="text-xl lg:text-sm flex flex-col lg:flex-row  items-center mt-28 lg:mt-0 text-center uppercase ">
      {links.map((link) => (
        <NavLink key={link.text} {...link} onClick={onClick} />
      ))}
    </div>
  );
}

export function NavLink({ text, href, onClick }) {
  const path = usePathname();
  const classContainer = clsx(
    "block mt-4 lg:inline-block lg:mt-0 text-teal-200 transition-all duration-200 ease-in-out hover:text-white mr-4 hover:border-b hover:border-teal-200",
    { "border-b border-teal-200 text-white": href == path }
  );
  return (
    <Link href={href} className={classContainer} onClick={onClick}>
      {text}
    </Link>
  );
}
