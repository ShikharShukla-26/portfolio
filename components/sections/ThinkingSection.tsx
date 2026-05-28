import { ThinkingCard } from "@/components/cards/ThinkingCard";
import type { ThinkingItemInput } from "@/lib/validations";

type ThinkingSectionProps = {
  items: ThinkingItemInput[];
};

export function ThinkingSection({ items }: ThinkingSectionProps) {
  return (
    <section className="py-unit-xl" id="research">
      <div className="mb-unit-lg flex items-center gap-4">
        <h2 className="text-headline-md text-on-surface">How I think about products</h2>
        <div className="h-px flex-grow bg-outline opacity-50" />
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <ThinkingCard key={`${item.title}-${item.sortOrder}`} item={item} />
        ))}
      </div>
    </section>
  );
}
