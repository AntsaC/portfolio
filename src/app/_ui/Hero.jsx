import React from "react";
import Image from "next/image";
import CrafContainer from "./CrafItems";
import Link from "next/link";

export default function Hero() {
  return (
      <section id="hero" className="container md:mt-12 lg:mt-0 lg:h-dvh">
        <div className="flex flex-col h-full md:flex-row md:items-center md:justify-between gap-y-14 lg:gap-0">
          <div className="text-slate-200 text-center md:text-start">
            <p className="text-2xl lg:text-3xl lg:inline">Hi there, I&apos;m </p>
            <h1 className="lg:text-3xl lg:inline text-3xl text-emerald-400 font-bold">
                Antsa Fiderana
            </h1>
            <h2 className="text-3xl lg:text-6xl lg:mt-10 font-semibold" >A FullStack Developer <br /> passionate about</h2>
            <CrafContainer/>
            <div className="flex flex-col md:flex-row text-center">
              
              <Link
                  href="#contact"
                  className="bg-emerald-600 hover:scale-105 border border-emerald-600 text-white py-3 px-4 transition-all duration-300 rounded-sm ease-in-out mt-6 lg:mt-28"
              >
                Let&apos;s work together
              </Link>
            </div>
          </div>
          <div
              className="border-1  border-emarald-600 ring-2 shadow-md ring-emerald-600 rounded transform rotate-3 h-fit w-fit md:mx-0 mx-auto">
              <Image
                  className="transform -rotate-3 rounded-sm w-[300px] h-[300px] lg:w-[460px] lg:h-[460px]"
                  src="/photo/profile.jpg"
                  alt="Profile"
                  width={460}
                  height={460}
              />
          </div>
        </div>
      </section>
  );
}
