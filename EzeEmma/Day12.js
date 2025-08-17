function descendingOrder(number) {
  let digitsArray = number.toString().split("");
  let sortedDigits = digitsArray.sort((a, b) => b - a);
  return Number(sortedDigits.join(""));
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
