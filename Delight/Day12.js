function sortDigitsDescending(num) {
  // Convert the number to a string
  let numStr = num.toString();

  // Split into individual digits, sort in descending order, then join back
  let sortedStr = numStr.split('').sort(function(a, b) {
    return b - a;
  }).join('');

  // Convert back to number and return
  return parseInt(sortedStr, 10);
}

console.log(sortDigitsDescending(42145)); 
console.log(sortDigitsDescending(145263)); 