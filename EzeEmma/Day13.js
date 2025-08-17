function findNextSquare(number) {
  let squareRoot = Math.sqrt(number);
  if (squareRoot % 1 !== 0) {
    return -1;
  }
  let nextSquareRoot = squareRoot + 1;
  return nextSquareRoot * nextSquareRoot;
}

console.log(findNextSquare(121));
console.log(findNextSquare(114));
