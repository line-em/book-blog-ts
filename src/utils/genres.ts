import { type CollectionEntry } from 'astro:content'

export const getGenres = (books:CollectionEntry<'books'>[]): Record<string, number> =>
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
