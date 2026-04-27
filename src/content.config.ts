import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.{md,mdx}",
	}),
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()).default([]),
		date: z.coerce.date(),
		description: z.string(),
		keywords: z.string(),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: file("src/content/projects/projects.json", {
		parser: (text) =>
			Object.fromEntries(
				JSON.parse(text).map((project: { name: string }, index: number) => {
					const id =
						project.name
							.toLowerCase()
							.replace(/[^a-z0-9]+/g, "-")
							.replace(/^-|-$/g, "") || `project-${index + 1}`;

					return [id, project];
				}),
			),
	}),
	schema: z.object({
		name: z.string().regex(/^[A-Za-z0-9-.\s]+$/),
		description: z.string(),
		website_url: z.string().url().optional().nullable(),
		github_url: z.string().url().optional().nullable(),
		image: z.string().regex(/\.(png|jpg|jpeg|gif)$/),
		tags: z.array(z.string()),
		status: z.enum([
			"active",
			"unmaintained",
			"archived",
			"private",
			"deprecated",
			"wip",
		]),
	}),
});

export const collections = {
	blog,
	projects,
};
