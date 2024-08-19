"use client";

import React from "react";
import Subtitle from "./shared/Subtitle";
import WorkflowCard from "./WorkflowCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../_ui/workflow.css";

const workflows = [
  {
    icon: "scrum",
    workflow: "Agile/Scrum ",
    description:
      "An iterative, incremantive and flexible approach to software development, based on agile events and sprints",
  },
  {
    icon: "devops",
    workflow: "CI/CD pipeline",
    description:
      "A set of automated processes designed to ensure efficient and consistent software development, testing and deployment, in order to have a rapid time to market ",
  },
  {
    workflow: "Feature branching",
    description:
      "In git, it involves creating a new branch for each feature to keep the main branch stable and facilitates collaboration",
  },
];

export default function Workflow() {
  const [emblaRef] = useEmblaCarousel(
    {
      active: true,
      breakpoints: {
        "(min-width: 768px)": { active: false },
      },
      loop: false,
    },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="container max-w-screen-xl mt-12 lg:mt-28">
      <Subtitle text={"Workflow"} />
      <div className="embla ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla_container flex lg:justify-around">
            {workflows.map((workflow, index) => (
              <WorkflowCard key={index} {...workflow} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
