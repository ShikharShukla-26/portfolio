import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { defaultSiteContent } from "@/lib/defaults";
import type { SiteContentPayload } from "@/lib/validations";

const contentFilePath = path.join(process.cwd(), "data", "site-content.json");

export async function getSiteContent(): Promise<SiteContentPayload> {
  try {
    const fileContents = await readFile(contentFilePath, "utf8");
    return JSON.parse(fileContents) as SiteContentPayload;
  } catch {
    return defaultSiteContent;
  }
}

export async function updateSiteContent(payload: SiteContentPayload): Promise<void> {
  const normalized: SiteContentPayload = {
    ...payload,
    engineeringProjects: payload.engineeringProjects.map((project, index) => ({
      ...project,
      sortOrder: index,
    })),
    thinkingItems: payload.thinkingItems.map((item, index) => ({
      ...item,
      sortOrder: index,
    })),
    caseStudies: payload.caseStudies.map((study, index) => ({
      ...study,
      sortOrder: index,
    })),
    socialLinks: payload.socialLinks.map((link, index) => ({
      ...link,
      sortOrder: index,
    })),
  };

  await mkdir(path.dirname(contentFilePath), { recursive: true });
  await writeFile(contentFilePath, JSON.stringify(normalized, null, 2), "utf8");
}
