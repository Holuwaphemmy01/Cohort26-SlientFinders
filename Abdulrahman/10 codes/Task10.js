function toGetOddAndEvenNumber(array){
let evenArray = [];
let oddArray = [];

for(let count = 0; count < array.length; count++){
if(array[count] % 2 == 0){
evenArray.push(array[count]);
}
}

for(let count = 0; count < array.length; count++){
if(array[count] % 2 != 0){
oddArray.push(array[count]);
}
}
return [evenArray,oddArray];
}



let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(toGetOddAndEvenNumber(numbers));