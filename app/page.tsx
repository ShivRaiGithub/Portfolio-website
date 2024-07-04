
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
// import Experience from "@/components/main/Experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <div className="min-h-screen flex items-center">
          <Hero />
        </div>
        <div className="min-h-screen flex items-center">
          <Skills />
        </div>
        <div className="min-h-screen flex items-center">
          <Projects />
        </div>
      </div>
    </main>
  );
}
