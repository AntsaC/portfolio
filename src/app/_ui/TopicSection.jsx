import React from "react";
import Image from "next/image";
import Subtitle from "./shared/Subtitle";

const topics = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "DDD",
  "TDD",
  "BDD",
  "Unit test",
  "Integration test",
  "Doctrine",
  "Twig",
  "Clean code",
  "Scrum",
  "CI/CD",
  "Microservice",
  "SOLID",
  "DRY",
  "Redux",
  "RTK",
  "Firebase",
  "Refactoring",
  "Responsive",
  "Git",
  "Github Action",
  "Jira",
  "Docker compose",
  "Docker",
  "UML",
  "Design pattern",
  "SEO",
];

export default function TopicSection() {
  return (
    <div className="flex justify-around mt-12">
      <div className="hidden lg:block">
        <Image
          src={"/photo/profile2.jpg"}
          alt="Profile 2"
          width={450}
          height={450}
        />
      </div>
      <div>
        <div className="flex h-full justify-center items-center flex-col">
          <Subtitle text={"Topics that I know"} />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 px-4 md:px-0">
            {topics.map((topic, index) => (
              <TopicItem key={index} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopicItem({ topic }) {
  return (
    <div className="border border-emerald-400 rounded-3xl text-base md:text-xl p-2 text-center text-white">
      {topic}
    </div>
  );
}
