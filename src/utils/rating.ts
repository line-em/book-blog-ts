export const getStars = (rating: number): string => {
  rating = Math.round(rating * 2) / 2;
  let output = [];

  for (let i = 1; i <= rating; i++) {
    output.push(`<img src="/assets/star-fill.svg" style="border: none" alt="Full Star"/>`);
  }

  if (rating % 1 !== 0) {
    output.push(`<img src="/assets/star-half-fill.svg" style="border: none" alt="Half Star"/>`);
  }

  for (let i = Math.ceil(rating); i < 5; i++) {
    output.push(`<img src="/assets/star.svg" style="border: none" alt="Empty Star"/>`);
  }

  return output.join("");
};

export const getAverageStars = (ratings: number[]): number => {
  const totalScore = ratings.reduce((acc, curr) => acc + curr, 0);
  const average = totalScore / ratings.length;
  return parseFloat(average.toFixed(1));
};
