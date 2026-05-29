"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { MAX_ITEMS, type SiteContentPayload } from "@/lib/validations";

type DashboardEditorProps = {
  initialContent: SiteContentPayload;
};

type SectionKey = "hero" | "projects" | "thinking" | "about" | "social" | "footer";

const emptyProject = (): SiteContentPayload["engineeringProjects"][number] => ({
  title: "",
  country: "",
  description: "",
  tags: [],
  icon: "code",
  projectUrl: "#",
  sortOrder: 0,
});

const emptyThinking = (): SiteContentPayload["thinkingItems"][number] => ({
  title: "",
  description: "",
  linkUrl: "#",
  sortOrder: 0,
});

const emptySocial = (): SiteContentPayload["socialLinks"][number] => ({
  label: "",
  url: "",
  icon: "link",
  sortOrder: 0,
});

export function DashboardEditor({ initialContent }: DashboardEditorProps) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContentPayload>(initialContent);
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSave() {
    setSaving(true);
    setError(null);
    setSuccess(null);

    const payload: SiteContentPayload = {
      ...content,
      engineeringProjects: content.engineeringProjects.map((p, i) => ({
        ...p,
        sortOrder: i,
        tags: p.tags.map((tag) => tag.trim()).filter(Boolean),
      })),
      thinkingItems: content.thinkingItems.map((t, i) => ({ ...t, sortOrder: i })),
      socialLinks: content.socialLinks.map((s, i) => ({ ...s, sortOrder: i })),
    };

    try {
      const response = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        const details = data.details?.fieldErrors
          ? JSON.stringify(data.details.fieldErrors)
          : data.error;
        throw new Error(details ?? "Failed to save");
      }

      setContent(data);
      setSuccess("Content saved successfully.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save content");
    } finally {
      setSaving(false);
    }
  }

  const sections: { key: SectionKey; label: string }[] = [
    { key: "hero", label: "Hero" },
    { key: "projects", label: "Engineering Work" },
    { key: "thinking", label: "How I Think" },
    { key: "about", label: "About" },
    { key: "social", label: "Social Links" },
    { key: "footer", label: "Footer" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background">
      <header className="border-b border-outline bg-surface px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-headline-md text-on-surface">Admin Dashboard</h1>
            <p className="text-body-md text-on-surface-variant">Edit your portfolio content</p>
          </div>
          <div className="flex gap-3">
            <a
              className="rounded-DEFAULT border border-outline px-4 py-2 text-label-md hover:bg-surface-container"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
            <button
              type="button"
              className="rounded-DEFAULT border border-outline px-4 py-2 text-label-md hover:bg-surface-container"
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-8 md:grid-cols-[220px_1fr]">
        <nav className="flex flex-row flex-wrap gap-2 md:flex-col">
          {sections.map((section) => (
            <button
              key={section.key}
              type="button"
              onClick={() => setActiveSection(section.key)}
              className={`rounded-DEFAULT px-4 py-2 text-left text-label-md transition-colors ${
                activeSection === section.key
                  ? "bg-primary-container text-white"
                  : "border border-outline text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="space-y-6 rounded-DEFAULT border border-outline bg-surface p-6">
          {activeSection === "hero" && (
            <div className="space-y-4">
              <h2 className="text-headline-md">Hero</h2>
              <Field label="Name" value={content.site.heroName} onChange={(v) => updateSite("heroName", v)} />
              <Field label="Subtitle" value={content.site.heroSubtitle} onChange={(v) => updateSite("heroSubtitle", v)} />
              <Field label="Quote" value={content.site.heroQuote} onChange={(v) => updateSite("heroQuote", v)} multiline />
              <Field label="Contact Email" value={content.site.contactEmail} onChange={(v) => updateSite("contactEmail", v)} />
              <Field label="Substack URL" value={content.site.substackUrl} onChange={(v) => updateSite("substackUrl", v)} />
            </div>
          )}

          {activeSection === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-headline-md">Engineering Work</h2>
                <button
                  type="button"
                  disabled={content.engineeringProjects.length >= MAX_ITEMS}
                  className="rounded-DEFAULT bg-primary-container px-3 py-1.5 text-label-sm text-white disabled:opacity-40"
                  onClick={() =>
                    setContent((c) => ({
                      ...c,
                      engineeringProjects: [...c.engineeringProjects, emptyProject()],
                    }))
                  }
                >
                  Add Project ({content.engineeringProjects.length}/{MAX_ITEMS})
                </button>
              </div>
              <p className="text-label-sm text-on-surface-variant">Use Position to change item order manually.</p>
              {content.engineeringProjects.map((project, index) => (
                <div key={index} className="space-y-3 rounded-DEFAULT border border-outline p-4">
                  <div className="flex justify-between">
                    <h3 className="text-label-md font-semibold">Project {index + 1}</h3>
                    <button
                      type="button"
                      className="text-label-sm text-error"
                      onClick={() =>
                        setContent((c) => ({
                          ...c,
                          engineeringProjects: c.engineeringProjects.filter((_, i) => i !== index),
                        }))
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <IndexField
                    label="Position"
                    value={index}
                    max={content.engineeringProjects.length}
                    onChange={(nextIndex) => moveProjectToIndex(index, nextIndex)}
                  />
                  <Field label="Title" value={project.title} onChange={(v) => updateProject(index, "title", v)} />
                  <Field label="Country" value={project.country} onChange={(v) => updateProject(index, "country", v)} />
                  <Field label="Description" value={project.description} onChange={(v) => updateProject(index, "description", v)} multiline />
                  <Field
                    label="Tags (comma-separated)"
                    value={project.tags.join(",")}
                    onChange={(v) => updateProject(index, "tags", v.split(","))}
                  />
                  <Field label="Material Icon" value={project.icon} onChange={(v) => updateProject(index, "icon", v)} />
                  <Field label="Project URL" value={project.projectUrl} onChange={(v) => updateProject(index, "projectUrl", v)} />
                </div>
              ))}
            </div>
          )}

          {activeSection === "thinking" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-headline-md">How I think about products</h2>
                <button
                  type="button"
                  disabled={content.thinkingItems.length >= MAX_ITEMS}
                  className="rounded-DEFAULT bg-primary-container px-3 py-1.5 text-label-sm text-white disabled:opacity-40"
                  onClick={() =>
                    setContent((c) => ({
                      ...c,
                      thinkingItems: [...c.thinkingItems, emptyThinking()],
                    }))
                  }
                >
                  Add Item ({content.thinkingItems.length}/{MAX_ITEMS})
                </button>
              </div>
              <p className="text-label-sm text-on-surface-variant">Use Position to change item order manually.</p>
              {content.thinkingItems.map((item, index) => (
                <div key={index} className="space-y-3 rounded-DEFAULT border border-outline p-4">
                  <div className="flex justify-between">
                    <h3 className="text-label-md font-semibold">Item {index + 1}</h3>
                    <button
                      type="button"
                      className="text-label-sm text-error"
                      onClick={() =>
                        setContent((c) => ({
                          ...c,
                          thinkingItems: c.thinkingItems.filter((_, i) => i !== index),
                        }))
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <IndexField
                    label="Position"
                    value={index}
                    max={content.thinkingItems.length}
                    onChange={(nextIndex) => moveThinkingToIndex(index, nextIndex)}
                  />
                  <Field label="Title" value={item.title} onChange={(v) => updateThinking(index, "title", v)} />
                  <Field label="Description" value={item.description} onChange={(v) => updateThinking(index, "description", v)} multiline />
                  <Field label="Link URL" value={item.linkUrl} onChange={(v) => updateThinking(index, "linkUrl", v)} />
                </div>
              ))}
            </div>
          )}

          {activeSection === "about" && (
            <div className="space-y-4">
              <h2 className="text-headline-md">About Shikhar</h2>
              <p className="text-label-sm text-on-surface-variant">
                Profile photo is static at <code className="text-on-surface">public/assets/images/profile.jpg</code> — update via Git.
              </p>
              <Field label="Section Title" value={content.site.aboutTitle} onChange={(v) => updateSite("aboutTitle", v)} />
              <Field label="Body (use blank line between paragraphs)" value={content.site.aboutBody} onChange={(v) => updateSite("aboutBody", v)} multiline />
            </div>
          )}

          {activeSection === "social" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-headline-md">Social Links</h2>
                <button
                  type="button"
                  className="rounded-DEFAULT bg-primary-container px-3 py-1.5 text-label-sm text-white"
                  onClick={() =>
                    setContent((c) => ({
                      ...c,
                      socialLinks: [...c.socialLinks, emptySocial()],
                    }))
                  }
                >
                  Add Link
                </button>
              </div>
              {content.socialLinks.map((link, index) => (
                <div key={index} className="space-y-3 rounded-DEFAULT border border-outline p-4">
                  <div className="flex justify-between">
                    <h3 className="text-label-md font-semibold">Link {index + 1}</h3>
                    <button
                      type="button"
                      className="text-label-sm text-error"
                      onClick={() =>
                        setContent((c) => ({
                          ...c,
                          socialLinks: c.socialLinks.filter((_, i) => i !== index),
                        }))
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <Field label="Label" value={link.label} onChange={(v) => updateSocial(index, "label", v)} />
                  <Field label="URL" value={link.url} onChange={(v) => updateSocial(index, "url", v)} />
                  <Field
                    label="Icon key (optional)"
                    value={link.icon}
                    onChange={(v) => updateSocial(index, "icon", v)}
                    hint="Display uses brand logo from Label/URL; this field is kept for compatibility."
                  />
                </div>
              ))}
            </div>
          )}

          {activeSection === "footer" && (
            <div className="space-y-4">
              <h2 className="text-headline-md">Footer</h2>
              <Field label="Tagline" value={content.site.footerTagline} onChange={(v) => updateSite("footerTagline", v)} />
            </div>
          )}

          {error && <p className="rounded-DEFAULT bg-error-container/20 p-3 text-body-md text-error">{error}</p>}
          {success && <p className="rounded-DEFAULT bg-primary-container/20 p-3 text-body-md text-primary">{success}</p>}

          <button
            type="button"
            disabled={saving}
            onClick={handleSave}
            className="w-full rounded-DEFAULT bg-primary-container py-3 text-label-md text-white disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      </div>
    </div>
  );

  function updateSite<K extends keyof SiteContentPayload["site"]>(key: K, value: SiteContentPayload["site"][K]) {
    setContent((c) => ({ ...c, site: { ...c.site, [key]: value } }));
  }

  function updateProject(
    index: number,
    key: keyof SiteContentPayload["engineeringProjects"][number],
    value: string | string[],
  ) {
    setContent((c) => {
      const projects = [...c.engineeringProjects];
      projects[index] = { ...projects[index], [key]: value };
      return { ...c, engineeringProjects: projects };
    });
  }

  function updateThinking(
    index: number,
    key: keyof SiteContentPayload["thinkingItems"][number],
    value: string,
  ) {
    setContent((c) => {
      const items = [...c.thinkingItems];
      items[index] = { ...items[index], [key]: value };
      return { ...c, thinkingItems: items };
    });
  }

  function updateSocial(
    index: number,
    key: keyof SiteContentPayload["socialLinks"][number],
    value: string,
  ) {
    setContent((c) => {
      const links = [...c.socialLinks];
      links[index] = { ...links[index], [key]: value };
      return { ...c, socialLinks: links };
    });
  }

  function moveProjectToIndex(currentIndex: number, nextIndex: number) {
    if (currentIndex === nextIndex) {
      return;
    }

    setContent((c) => ({
      ...c,
      engineeringProjects: reorderItems(c.engineeringProjects, currentIndex, nextIndex),
    }));
  }

  function moveThinkingToIndex(currentIndex: number, nextIndex: number) {
    if (currentIndex === nextIndex) {
      return;
    }

    setContent((c) => ({
      ...c,
      thinkingItems: reorderItems(c.thinkingItems, currentIndex, nextIndex),
    }));
  }
}

function reorderItems<T>(items: T[], fromIndex: number, toIndex: number): T[] {
  const next = [...items];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

function IndexField({
  label,
  value,
  max,
  onChange,
}: {
  label: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  const className =
    "w-full rounded-DEFAULT border border-outline bg-surface-container px-3 py-2 text-body-md text-on-surface outline-none focus:border-primary-container";

  return (
    <label className="block space-y-1">
      <span className="text-label-sm text-on-surface-variant">{label}</span>
      <select
        className={className}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      >
        {Array.from({ length: max }, (_, index) => (
          <option key={index} value={index}>
            {index + 1}
          </option>
        ))}
      </select>
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  hint?: string;
}) {
  const className =
    "w-full rounded-DEFAULT border border-outline bg-surface-container px-3 py-2 text-body-md text-on-surface outline-none focus:border-primary-container";

  return (
    <label className="block space-y-1">
      <span className="text-label-sm text-on-surface-variant">{label}</span>
      {hint && <span className="block text-body-sm text-on-surface-variant/80">{hint}</span>}
      {multiline ? (
        <textarea className={`${className} min-h-[100px]`} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className={className} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}
