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
    src: "reactjs",
    label: "REST",
  },
  {
    src: "graphql",
    label: "GraphQL",
  },
  {
    src: "reactjs",
    label: "Websocket",
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
    src: "reactjs",
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
    src: "reactjs",
    label: "Redis",
  },
];

const serviceSkills = [
  {
    src: "springio",
    label: "Kafka",
  },
  {
    src: "symfony",
    label: "Rabbit MQ",
  },
  {
    src: "reactjs",
    label: "Firebase",
  },
];

export default function Skills() {
  return (
    <div>
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
