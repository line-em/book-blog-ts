import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const validYears = [2021, 2022, 2023, 2024, 2025];

const bookCollection = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/*.md", base: "./src/content/books/" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      year: z.coerce
        .number()
        .min(validYears[0])
        .max(validYears[validYears.length - 1]),
      month: z.string(),
      score: z.number().lte(5).gte(0),
      genre: z.array(z.string()),
      image: image(),
      heroimage: z.tuple([image(), z.string()]).optional(),
      extraimage: image().optional(),
      extraimages: z.array(image()).optional(),
    }),
});

export const collections = {
  books: bookCollection,
};
