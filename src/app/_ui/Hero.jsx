import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-around py-10">
      <div>
        <p>Hi there ! I'm Antsa Fiderana</p>
        <div className="text-5xl mt-2">
          <h1>Full stack developper, who</h1>
          <h1>Loves building it solutions</h1>
        </div>
        <p class="text-gray-800 leading-6 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Reach me
        </button>
      </div>
      <div>
        <Image
          src="/photo/profile.jpg"
          alt="Profile"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
}
