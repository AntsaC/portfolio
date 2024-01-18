"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col relative h-96 lg:h-[500px]"
    >
      <div className=" absolute top-0 w-full h-full bg-emerald-300 opacity-40 overflow-hidden">
        <Image
          alt="Project thumbnail"
          src={"/photo/projects/" + project.key + "/" + project.thumbnail}
          fill
          objectPosition="top left"
          objectFit="cover"
          className="hover:scale-125 transition-all duration-1000"
        />
      </div>
      <div className="p-2 z-10 absolute bottom-4 left-2 ">
        <h4 className=" font-bold text-2xl mt-1 text-emerald-400 hover:text-emerald-200 transition-all duration-100">
          <Link href={"project/" + project.key}>{project.name} &rarr;</Link>
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
}
