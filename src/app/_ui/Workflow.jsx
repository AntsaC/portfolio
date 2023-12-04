import React from "react";
import Subtitle from "./shared/Subtitle";
import WorkflowCard from "./WorkflowCard";

const workflows = [
  {
    workflow: "Agile/Scrum methodology",
    description: "Lorem",
  },
  {
    workflow: "CI/CD pipeline",
    description: "Lorem",
  },
  {
    workflow: "Git feature branching",
    description: "Lorem",
  },
];

export default function Workflow() {
  return (
    <div className="mt-6">
      <Subtitle text={"Workflow"} />
      <div className="flex justify-around p-8">
        {workflows.map((workflow, index) => (
          <WorkflowCard key={index} {...workflow} />
        ))}
      </div>
    </div>
  );
}
