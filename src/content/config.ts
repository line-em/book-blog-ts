import { z, defineCollection } from "astro:content";

const bookCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		author: z.string(),
		// year: z.number().optional(),
		year: z.any().optional(),
		month: z.string(),
		score: z.number(),
		genre: z.array(z.string()),
		image: z.string(),
		heroimage: z.array(z.string()).optional(),
		extraimage: z.string().optional(),
		extraimages: z.string().optional()
	})
});

export const collections = {
	books: bookCollection
};
