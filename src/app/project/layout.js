import Header from "../_ui/Header";
import "../globals.css";

export default function ProjectLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mt-20 md:mt-0">
        {children}
      </main>
    </div>
  );
}