function validNumbers(numbers){
 let validNumbers = [];
  for (let count = 0; count < numbers.length; count++){
   if (numbers[count] >= 1 && numbers[count] <= 5){
    validNumbers.push(numbers[count]);
  }


}
return validNumbers;
}

numbers = [0,4,5,7,8,5,4,2,3,45,7,2,0,0.1,0];
console.log(validNumbers(numbers));