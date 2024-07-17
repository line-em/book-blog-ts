import { z, defineCollection } from 'astro:content'

const bookCollection = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			year: z.any().optional(),
			month: z.string(),
			score: z.number(),
			genre: z.array(z.string()),
			image: image(),
			heroimage: z.tuple([image(), z.string()]).optional(),
			extraimage: image().optional(),
			extraimages: z.array(image()).optional()
		})
})

export const collections = {
	books: bookCollection
}
