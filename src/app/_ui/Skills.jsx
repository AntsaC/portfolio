import React from "react";
import SkillCard from "./SkillCard";

const skills = [
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
    label: "React",
  },
];

export default function Skills() {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Skills</h2>
      <div className="flex justify-around mt-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
