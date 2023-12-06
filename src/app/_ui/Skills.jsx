import React from "react";
import SkillContainer from "./SkillContainer";
import Subtitle from "./shared/Subtitle";

const frontSkills = [
  {
    src: "reactjs",
    label: "React",
  },
  {
    src: "reactjs",
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
    style: { fill: "red" },
  },
];

const backSkills = [
  {
    src: "springio",
    label: "Spring boot 3",
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
    src: "kubernetes",
    label: "Kubernetes",
  },
  {
    src: "rabbitmq",
    label: "Rabit MQ",
  },
];

export default function Skills() {
  return (
    <div className="mt-3">
      <Subtitle text={"Technologies"} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-8 justify-items-center gap-8">
        <SkillContainer skills={frontSkills} type={"Frontend"} />
        <SkillContainer skills={apiSkills} type={"API"} />
        <SkillContainer skills={backSkills} type={"Backend"} />
        <SkillContainer skills={databaseSkills} type={"Database"} />
        <SkillContainer skills={serviceSkills} type={"Service"} />
      </div>
    </div>
  );
}
