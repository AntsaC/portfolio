import Footer from "./_ui/Footer";
import Hero from "./_ui/Hero";
import Skills from "./_ui/Skills";
import TopicSection from "./_ui/TopicSection";
import Workflow from "./_ui/Workflow";

export default function Home() {
  return (
    <main>
      <div className="lg:px-20 p-4">
        <Hero />
        <Skills />
        <Workflow />
        <TopicSection />
      </div>
      <Footer />
    </main>
  );
}
