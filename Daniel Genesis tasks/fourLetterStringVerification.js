function fourLetterStringVerification(array){
let newArray = [];
for (let index = 0; index < array.length; index++){
if (array[index].length == 4) newArray.push(array[index]);
}
return newArray;
}

let arrayL = ["Ryan", "Kieran", "Jason", "Yous"];
console.log(fourLetterStringVerification(arrayL));