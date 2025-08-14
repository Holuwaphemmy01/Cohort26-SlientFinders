let numbers = [10, 5, 17, 11, 24, 27, 25, 26, 28, 28];
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 0) {
    sum++;
  }
}

console.log(sum);