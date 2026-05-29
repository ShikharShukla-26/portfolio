import { SocialBrandIcon } from "@/components/ui/SocialBrandIcon";
import type { SiteContentPayload } from "@/lib/validations";

type FooterProps = {
  content: SiteContentPayload;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface py-unit-xl">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-unit-md px-margin-desktop md:flex-row">
        <div className="text-label-md font-bold text-on-surface">{content.site.heroName}</div>
        <div className="text-center text-label-sm text-on-surface-variant opacity-80 md:text-left">
          {content.site.footerTagline}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {content.socialLinks.map((link) => (
            <a
              key={`${link.label}-${link.sortOrder}`}
              className="flex items-center gap-2 text-label-sm text-on-surface-variant underline decoration-outline-variant transition-all opacity-80 hover:text-on-surface hover:opacity-100"
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialBrandIcon label={link.label} url={link.url} size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
