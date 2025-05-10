import { setRequestLocale } from "next-intl/server";
import Contact from "../_ui/Contact";
import Footer from "../_ui/Footer";
import Hero from "../_ui/Hero";
import ProjectCatalog from "../_ui/ProjectCatalog";
import Skills from "../_ui/Skills";
import TopicSection from "../_ui/TopicSection";
import WhyMe from "../_ui/WhyMe";

export default async function Home({params}) {
 
  const {locale} = await params;

  setRequestLocale(locale);

  return (
    <main className={"mt-20 md:mt-0"}>
        <Hero />
        <ProjectCatalog locale={locale} />
        <WhyMe />
        <Skills />
        <TopicSection />
        <Contact />
        <Footer />
    </main>
  );
}
