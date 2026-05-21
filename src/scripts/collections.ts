import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

const parser = new MarkdownIt();

/** Valid content collection names for use with getCollection(). */
export type CollectionName = "gallery" | "journal" | "projects";

interface CollectionPost {
  id: string;
  body?: string;
  data: {
    title: string;
    description: string;
    tags: string[];
    pubDate: Date;
    updatedDate?: Date;
    author: string;
    image?: {
      src: string;
      alt: string;
      positionx?: string;
      positiony?: string;
    };
  };
}

export function buildDetailPaths<T extends CollectionPost>(entries: T[]) {
  return entries.map((entry) => ({
    params: { id: entry.id },
    props: { entry },
  }));
}

export function buildTagPaths<T extends CollectionPost>(
  entries: T[],
  collectionSlug: string,
) {
  const uniqueTags = [...new Set(entries.map((post) => post.data.tags).flat())];
  return uniqueTags.map((tag: string) => {
    const filteredPosts = entries.filter((post) =>
      post.data.tags.includes(tag),
    );
    return {
      params: { tag },
      props: { posts: filteredPosts, collectionSlug },
    };
  });
}

export function generateRss(
  entries: CollectionPost[],
  collectionSlug: string,
  context: { site?: URL },
) {
  if (!context.site) {
    throw new Error("site must be defined in astro.config for RSS generation");
  }
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...entries]
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        ...post.data,
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/${collectionSlug}/${post.id}/`,
        content: sanitizeHtml(parser.render(post.body ?? "")),
      })),
    customData: `<language>en-us</language>`,
  });
}
