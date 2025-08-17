function sumOfTwoLowest(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}

console.log(sumOfTwoLowest([1, 5, 87, 45, 8, 8]));
