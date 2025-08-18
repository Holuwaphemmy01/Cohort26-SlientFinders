function reverseArray(array) {

let reversedArray = [];

for(let count = array.length-1; count >= 0; count--){

reversedArray.push(array[count]);
}
return reversedArray
}

let originalNumber = [75,14,39,82,65,27,31];

let reversedNumbers = reverseArray(originalNumber);

console.log(reversedNumbers);




