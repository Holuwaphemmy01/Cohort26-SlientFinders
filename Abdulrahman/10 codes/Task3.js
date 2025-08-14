function toGetStringLength(array){
let newArray = []
for(let count = 0; count < array.length; count++){
  newArray.push(array[count].length)
}
return newArray;
}







let string = ["hunter", "kunu", "hut", "harlem"];
console.log(toGetStringLength(string))