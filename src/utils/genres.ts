import { type CollectionEntry } from "astro:content";
import { GENRE_LIST, type Genre } from "./genreList";

export const getGenres = (books: CollectionEntry<"books">[]): Record<Genre, number> => {
  const genreCounter = books.reduce((counter: { [key in Genre]?: number }, currentBook) => {
    for (const genre of currentBook.data.genre as Genre[]) {
      counter[genre] = (counter[genre] ?? 0) + 1;
    }
    return counter;
  }, {});
  // Ensure all genres are present with at least 0
  const allGenres: Genre[] = [...GENRE_LIST];
  const result: Record<Genre, number> = Object.fromEntries(
    allGenres.map(g => [g, genreCounter[g] ?? 0])
  ) as Record<Genre, number>;
  return result;
};

export const listAllGenres = (books: CollectionEntry<"books">[]): Genre[] => {
  const genres = getGenres(books);
  return Object.keys(genres) as Genre[];
};

export const getTop5MostReadGenres = (books: CollectionEntry<"books">[]): Record<Genre, number> => {
  const genres = getGenres(books);
  const topGenres = Object.entries(genres)
    .sort(([, countA], [, countB]) => (countB ?? 0) - (countA ?? 0))
    .slice(0, 5);
  return Object.fromEntries(topGenres) as Record<Genre, number>;
};

export const getMostReadGenresByYear = (allBooks: CollectionEntry<"books">[], years: number[]) => {
  const genresByYear: Record<number, Record<Genre, number>> = {};
  for (const year of years) {
    const booksForYear = allBooks.filter(book => book.data.year === year);
    genresByYear[year] = getTop5MostReadGenres(booksForYear);
  }
  return genresByYear;
};

export const getBooksByGenre = (books: CollectionEntry<"books">[], genre: Genre): string[] => {
  return books
    .filter(book => (book.data.genre as Genre[]).includes(genre))
    .map(book => book.data.title);
};

export const getBooksByGenreAndYear = (
  books: CollectionEntry<"books">[],
  genre: Genre,
  year?: number
): { title: string; genre: Genre[]; year: number; slug: string }[] => {
  return books
    .filter(
      book => (book.data.genre as Genre[]).includes(genre) && (!year || book.data.year === year)
    )
    .map(book => ({
      title: book.data.title,
      genre: book.data.genre as Genre[],
      year: book.data.year,
      slug: book.id,
    }));
};

export const getMostReadGenres = (books: CollectionEntry<"books">[]): Genre[] => {
  const genres = getGenres(books);
  return (Object.keys(genres) as Genre[]).reduce((mostReadGenres: Genre[], currentGenre: Genre) => {
    if (genres[currentGenre]! > genres[mostReadGenres[0]]!) {
      mostReadGenres.length = 0;
    }
    if (mostReadGenres.length === 0 || genres[currentGenre] === genres[mostReadGenres[0]]) {
      mostReadGenres.push(currentGenre);
    }
    return mostReadGenres;
  }, []);
};
