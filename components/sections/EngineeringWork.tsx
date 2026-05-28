import { ProjectCard } from "@/components/cards/ProjectCard";
import type { EngineeringProjectInput } from "@/lib/validations";

type EngineeringWorkProps = {
  projects: EngineeringProjectInput[];
};

export function EngineeringWork({ projects }: EngineeringWorkProps) {
  return (
    <section className="py-unit-xl" id="projects">
      <div className="mb-unit-lg flex items-center gap-4">
        <h2 className="text-headline-md text-on-surface">Engineering Work</h2>
        <div className="h-px flex-grow bg-outline opacity-50" />
      </div>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={`${project.title}-${project.sortOrder}`} project={project} />
        ))}
      </div>
    </section>
  );
}
