function returnArray(number){
newArray = [];
for(let count = number; count >= 1 ; count--){
newArray.push(count);
}
return newArray;
}



num = 5;
console.log(returnArray(num));
