import { z } from "zod";

const maxItems = 4;

export const engineeringProjectSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  country: z.string().min(1, "Country is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  icon: z.string().min(1, "Icon is required"),
  projectUrl: z.string().min(1, "Project URL is required"),
  sortOrder: z.number().int().min(0),
});

export const thinkingItemSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  linkUrl: z.string().min(1, "Link URL is required"),
  sortOrder: z.number().int().min(0),
});

export const socialLinkSchema = z.object({
  id: z.number().optional(),
  label: z.string().min(1, "Label is required"),
  url: z.string().min(1, "URL is required"),
  icon: z.string().min(1, "Icon is required"),
  sortOrder: z.number().int().min(0),
});

export const siteSettingsSchema = z.object({
  heroName: z.string().min(1),
  heroSubtitle: z.string().min(1),
  heroQuote: z.string().min(1),
  contactEmail: z.string().email(),
  substackUrl: z.string().min(1),
  aboutTitle: z.string().min(1),
  aboutBody: z.string().min(1),
  footerTagline: z.string().min(1),
});

export const siteContentPayloadSchema = z.object({
  site: siteSettingsSchema,
  engineeringProjects: z
    .array(engineeringProjectSchema)
    .max(maxItems, `Maximum ${maxItems} engineering projects allowed`),
  thinkingItems: z
    .array(thinkingItemSchema)
    .max(maxItems, `Maximum ${maxItems} thinking items allowed`),
  socialLinks: z.array(socialLinkSchema).max(10),
});

export type SiteContentPayload = z.infer<typeof siteContentPayloadSchema>;
export type EngineeringProjectInput = z.infer<typeof engineeringProjectSchema>;
export type ThinkingItemInput = z.infer<typeof thinkingItemSchema>;
export type SocialLinkInput = z.infer<typeof socialLinkSchema>;

export const MAX_ITEMS = maxItems;
