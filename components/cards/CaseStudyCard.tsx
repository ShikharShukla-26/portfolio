import type { CaseStudyInput } from "@/lib/validations";

type CaseStudyCardProps = {
  item: CaseStudyInput;
};

function downloadFilename(url: string): string {
  const segment = url.split("/").pop();
  return segment && segment.length > 0 ? segment : "case-study";
}

export function CaseStudyCard({ item }: CaseStudyCardProps) {
  const downloadLabel = item.downloadLabel ?? "Download Case Study";

  return (
    <div className="flex flex-col justify-between gap-4 rounded-DEFAULT border border-outline bg-surface p-6 md:flex-row md:items-center">
      <div>
        <h3 className="mb-2 text-headline-md text-on-surface">{item.title}</h3>
        {item.subtitle && (
          <p className="mb-2 text-label-md text-on-surface-variant">{item.subtitle}</p>
        )}
        <p className="text-body-md text-on-surface-variant">{item.description}</p>
      </div>
      <div className="shrink-0">
        <a
          className="flex items-center gap-2 rounded-sm border border-outline bg-[#1A1A1A] px-3 py-1.5 text-label-sm text-on-surface transition-colors hover:border-on-surface"
          href={item.downloadUrl}
          download={downloadFilename(item.downloadUrl)}
        >
          {downloadLabel}
          <span className="material-symbols-outlined text-[14px]">download</span>
        </a>
      </div>
    </div>
  );
}
