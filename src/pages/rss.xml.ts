import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blog = await getCollection("blog");
  return rss({
    title: "Damilola’s Blog",
    description:
      "A blog about tech, sometimes not tech, things I find interesting. I just hope you do enjoy it!",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
