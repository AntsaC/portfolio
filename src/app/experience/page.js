"use client";
import ExperienceContainer from "../_ui/ExperienceContainer";
import Title from "../_ui/shared/Title";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Symfony developer",
    organisation: "Apex Voyage - Freelance",
    date: "January 2024 - July 2024",
    details: [
      "Developed and designed the front office part of a web application for language study programs",
      "Developed and designed the ERP part of a web application for language study programs",
      "Implemented new functionalities based on operational needs"
    ],
  },
  {
    title: "Fullstack developer",
    organisation: "PRIRTEM",
    date: "January 2023 - January 2024",
    details: [
      "Developped and designed a web application to manage fleets of PRIRTEM",
      "Developped a mobile application for client to communicate with the backend of the platform",
      "Designed, implemented, and conducted automated testing for the REST web service that powers the platform",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="lg:px-8  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-fit lg:-translate-y-3/4 mt-12 py-12"
    >
      <Title title="My experiences" />
      <div className="">
        {experiences.map((experience) => (
          <ExperienceContainer key={experience.title} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
