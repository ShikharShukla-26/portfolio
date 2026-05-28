import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { EngineeringWork } from "@/components/sections/EngineeringWork";
import { Hero } from "@/components/sections/Hero";
import { ThinkingSection } from "@/components/sections/ThinkingSection";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const content = await getSiteContent();

  return (
    <>
      <Navbar content={content.site} />
      <main className="mx-auto max-w-[1200px] px-margin-mobile pb-unit-xl pt-[120px] md:px-margin-desktop">
        <Hero content={content.site} />
        <EngineeringWork projects={content.engineeringProjects} />
        <ThinkingSection items={content.thinkingItems} />
        <AboutSection content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
