function setNumbers(array){
let arr = [];
for(let count = 0; count < array.length; count++){
arr.push(array[count] * -1)
}
return arr;
}



list = [1, -2, 3, 4, -5, 6];
console.log(setNumbers(list))