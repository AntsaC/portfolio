import React from "react";
import Image from "next/image";
import Subtitle from "./shared/Subtitle";

const topics = [
  "DDD",
  "TDD",
  "BDD",
  "Unit test",
  "Integration test",
  "End2end test",
  "Doctrine",
  "Twig",
  "Hibernate",
  "Clean code",
  "Hexagonal arch",
  "CQRS",
  "Scrum",
  "CI/CD",
  "Microservice",
  "SOLID",
  "DRY",
  "Redux",
  "Firebase",
  "Refactoring",
  "Responsive",
  "Git",
  "Github Action",
  "Jira",
  "Jenkins",
  "Docker compose",
  "Docker",
  "UML",
  "Typescript",
  "Design",
];

export default function TopicSection() {
  return (
    <div className="flex justify-around mt-4">
      <div>
        <Image
          src={"/photo/profile2.jpg"}
          alt="Profile 2"
          width={350}
          height={350}
        />
      </div>
      <div>
        <Subtitle text={"Topics that I know"} />
        <div className="grid grid-cols-6 gap-4 mt-4">
          {topics.map((topic, index) => (
            <TopicItem key={index} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TopicItem({ topic }) {
  return (
    <div className="border border-emerald-400 rounded-3xl p-2 text-center text-white">
      {topic}
    </div>
  );
}
