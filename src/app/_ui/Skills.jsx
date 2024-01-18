import React from "react";
import SkillContainer from "./SkillContainer";
import Subtitle from "./shared/Subtitle";

const frontSkills = [
  {
    src: "reactjs",
    label: "React",
  },
  {
    src: "next",
    label: "Next 13",
  },
  {
    src: "flutter",
    label: "Flutter",
    extension: "png",
  },
];

const apiSkills = [
  {
    src: "rest",
    label: "REST",
  },
  {
    src: "graphql",
    label: "GraphQL",
  },
  {
    src: "websocket",
    label: "Websocket",
    style: {
      background: "white",
    },
  },
];

const backSkills = [
  {
    src: "laravel",
    label: "Laravel",
  },
  {
    src: "symfony",
    label: "Symfony 6",
  },
  {
    src: "nodejs",
    label: "Node",
  },
];

const databaseSkills = [
  {
    src: "postgresql",
    label: "Postgres",
  },
  {
    src: "mongodb",
    label: "MongoDB",
  },
  {
    src: "redis",
    label: "Redis",
  },
];

const serviceSkills = [
  {
    src: "docker",
    label: "Docker",
  },
  {
    src: "git",
    label: "Git",
  },
  {
    src: "github",
    label: "Github",
  },
];

export default function Skills() {
  return (
    <div className="mt-5">
      <Subtitle text={"Technologies"} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-8 justify-items-center gap-10 px-4">
        <SkillContainer skills={frontSkills} type={"Frontend"} />
        <SkillContainer skills={apiSkills} type={"API"} />
        <SkillContainer skills={backSkills} type={"Backend"} />
        <SkillContainer skills={databaseSkills} type={"Database"} />
        <SkillContainer skills={serviceSkills} type={"Tools"} />
      </div>
    </div>
  );
}
