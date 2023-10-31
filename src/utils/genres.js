export const getGenres = (books) =>
	books.reduce((genreCounter, currentBook) => {
		for (const genre of currentBook.data.genre) {
			genreCounter.hasOwnProperty(genre)
				? genreCounter[genre]++
				: (genreCounter[genre] = 1);
		}
		return genreCounter;
	}, []);

export const listAllGenres = (books) => {
	const genres = getGenres(books);
	console.log(genres);
	return Object.keys(genres);
};

export const getMostReadGenres = (books) => {
	const genres = getGenres(books);
	return Object.keys(genres).reduce((mostReadGenres, currentGenre) => {
		// Compares to the initial value in the reduce method [], and the following most read genres.
		// If the number is higher than the accumulating one, it resets, and the new value is pushed.
		// Other genres with the same counter will be pushed.

		if (genres[currentGenre] > genres[mostReadGenres[0]]) {
			mostReadGenres.length = 0;
		}

		if (
			mostReadGenres.length === 0 ||
			genres[currentGenre] === genres[mostReadGenres[0]]
		) {
			mostReadGenres.push(currentGenre);
		}
		return mostReadGenres;
	}, []);
};
