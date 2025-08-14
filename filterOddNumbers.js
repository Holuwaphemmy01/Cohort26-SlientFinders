function oddNumbers(numbers){
return numbers.filter((number)=> number % 2 != 0);

}


let numbers = [2,3,5,6,7,7,9,8,5,7,8];
console.log(oddNumbers(numbers));