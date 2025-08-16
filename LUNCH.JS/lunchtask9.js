function countElements(arr) {
  let counts = {};

  for (let count = 0; count < arr.length; count++) {
    let element = arr[count];
    counts[element] = (counts[element] || 0) + 1;
  }

  return counts;
}


let input = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let result = countElements(input);
console.log(result);

