function cleanGpsData(myArray){
let newArray = [];
for (let index = 0; index < myArray.length; index++){
if (myArray[index] != null || myArray[index] != undefined){
newArray.push(myArray[index]);
}
}
return newArray;
}

let array = ["24-55-66", null, "33-22-22", "22-34-56", undefined];
console.log(cleanGpsData(array));