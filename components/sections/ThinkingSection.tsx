import { ThinkingCard } from "@/components/cards/ThinkingCard";
import { SocialBrandIcon } from "@/components/ui/SocialBrandIcon";
import type { ThinkingItemInput } from "@/lib/validations";

type ThinkingSectionProps = {
  items: ThinkingItemInput[];
  substackUrl: string;
};

export function ThinkingSection({ items, substackUrl }: ThinkingSectionProps) {
  return (
    <section className="py-unit-xl" id="research">
      <div className="mb-unit-lg">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-headline-md text-on-surface">How I think about products</h2>
          <div className="hidden h-px min-w-[2rem] flex-grow bg-outline opacity-50 sm:block" />
          <a
            className="flex shrink-0 items-center gap-2 rounded-DEFAULT border border-outline bg-transparent px-4 py-2 text-label-sm text-on-surface transition-all hover:border-on-surface hover:bg-surface"
            href={substackUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialBrandIcon label="Substack" url={substackUrl} size={18} />
            My Substack
          </a>
        </div>
        <p className="mt-3 text-body-md text-on-surface-variant">
          These essays and notes are published on my Substack.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <ThinkingCard key={`${item.title}-${item.sortOrder}`} item={item} />
        ))}
      </div>
    </section>
  );
}
