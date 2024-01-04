"use client";
import "./ImageCarousel.css";
import Image from "next/image";
import { useState } from "react";

const resolveImage = (project, image) =>
  `/photo/projects/${project.key}/${image}`;

export default function ProjectImageCarousel({ project }) {
  const [image, setImage] = useState(project.images[0]);

  const carousel = (
    <div className="w-full h-44 lg:h-80 relative">
      <Image
        alt="Image"
        fill
        objectFit="contain"
        src={resolveImage(project, image)}
      />
    </div>
  );

  const imageList = (
    <div className="flex justify-around mt-4 ">
      {project.images.map((i) => (
        <div className="relative" key={i} onClick={() => setImage(i)}>
          <Image
            alt="Image"
            src={resolveImage(project, i)}
            width={120}
            height={10}
          />
          <div className={i === image && "green-overlay"}></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex-1 lg:p-8">
      {carousel}
      {imageList}
    </div>
  );
}
