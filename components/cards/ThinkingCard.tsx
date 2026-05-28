import type { ThinkingItemInput } from "@/lib/validations";

type ThinkingCardProps = {
  item: ThinkingItemInput;
};

export function ThinkingCard({ item }: ThinkingCardProps) {
  return (
    <a
      className="group flex flex-col justify-between gap-4 rounded-DEFAULT border border-outline bg-surface p-6 transition-colors hover:border-on-surface md:flex-row md:items-center"
      href={item.linkUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div>
        <h3 className="mb-2 text-headline-md text-on-surface transition-colors group-hover:text-primary-container">
          {item.title}
        </h3>
        <p className="text-body-md text-on-surface-variant">{item.description}</p>
      </div>
      <div className="shrink-0">
        <span className="flex items-center gap-2 rounded-sm border border-outline bg-[#1A1A1A] px-3 py-1.5 text-label-sm text-on-surface">
          Read Essay
          <span className="material-symbols-outlined text-[14px]">north_east</span>
        </span>
      </div>
    </a>
  );
}
