function sumEvenNumbers(number){

let result = number.filter((number)=> number % 2 == 0);
console.log(result);

initialValue = 0;

return result.reduce((accumulator,currentValue)=> accumulator + currentValue,
initialValue,)

}

let number = [3,5,,7,7,5,4,4,7,8,8,98,,84,4,6];
console.log(sumEvenNumbers(number));