function returnReverse(arrayNum,number){
let newArray = [];

let numCount = 0;for (let counter = 0; counter < number; counter++){
numCount = arrayNum[arrayNum.length - number + counter];
newArray.push(numCount);
}
newArray.reverse();

for (let count = 0; count < arrayNum.length - number; count++){
endCount = arrayNum[count];
newArray.push(endCount);
}


return newArray;


}



let array = [3,5,8,6, 67, 34, 21, 56, 21, 4,3,6,6,4];
let number = 8;

console.log(returnReverse(array,number));


