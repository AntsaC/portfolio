import React from "react";
import Image from "next/image";
import CrafContainer from "./CrafItems";

export default function Hero() {
  return (
    <div className="flex justify-around py-10">
      <div className="text-slate-200 relative">
        <p className="text-2xl">
          Hi there, I'm{" "}
          <span className="text-3xl">
            &lt;&gt;
            <span className="text-sub_title font-bold"> Antsa Fiderana </span>
            &lt;/&gt;
          </span>
        </p>
        <div className="text-6xl mt-6">
          <h1>Full Stack Developper</h1>
          <h1 className="mt-1">Passionate about crafting</h1>
        </div>
        <CrafContainer />
        <p class="text-gray-800 leading-6 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button class="bg-green-600 hover:bg-transparent hover:scale-105 border border-green-500 text-white py-2 px-4 transition-all duration-300 ease-in-out absolute bottom-6">
          View resume &rarr;
        </button>
      </div>
      <div>
        <Image
          src="/photo/profile.jpg"
          alt="Profile"
          width={450}
          height={500}
        />
      </div>
    </div>
  );
}
