import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../content/site";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: [...(post.data.tags ?? []), ...(post.data.categories ?? [])],
    })),
    customData: `<language>en-us</language>`,
  });
}
