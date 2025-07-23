import { getCollection, type CollectionEntry } from "astro:content";
import { compareBookIds } from "./bookId";

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

export const getSortedBooks = async (year?: number): Promise<CollectionEntry<"books">[]> => {
  const books = await getBooks(year);
  return books.sort((a, b) => compareBookIds(a.id, b.id));
};
