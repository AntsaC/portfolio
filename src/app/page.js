import Footer from "./_ui/Footer";
import Hero from "./_ui/Hero";
import Skills from "./_ui/Skills";
import TopicSection from "./_ui/TopicSection";
import Workflow from "./_ui/Workflow";

export default function Home() {
  return (
    <main className={"mt-20 md:mt-0"}>
        <Hero />
        <Skills />
        <Workflow />
        <TopicSection />
        <Footer />
    </main>
  );
}
