import type { SiteContentPayload } from "@/lib/validations";

type NavbarProps = {
  content: SiteContentPayload["site"];
};

export function Navbar({ content }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-margin-mobile md:px-margin-desktop">
        <div className="text-headline-md font-bold tracking-tighter text-on-surface">
          {content.heroName}
        </div>
        <div className="hidden items-center gap-gutter md:flex">
          <a
            className="text-label-md text-on-surface-variant transition-colors hover:text-on-surface"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-label-md text-on-surface-variant transition-colors hover:text-on-surface"
            href="#research"
          >
            Research
          </a>
          <a
            className="text-label-md text-on-surface-variant transition-colors hover:text-on-surface"
            href="#about"
          >
            About
          </a>
        </div>
        <div>
          <a
            className="flex items-center gap-2 rounded-DEFAULT bg-primary-container px-4 py-2 text-label-md text-white transition-opacity hover:opacity-90"
            href={`mailto:${content.contactEmail}`}
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
