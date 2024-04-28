import { getCollection } from "astro:content";

export const getBooks = async (year?: number) => {
	let result;
	if (year) {
		const getBooksByYear = await getCollection("books", ({ id }) => {
			return id.startsWith(`${year}/`);
		});
		result = getBooksByYear;
		console.log(`Found ${result.length} books for year ${year}`);
	} else {
		result = await getCollection("books");
	}
	return result;
};
