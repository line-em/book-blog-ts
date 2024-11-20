import { type CollectionEntry } from 'astro:content'

export const getGenres = (books: CollectionEntry<'books'>[]): Record<string, number> =>
	books.reduce((genreCounter: { [key: string]: number }, currentBook) => {
		for (const genre of currentBook.data.genre) {
			genreCounter.hasOwnProperty(genre) ? genreCounter[genre]++ : (genreCounter[genre] = 1)
		}
		return genreCounter
	}, {})

export const listAllGenres = (books: CollectionEntry<'books'>[]): string[] => {
	const genres = getGenres(books)
	console.log(genres)
	return Object.keys(genres)
}

export const getTop5MostReadGenres = (
	books: CollectionEntry<'books'>[]
): Record<string, number> => {
	const genres = getGenres(books)

	// Sort genres by count in descending order and take the top five
	const topGenres = Object.entries(genres)
		.sort(([, countA], [, countB]) => countB - countA)
		.slice(0, 5)

	// Convert back to an object with genre names as keys and counts as values
	return Object.fromEntries(topGenres)
}

export const getMostReadGenresByYear = (allBooks: CollectionEntry<'books'>[], years: number[]) => {
	const genresByYear: Record<number, Record<string, number>> = {}

	for (const year of years) {
		const booksForYear = allBooks.filter((book) => book.data.year === year)
		genresByYear[year] = getTop5MostReadGenres(booksForYear)
	}

	return genresByYear
}

export const getBooksByGenre = (books: CollectionEntry<'books'>[], genre: string): string[] => {
	return books
		.filter((book) => book.data.genre.includes(genre)) // Filter books that include the specified genre
		.map((book) => book.data.title) // Extract book titles
}

export const getBooksByGenreAndYear = (
	books: CollectionEntry<'books'>[],
	genre: string,
	year?: number
): { title: string; genre: string[]; year: number; slug: string }[] => {
	return books
		.filter((book) => book.data.genre.includes(genre) && (!year || book.data.year === year))
		.map((book) => ({
			title: book.data.title,
			genre: book.data.genre,
			year: book.data.year,
			slug: book.slug
		}))
}

export const getMostReadGenres = (books: CollectionEntry<'books'>[]): string[] => {
	const genres = getGenres(books)
	return Object.keys(genres).reduce((mostReadGenres: string[], currentGenre: string) => {
		if (genres[currentGenre] > genres[mostReadGenres[0]]) {
			mostReadGenres.length = 0
		}

		if (mostReadGenres.length === 0 || genres[currentGenre] === genres[mostReadGenres[0]]) {
			mostReadGenres.push(currentGenre)
		}
		return mostReadGenres
	}, [])
}
