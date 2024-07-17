export const getStars = (rating:number): string => {
	rating = Math.round(rating * 2) / 2
	let output = []

	for (let i = rating; i >= 0.5; i--) {
		if (i <= 0.8) {
			output.push(
				`<img src="/assets/star-half-fill.svg" style="border: none" alt="Half Star"/>`
			)
		} else {
			output.push(
				`<img src="/assets/star-fill.svg" style="border: none" alt="Full Star"/>`
			)
		}
	}

	for (let i = 5 - rating; i >= 1; i--)
		output.push(`<img src="/assets/star.svg" style="border: none" alt="Half Star"/>`)

	return output.join('')
}

export const getAverageStars = (ratings: number[]): number => {
	const totalScore = ratings.reduce((acc, curr) => acc + curr, 0)
	const average = totalScore / ratings.length
	return parseFloat(average.toFixed(1))
}
