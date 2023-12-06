import React from "react";
import Image from "next/image";
import CrafContainer from "./CrafItems";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row content-around justify-around py-2 lg:py-10 px-2 lg:px-8 gap-12">
      <div className="text-slate-200">
        <p className="text-2xl md:inline">Hi there, I&apos;m </p>
        <p className="text-2xl md:inline">
          &lt;&gt;
          <span className="text-3xl text-emerald-400 font-bold">
            {" "}
            Antsa Fiderana{" "}
          </span>
          &lt;/&gt;
        </p>
        <div className="text-3xl lg:text-6xl mt-6 font-semibold">
          <h1>Full Stack Developper</h1>
          <h1 className="mt-2">Passionate about crafting</h1>
        </div>
        <CrafContainer />

        <button className=" bg-green-600 hover:bg-transparent hover:scale-105 border border-green-500 text-white py-2 px-4 transition-all duration-300 ease-in-out mt-6 lg:mt-28">
          View resume &rarr;
        </button>
      </div>
      <div className="border-1  border-green-500 ring-2 shadow-md ring-green-500 rounded transform rotate-3 h-fit">
        <Image
          className="transform -rotate-3 rounded-sm"
          src="/photo/profile.jpg"
          alt="Profile"
          width={450}
          height={500}
        />
      </div>
    </div>
  );
}
