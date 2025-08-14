/**
5. Write a function that takes an array of numbers and returns the product of all numbers using a loop.
**/

function getProducts(number){
let theProduct = 1;
for (let count = 0; count < number.length; count++){
    theProduct *= number[count];
}
   return theProduct;
}

let arr = [2, 4, 5, 6, 7, 9]
console.log(getProducts(arr))