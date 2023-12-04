import React from "react";
import Image from "next/image";

export default function SkillCard({ src, label }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={"/photo/skills/" + src + "-icon.svg"}
        alt={src}
        width={100}
        height={100}
      />
      <h4 className="text-xl font-semibold mt-3">{label}</h4>
    </div>
  );
}
