function findNextSquare(sq) {
  let root = Math.sqrt(sq);

  // Check if it's a perfect square
  if (root % 1 !== 0) {
    return -1;
  }

  // Calculate and return the next perfect square
  let nextRoot = root + 1;
  return nextRoot * nextRoot;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625)); 
console.log(findNextSquare(114)); 