import React from "react";
import Image from "next/image";

export default function WorkflowCard({ icon, workflow, description }) {
  return (
    <div
      style={{ flex: "0 0 100%" }}
      className="embla__slide lg:max-w-sm rounded  shadow-lg bg-emerald-600 p-10 "
    >
      <div className="px-0 lg:px-6 py-5">
        <h5 className="font-bold text-xl mb-2 text-white">{workflow}</h5>
        <p className="text-gray-200 text-base">{description}</p>
      </div>
    </div>
  );
}
