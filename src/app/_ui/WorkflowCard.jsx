import React from "react";
import Image from "next/image";

export default function WorkflowCard({ icon, workflow, description }) {
  return (
    <div
      style={{ flex: "0 0 100%" }}
      className="embla__slide lg:max-w-sm rounded  shadow-lg bg-emerald-800 p-10"
    >
      <div className="px-0 lg:p-2">
        <h5 className="font-bold text-2xl lg:text-3xl mb-3 text-white">{workflow}</h5>
        <p className="text-gray-200 text-base text-base lg:text-xl">{description}</p>
      </div>
    </div>
  );
}
