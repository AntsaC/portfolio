import Title from "../_ui/shared/Title";
import ProjectGrid from "./_ui/Grid";

export default function ProjectPage() {
  return (
    <main className="p-4 lg:px-20 py-6 px-8 mt-12">
      <Title title={"Projects catalog"} />
      <ProjectGrid />
    </main>
  );
}
