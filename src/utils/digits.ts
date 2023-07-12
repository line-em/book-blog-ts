export const getDigits = (original: number | string, digits: number) => {
	if (typeof original === "number" && typeof digits === "number") {
		return original.toString().substring(digits);
	} else if (typeof original === "string" && typeof digits === "number") {
		return original.substring(digits);
	}
};

export const getImagePath = (original: string, year: number | string) => {
	return `books${getDigits(year, 2)}/${getDigits(original, 3)}`;
};

export const removeYearFromPath = (original: string) => {
	return original.substring(5);
};

export const removeFileExtension = (original: string) => {
	return original.substring(0, original.length - 4);
};

export const getUrlPath = (original: string, hasYear: boolean = false) => {
	return `./${hasYear ? removeYearFromPath(original) : original}/index.html`;
};
