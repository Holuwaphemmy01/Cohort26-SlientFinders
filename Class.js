let studentScores = [56, 78, 90, 88, 93, 81];
let result = studentScores
    .filter(score => score >= 80)
    .sort((a, b) => b - a);
console.log(result);