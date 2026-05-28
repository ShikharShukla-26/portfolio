import Image from "next/image";

import type { SiteContentPayload } from "@/lib/validations";

type AboutSectionProps = {
  content: SiteContentPayload;
};

export function AboutSection({ content }: AboutSectionProps) {
  const paragraphs = content.site.aboutBody.split(/\n\n+/).filter(Boolean);

  return (
    <section className="mt-unit-lg border-t border-outline/30 py-unit-xl" id="about">
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <div className="mb-8 flex justify-center md:col-span-4 md:mb-0 md:justify-start">
          <div className="relative h-48 w-48 overflow-hidden rounded-DEFAULT border border-outline transition-all duration-500 hover-glow md:h-64 md:w-64">
            <Image
              src="/assets/images/profile.jpg"
              alt={content.site.heroName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <h2 className="mb-6 text-headline-md text-on-surface">{content.site.aboutTitle}</h2>
          <div className="space-y-4 text-body-lg text-on-surface-variant">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6">
            <a
              className="inline-flex items-center gap-2 rounded-DEFAULT border border-outline bg-transparent px-4 py-2 text-label-sm text-on-surface transition-all hover:border-on-surface hover:bg-surface"
              href="/assets/resume/Shikhar_Shukla_Resume.pdf"
              download="Shikhar_Shukla_Resume.pdf"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Download Resume
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {content.socialLinks.map((link) => (
              <a
                key={`${link.label}-${link.sortOrder}`}
                className="flex items-center gap-2 text-label-md text-on-surface-variant transition-colors hover:text-primary-container"
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
