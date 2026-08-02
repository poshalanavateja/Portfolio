import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Nav } from "@/components/Nav";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poshala Navateja" },
      {
        name: "description",
        content:
          "Selected work in AI-native tools, multimodal ML, and agentic systems. Software engineer actively shipping production-ready projects and open to work.",
      },
      { property: "og:title", content: "Poshala Navateja" },
      {
        property: "og:description",
        content: "AI focus assistant, multimodal Parkinson's prediction, and agentic research tooling.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <About />
      </main>
      <Contact />
    </div>
  );
}
