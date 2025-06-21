import { getCollection, type CollectionEntry } from "astro:content";

export const getBooks = async (year?: number): Promise<CollectionEntry<"books">[]> => {
  if (year) {
    const getBooksByYear = await getCollection("books", ({ id }) => {
      return id.startsWith(`${year}/`);
    });
    return getBooksByYear;
  } else {
    return await getCollection("books");
  }
};
