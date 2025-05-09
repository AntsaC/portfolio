import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLinkContainer } from "./Header";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const variants = {
    open: { right: 0 },
    closed: { right: "-100%" },
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center px-3 py-2  text-teal-200  hover:text-white "
      >
        <svg
          className="fill-current h-5 w-5 z-20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3 }}
        className="w-full h-dvh fixed top-0 right-[-100%] bg-teal-950 z-10"
      >
        <NavLinkContainer onClick={() => setOpen(false)} />
      </motion.div>
    </div>
  );
}
