"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Subtitle from "./shared/Subtitle";
import Image from "next/image";
import Link from "next/link";
import projects from "@/lib/data/project";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
export default function ProjectCatalog() {

  return (
    <section id="projects" className="container mt-5 lg:mt-0">
      <Subtitle text={"Projects"} />
      <p className="text-slate-100 text-base mt-4 h-12 text-center">
        Here are some of the projects I&apos;ve worked on.
      </p>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.key} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col relative h-96 lg:h-[500px] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-950 opacity-80  border-emerald-300 z-10"></div>
          <div className=" absolute top-0 w-full h-full overflow-hidden ">
            <Image
              alt="Project thumbnail"
              src={"/photo/projects/" + project.key + "/" + project.thumbnail}
              className="hover:scale-125 transition-all duration-1000 object-cover object-left-top"
              fill
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
      {isOpen && <ImageGallery images={project.images} projectKey={project.key} setIsOpen={setIsOpen} />}
    </>
  );
};

const ImageGallery = ({ images, projectKey, setIsOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-75 flex items-center justify-center">
      <button 
        className="absolute left-24 top-1/2 -translate-y-1/2 bg-emerald-500 p-2 rounded-full text-white"
        onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
      >
        <ArrowLeft />
      </button>

      <button
        className="absolute top-4 right-4 text-white bg-emerald-500 p-2 rounded-full"
        onClick={() => setIsOpen(false)}
      >
        <X />
      </button>

      <div className="relative w-full max-w-4xl aspect-video">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full"
            style={{ display: index === currentImage ? 'block' : 'none' }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={`/photo/projects/${projectKey}/${image}`}
              alt={`Project image ${index + 1}`}
              fill
              className="rounded-lg object-contain transition-transform duration-300"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
        ))}

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImage ? 'bg-emerald-500' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      <button
        className="absolute right-24 top-1/2 -translate-y-1/2 bg-emerald-500 p-2 rounded-full text-white"
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
