function sumEvenNumbers(array) {
  let sum = 0; 

  for (let numbers = 0; numbers < array.length; numbers++) {
    if (array[numbers] % 2 === 0){
      sum += array[numbers]; 
    }
  }

  return sum; 
}

const numbers = [1, 2, 3, 4, 5, 6]; 
const result = sumEvenNumbers(numbers);
console.log(result);