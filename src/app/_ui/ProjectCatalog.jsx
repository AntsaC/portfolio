"use client";

import React from "react";
import { motion } from "framer-motion";
import Subtitle from "./shared/Subtitle";
import Image from "next/image";
import Link from "next/link";
import projects from "@/lib/data/project";
export default function ProjectCatalog() {
  return (
    <div className="mt-5 lg:mt-0">
      <Subtitle text={"Projects"} />
      <p className="text-slate-100 text-base mt-4 h-12 text-center">
        Here are some of the projects I've worked on.
      </p>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 px-4 gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.key} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
    return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col relative h-96 lg:h-[500px]"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-950 opacity-70  border-emerald-300 z-10"></div>
          <div className=" absolute top-0 w-full h-full overflow-hidden ">
            <Image
              alt="Project thumbnail"
              src={"/photo/projects/" + project.key + "/" + project.thumbnail}
              fill
              objectPosition="top left"
              objectFit="cover"
              className="hover:scale-125 transition-all duration-1000"
            />
          </div>
          <div className="p-4 z-10 absolute bottom-4 left-2 ">
            <h4 className=" font-bold text-2xl mt-1 text-emerald-400 hover:text-emerald-200 transition-all duration-100">
              {
                project.website ? (
                  <Link href={project.website} target="_blank">{project.name} &rarr;</Link>
                ) : (
                  project.name
                )
              }
            </h4>
            <p className="text-slate-100 text-base mt-1 h-12">
              {project.description}
            </p>
            <div className="flex  mt-3">
              <div className="flex justify-around gap-2">
                {project.tags.map((t) => (
                  <div key={t} className=" text-xs font-semibold text-emerald-400">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      );
};
