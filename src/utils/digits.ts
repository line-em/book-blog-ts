export const getDigits = (original: number | string, digits: number) => {
	if (typeof original === "number" && typeof digits === "number") {
		return original.toString().substring(digits);
	} else if (typeof original === "string" && typeof digits === "number") {
		return original.substring(digits);
	}
};
