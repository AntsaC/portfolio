"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className="bg-lime-50 border rounded p-2 flex flex-col "
    >
      <div className="h-44 lg:h-64 relative">
        <Image
          alt="Project thumbnail"
          src={"/photo/projects/" + project.key + "/" + project.thumbnail}
          fill
          objectFit="cover"
        />
      </div>
      <div className="p-2">
        <h4 className=" font-bold text-xl mt-1 text-emerald-400 hover:text-emerald-700 transition-all duration-100">
          <Link href={"project/" + project.key}>{project.name} &rarr;</Link>
        </h4>
        <p className="text-gray-500 text-base mt-1 h-12">
          {project.description}
        </p>
      </div>
      <div className="flex justify-between p-2 mt-1">
        <div className="flex justify-around">
          {project.tags.map((t) => (
            <div
              key={t}
              className="border border-emerald-400 rounded-3xl text-xs mr-2 p-2 px-4"
            >
              {t}
            </div>
          ))}
        </div>
        <Link
          className="bg-green-600 hover:bg-transparent hover:text-green-500 border text-xs border-green-500 text-white py-2 px-4 transition-all duration-300 ease-in-out hidden md:inline-block "
          href={"project/" + project.key}
        >
          View
        </Link>
      </div>
    </motion.div>
  );
}
