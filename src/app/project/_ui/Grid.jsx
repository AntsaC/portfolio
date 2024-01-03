import projects from "@/lib/data/project";
import ProjectCard from "./Card";

export default function ProjectGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
