function arrayOfNumbers(input){
let even = 0

for(let index = 0; index <= input.length; index++){

if (input[index] % 2 == 0){

even += input[index]
}

}
return even
}


let numbers = [3, 4, 6, 7, 4, 9, 4]

console.log(arrayOfNumbers(numbers))