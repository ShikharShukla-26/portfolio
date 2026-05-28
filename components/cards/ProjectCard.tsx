import type { EngineeringProjectInput } from "@/lib/validations";

type ProjectCardProps = {
  project: EngineeringProjectInput;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectUrl = Boolean(project.projectUrl && project.projectUrl !== "#");

  return (
    <div className="group relative flex h-[240px] flex-col overflow-hidden rounded-DEFAULT border border-outline bg-surface p-6 transition-all duration-300 hover-glow">
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-10 transition-opacity group-hover:opacity-20">
        <span className="material-symbols-outlined text-6xl">{project.icon}</span>
      </div>
      <div className="relative z-10 flex-1">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="max-w-[72%] text-headline-md text-on-surface">{project.title}</h3>
          <span className="ml-3 flex shrink-0 items-center gap-1 rounded-sm border border-outline bg-[#1A1A1A] px-2 py-1 text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px]">flag</span>
            {project.country}
          </span>
        </div>
        <p className="no-scrollbar max-h-[86px] max-w-[80%] overflow-y-auto pr-1 text-body-md text-on-surface-variant">
          {project.description}
        </p>
      </div>
      <div className="mt-4 flex min-h-[44px] items-center justify-between gap-3 border-t border-outline/50 pt-4">
        <div className="no-scrollbar flex min-w-0 flex-1 items-center gap-2 overflow-x-auto whitespace-nowrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 rounded-sm border border-outline bg-[#1A1A1A] px-2 py-1 text-label-sm text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
        {hasProjectUrl ? (
          <a
            className="flex shrink-0 items-center gap-1 text-label-md text-on-surface transition-colors group-hover:text-primary-container"
            href={project.projectUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Project
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
