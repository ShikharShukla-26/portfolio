import type { SiteContentPayload } from "@/lib/validations";

type HeroProps = {
  content: SiteContentPayload["site"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      className="flex min-h-[614px] flex-col items-start justify-center py-unit-xl pt-unit-xl"
      id="hero"
    >
      <div className="max-w-3xl">
        <h1 className="mb-unit-sm tracking-tighter text-headline-xl-mobile text-on-surface md:text-headline-xl">
          {content.heroName}
        </h1>
        <p className="mb-unit-lg text-headline-lg-mobile font-normal text-on-surface-variant opacity-80 md:text-headline-lg">
          {content.heroSubtitle}
        </p>
        <div className="mb-unit-xl border-l-2 border-outline py-2 pl-6">
          <p className="max-w-2xl text-body-lg text-on-surface italic opacity-90">
            &ldquo;{content.heroQuote}&rdquo;
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="flex items-center gap-2 rounded-DEFAULT bg-primary-container px-6 py-3 text-label-md text-white transition-colors hover:bg-[#0059c5]"
            href={`mailto:${content.contactEmail}`}
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Get in Touch
          </a>
          <a
            className="flex items-center gap-2 rounded-DEFAULT border border-outline bg-transparent px-6 py-3 text-label-md text-on-surface transition-all hover:border-on-surface hover:bg-surface"
            href={content.substackUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">article</span>
            Substack
          </a>
          <a
            className="flex items-center gap-2 rounded-DEFAULT border border-outline bg-transparent px-6 py-3 text-label-md text-on-surface transition-all hover:border-on-surface hover:bg-surface"
            href="/assets/resume/Shikhar_Shukla_Resume.pdf"
            download="Shikhar_Shukla_Resume.pdf"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
