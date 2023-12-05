import React from "react";
import Subtitle from "./shared/Subtitle";
import WorkflowCard from "./WorkflowCard";

const workflows = [
  {
    workflow: "Agile/Scrum methodology",
    description:
      "An iterative and flexible approach to software development, based on sprint",
  },
  {
    workflow: "CI/CD pipeline",
    description:
      "A set of automated processes designed to ensure efficient and consistent software development, testing and deployment, in order to have a rapid time to market ",
  },
  {
    workflow: "Git feature branching",
    description:
      "A practice where developers create a separate branch in a Git repository to work on a specific feature or task",
  },
];

export default function Workflow() {
  return (
    <div className="mt-8">
      <Subtitle text={"Workflow"} />
      <div className="flex justify-around p-8">
        {workflows.map((workflow, index) => (
          <WorkflowCard key={index} {...workflow} />
        ))}
      </div>
    </div>
  );
}
