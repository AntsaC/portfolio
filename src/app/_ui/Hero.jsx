import React from "react";
import Image from "next/image";
import CrafContainer from "./CrafItems";
import Link from "next/link";

export default function Hero() {
  return (
      <div className="container lg:h-dvh">
        <div className="flex flex-col h-full lg:flex-row lg:items-center lg:justify-between px-2 gap-y-14 lg:gap-0">
          <div className="text-slate-200 text-center lg:text-start">
            <p className="text-2xl lg:text-4xl lg:inline">Hi there, I&apos;m </p>
            <p className="text-xl lg:text-4xl lg:inline">
              &lt;&gt;
              <span className="text-3xl text-emerald-400 font-bold">
            {" "}
                Antsa Fiderana{" "}
          </span>
              &lt;/&gt;
            </p>
            <div className="text-3xl lg:text-6xl lg:mt-10 font-semibold">
              <h1>Full Stack Developer</h1>
              <h1 className="mt-2">Passionate about</h1>
            </div>
            <CrafContainer/>
            <div className="flex flex-col md:flex-row text-center px-3">
              <a
                  href="https://cvdesignr.com/p/65b483997b98e"
                  className=" bg-emerald-600 hover:bg-transparent hover:scale-105 border border-emerald-600 text-white py-3 rounded-sm  px-4 transition-all duration-300 ease-in-out mt-6 lg:mt-28"
                  target="_blank"
              >
                View resume &rarr;
              </a>
              <Link
                  href="/project"
                  className=" bg-transparent hover:scale-105 border border-emerald-600 text-white py-3 px-4 transition-all duration-300 rounded-sm ease-in-out mt-6 lg:mt-28 lg:ml-8"
              >
                Explore projects
              </Link>
            </div>
          </div>
          <div
              className="border-1  border-emarald-600 ring-2 shadow-md ring-emerald-600 rounded transform rotate-3 h-fit w-fit">
            <Image
                className="transform -rotate-3 rounded-sm"
                src="/photo/profile.jpg"
                alt="Profile"
                width={460}
                height={460}
            />
          </div>
        </div>
      </div>
  );
}
