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
    label: "Next",
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
    src: "symfony",
    label: "Symfony, Laravel",
  },
  {
    src: "nodejs",
    label: "Node, Express, NestJS",
  },
  {
    src: "spring-boot",
    label: "Spring boot, Quarkus",
  },
];

const databaseSkills = [
  {
    src: "postgresql",
    label: "Postgres, MySQL",
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
    label: "Docker, Kubernetes",
  },
  {
    src: "git",
    label: "Git, Github, Gitlab",
  },
  {
    src: "openai",
    label: "OpenAI, Langchain",
  },
];

const toolsSkills = [
  {
    src: "aws",
    label: "Cloud, ECS, EC2, S3"
  },
  {
    src: "jira",
    label: "Jira",
    extension: "png"
  },
  {
    src: "postman",
    label: "Postman, Swagger",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container mt-5 lg:mt-0">
      <Subtitle text={"Technologies"} />
      <div className="mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 px-4">
          <SkillContainer skills={frontSkills} type={"Frontend"}/>
          <SkillContainer skills={apiSkills} type={"API"}/>
          <SkillContainer skills={backSkills} type={"Backend"}/>
          <SkillContainer skills={databaseSkills} type={"Database"}/>
          <SkillContainer skills={serviceSkills} type={"Tools"}/>
          <SkillContainer skills={toolsSkills} type={"Other tools"}/>
        </div>
      </div>
    </section>
  );
}
