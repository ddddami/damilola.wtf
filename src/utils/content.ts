import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;
type RawProjectData = CollectionEntry<"projects">["data"];

export type Project = RawProjectData extends Array<infer Item>
  ? Item
  : RawProjectData;

function isProject(value: unknown): value is Project {
  return Boolean(
    value &&
      typeof value === "object" &&
      "name" in value &&
      "description" in value,
  );
}

export function getProjectList(entries: CollectionEntry<"projects">[]): Project[] {
  return entries.flatMap(({ data }) => {
    if (Array.isArray(data)) {
      return data.filter(isProject);
    }

    return isProject(data) ? [data] : [];
  });
}

export function getPostPath(post: BlogEntry) {
  const slug = (post as BlogEntry & { slug?: string }).slug;
  return slug ?? post.id.replace(/\.(md|mdx)$/, "");
}
