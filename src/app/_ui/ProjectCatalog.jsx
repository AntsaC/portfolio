"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Subtitle from "./shared/Subtitle";
import Image from "next/image";
import Link from "next/link";
import projects from "@/lib/data/project";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProjectCatalog({locale}) {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="container mt-5 lg:mt-0">
      <Subtitle text={t("title")} />
      <p className="text-slate-100 text-base mt-4 h-12 text-center">
        {t("description")}
      </p>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {projects.map((project) => (
                <ProjectCard key={project.key} project={project} locale={locale} />
            ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, locale }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="modern-card relative h-96 lg:h-[500px] cursor-pointer group overflow-hidden rounded-none backdrop-blur-md bg-surface/30"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt="Project thumbnail"
            src={"/photo/projects/" + project.key + "/" + project.thumbnail}
            className="group-hover:scale-110 transition-transform duration-700 object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        
        <div className="relative z-30 h-full flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="font-bold text-2xl mb-2 text-gradient group-hover:text-white transition-colors duration-300">
              {project.website ? (
                <Link href={project.website} target="_blank" className="flex items-center gap-2">
                  {project.name}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              ) : (
                project.name
              )}
            </h4>
            
            <p className="text-text-secondary text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.description[locale]}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 mb-2 bg-accent-primary/20 text-accent-primary text-xs font-medium rounded-full border border-accent-primary/30 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-30">
          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </motion.div>
      {isOpen && <ImageGallery images={project.images} projectKey={project.key} setIsOpen={setIsOpen} />}
    </>
  );
};

const ImageGallery = ({ images, projectKey, setIsOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-accent-primary/90 p-3 rounded-full text-white backdrop-blur-sm border border-white/10 transition-colors duration-200 z-10"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-accent-primary/90 p-3 rounded-full text-white backdrop-blur-sm border border-white/10 transition-colors duration-200 z-10"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 right-4 bg-surface/80 hover:bg-red-500/90 p-3 rounded-full text-white backdrop-blur-sm border border-white/10 transition-colors duration-200 z-10"
        onClick={() => setIsOpen(false)}
      >
        <X className="w-5 h-5" />
      </motion.button>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="relative w-full max-w-6xl aspect-video mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: index === currentImage ? 1 : 0,
              scale: index === currentImage ? 1 : 0.95
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            style={{ display: index === currentImage ? 'block' : 'none' }}
          >
            <div className="relative w-full h-full bg-surface/20 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={`/photo/projects/${projectKey}/${image}`}
                alt={`Project image ${index + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3"
        >
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImage 
                  ? 'bg-accent-primary scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImage(index);
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {currentImage + 1} / {images.length}
      </div>
    </motion.div>
  );
};
