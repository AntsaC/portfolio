import Contact from "./_ui/Contact";
import Footer from "./_ui/Footer";
import Hero from "./_ui/Hero";
import ProjectCatalog from "./_ui/ProjectCatalog";
import Skills from "./_ui/Skills";
import TopicSection from "./_ui/TopicSection";
import WhyMe from "./_ui/WhyMe";
import Workflow from "./_ui/Workflow";

export default function Home() {
  return (
    <main className={"mt-20 md:mt-0"}>
        <Hero />
        <ProjectCatalog />
        <WhyMe />
        <Skills />
        <TopicSection />
        <Contact />
        <Footer />
    </main>
  );
}
