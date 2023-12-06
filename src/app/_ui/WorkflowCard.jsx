import React from "react";

export default function WorkflowCard({ workflow, description }) {
  return (
    <div className="flex-1 max-w-sm rounded overflow-hidden shadow-lg bg-emerald-600 ">
      <div class="px-6 py-5">
        <h5 class="font-bold text-xl mb-2 text-white">{workflow}</h5>
        <p class="text-gray-200 text-base">{description}</p>
      </div>
    </div>
  );
}
