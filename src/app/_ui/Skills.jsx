"use client";

import React, { useRef } from "react";
import SkillContainer from "./SkillContainer";
import Subtitle from "./shared/Subtitle";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

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
    src: "react-native",
    label: "React Native",
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
    label: "Docker, Docker compose",
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
    label: "Cloud, S3"
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

const skillCategories = [
  { skills: frontSkills, type: "Frontend" },
  { skills: apiSkills, type: "API" },
  { skills: backSkills, type: "Backend" },
  { skills: databaseSkills, type: "database" },
  { skills: serviceSkills, type: "tools" },
  { skills: toolsSkills, type: "otherTools" },
];

export default function Skills() {
  const t = useTranslations("skills");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative container py-16 lg:py-24 overflow-hidden"
    >
      <Subtitle text={t("title")} />
      
      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.6,
                    },
                  },
                }}
              >
                <SkillContainer
                  skills={category.skills}
                  type={typeof category.type === "string" && category.type !== "Frontend" && category.type !== "API" && category.type !== "Backend" 
                    ? t(category.type) 
                    : category.type}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
