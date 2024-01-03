import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-50 border rounded p-2 flex flex-col ">
      <Image
        alt="Project thumbnail"
        src={"/photo/projects/" + project.key + "/" + project.thumbnail}
        width={200}
        height={100}
        layout="responsive"
      />
      <div className="p-2">
        <h4 className=" font-bold text-xl mt-1 text-emerald-400">
          {project.name}
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
              className="border border-emerald-400 rounded-3xl text-xs mr-1 p-2 px-2 lg:px-4"
            >
              {t}
            </div>
          ))}
        </div>
        <a
          className="bg-green-600 hover:bg-transparent hover:text-green-500 border text-xs border-green-500 text-white py-2 px-4 transition-all duration-300 ease-in-out "
          href={"project/" + project.key}
        >
          View
        </a>
      </div>
    </div>
  );
}
