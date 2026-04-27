import { getCollection } from "astro:content";
import { getPostPath } from "../utils/content";

export async function GET(context: { site: string }) {
  const site = context.site;
  const blog = await getCollection("blog", ({ data }) => data.draft !== true);

  const posts = blog.map((post) => ({
    id: post.id,
    title: post.data.title,
    url: `${site}posts/${getPostPath(post)}`,
    tags: post.data.tags,
    summary: post.data.description,
    content_text: post.body,
    date_published: post.data.date,
  }));

  const jsonFeed = {
    version: "https://jsonfeed.org/version/1",
    title: "Damilola's Blog",
    home_page_url: site,
    feed_url: `${site}feed.json`,
    author: {
      name: "Damilola Osunsanwo",
      url: "https://trulydami.me",
    },
    items: posts,
  };

  return new Response(JSON.stringify(jsonFeed));
}
