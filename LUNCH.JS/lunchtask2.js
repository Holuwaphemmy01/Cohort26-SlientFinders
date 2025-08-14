function sumEvenNumbers(numbers){
  let sum = 0;
  for (let count = 1; count < numbers.length; count++) {

    if (numbers[count] % 2 === 0) {
      sum += numbers[count];
    }

  }
  return sum;
}
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(myNumbers)); 




















