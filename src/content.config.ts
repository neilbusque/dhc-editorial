/**
 * Content collections for Dynamic Home Creations.
 *  - projects: full case studies (long-form remodels)
 *  - journal:  short field notes, process updates
 *  - gallery:  single-image moments / details / materials
 */
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  author: z.string(),
  description: z.string(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    })
    .optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  slug: z.string().optional(),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/gallery" }),
  schema: baseSchema,
});

const journal = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/journal" }),
  schema: baseSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/projects" }),
  schema: baseSchema,
});

export const collections = { projects, journal, gallery };
