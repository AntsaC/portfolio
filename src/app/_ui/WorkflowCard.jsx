import React from "react";

export default function WorkflowCard({ workflow, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{workflow}</div>
        <p class="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
