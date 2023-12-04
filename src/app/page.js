import Hero from "./_ui/Hero";
import Skills from "./_ui/Skills";
import Workflow from "./_ui/Workflow";

export default function Home() {
  return (
    <main className="p-4">
      <Hero />
      <Skills />
      <Workflow />
    </main>
  );
}
