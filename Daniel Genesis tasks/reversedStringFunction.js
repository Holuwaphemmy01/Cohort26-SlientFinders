function reversedString(string){
stringArray = string.split(" ");
 reversedStringArray = [];
 let newString = "";
  let newStringA = [];
for (let index = 0; index < stringArray.length; index++){
for (let count = ((stringArray[index].length) - 1); count >= 0; count--){
newString += stringArray[index][count];
if (count == 0){
let counter = reversedStringArray.push(newString)
}
}
newString = ""
}
return reversedStringArray;
}

let myString = "Daniel is a boy";
console.log(reversedString(myString));