import { getProject } from "@/lib/data/project";
import ProjectImageCarousel from "../_ui/ImageCarousel";
import ProjectDetailContainer from "../_ui/Detail";

export default function ProjectDetailPage({ params }) {
  const project = getProject(params.key);

  return (
    <main className="p-4">
      <div className="flex px-4 flex-col lg:flex-row">
        <ProjectImageCarousel project={project} />
        <ProjectDetailContainer project={project} />
      </div>
    </main>
  );
}
