import { z, defineCollection } from "astro:content";

const bookCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			year: z.any().optional(),
			month: z.string(),
			score: z.number(),
			genre: z.array(z.string()),
			image: image().or(z.string()),
			heroimage: z.array(image().or(z.string())).optional(),
			extraimage: image().or(z.string()).optional(),
			extraimages: image().or(z.any()).optional()
		})
});

export const collections = {
	books: bookCollection
};
