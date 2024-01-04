import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-50 border rounded p-2 flex flex-col ">
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
          <a href={"project/" + project.key}>{project.name} &rarr;</a>
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
        <a
          className="bg-green-600 hover:bg-transparent hover:text-green-500 border text-xs border-green-500 text-white py-2 px-4 transition-all duration-300 ease-in-out hidden md:inline-block "
          href={"project/" + project.key}
        >
          View
        </a>
      </div>
    </div>
  );
}