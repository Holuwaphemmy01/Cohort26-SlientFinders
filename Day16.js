function reverseSeq(n) {
  const result = [];
  for (let count = n; count >= 1; count--) {
    result.push(count);
  }
  return result;
}

console.log(reverseSeq(5));