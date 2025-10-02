function twoOldestAgeInArrayOfAges(myArray){
let myNewArray = [];
let arrayOfTwoLargest = [Math.max(...myArray)];
let index = 0;
for (index = 0; index < myArray.length; index++){
if (myArray[index] < Math.max(...myArray)) myNewArray.push(myArray[index]);
}
let secondMax = Math.max(...myNewArray);
console.log(secondMax);
arrayOfTwoLargest.push(secondMax);
return arrayOfTwoLargest;
}
array = [1, 5, 87, 45, 8, 8];
console.log(twoOldestAgeInArrayOfAges(array));