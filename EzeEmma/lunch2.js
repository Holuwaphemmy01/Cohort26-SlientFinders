/**
Given an array of numbers, write a function that sum all the even number in the array.
**/

function sumEvenNumbers(numbers) {
    let sum = 0;

    for (let count = 0; count < numbers.length; count++) {
        if (numbers[count] % 2 === 0) {
            sum += numbers[count];
        }
    }

    return sum;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(arr));
