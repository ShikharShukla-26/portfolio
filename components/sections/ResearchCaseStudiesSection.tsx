import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import type { CaseStudyInput } from "@/lib/validations";

type ResearchCaseStudiesSectionProps = {
  items: CaseStudyInput[];
};

export function ResearchCaseStudiesSection({ items }: ResearchCaseStudiesSectionProps) {
  return (
    <section className="py-unit-xl" id="research">
      <div className="mb-unit-lg flex items-center gap-4">
        <h2 className="text-headline-md text-on-surface">Research & Case Studies</h2>
        <div className="h-px flex-grow bg-outline opacity-50" />
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <CaseStudyCard key={`${item.title}-${item.sortOrder}`} item={item} />
        ))}
      </div>
    </section>
  );
}
