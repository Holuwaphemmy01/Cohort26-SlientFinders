let numbers = [15, 5, 20, 10];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}