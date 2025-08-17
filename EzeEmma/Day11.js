function highAndLow(numberString) {
  let numbersArray = numberString.split(" ").map(Number);
  let highestNumber = Math.max(...numbersArray);
  let lowestNumber = Math.min(...numbersArray);
  return highestNumber + " " + lowestNumber;
}

console.log(highAndLow("1 2 3 4 5"));    
console.log(highAndLow("1 9 3 4 -5"));  
console.log(highAndLow("1 2 -3 4 5"));  
