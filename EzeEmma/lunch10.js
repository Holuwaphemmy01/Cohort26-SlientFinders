/**
10. Create a function that accepts an array of numbers and returns an object with two properties: even and odd, each containing an array of the respective numbers 
**/


function separateEvenOdd(numbers) {
    let result = { even: [], odd: [] };
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.even.push(numbers[i]);
        } else {
            result.odd.push(numbers[i]);
        }
    }
    return result;
}
console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]));