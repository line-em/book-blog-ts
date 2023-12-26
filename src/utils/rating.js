export const getStars = (rating) => {
    rating = Math.round(rating * 2) / 2;
    let output = [];

    for (let i = rating; i >= 0.5; i--) {
        if (i <= 0.80) {
            output.push(
                `<img src="/assets/star-half-fill.svg" style="border: none" alt="Half Star"/>`
                // `<i class="ph-star-half-fill ph-lg text-gradient" aria-hidden="true"></i>`
            );
        } else {
            output.push(
                `<img src="/assets/star-fill.svg" style="border: none" alt="Full Star"/>`
                // `<i class="ph-star-fill ph-lg text-gradient" aria-hidden="true"></i>`
            );
        }
    }

    for (let i = 5 - rating; i >= 1; i--)
        // output.push(`<i class="ph-star ph-lg text-gradient" aria-hidden="true"></i>`);
        output.push(`<img src="/assets/star.svg" style="border: none" alt="Half Star"/>`);


    return output.join("");
};

export const getAverageStars = (ratings) => {
    const totalScore = ratings.reduce((acc, curr) => acc + curr, 0);
    // const totalScore = ratings.reduce((acc, book) => acc + book.frontmatter.score, 0)
    // return Math.round(totalScore / ratings.length);
    const average = totalScore / ratings.length;
    return parseFloat(average.toFixed(1));
};
