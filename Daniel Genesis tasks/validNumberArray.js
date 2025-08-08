function validNumberArray(array){
let arrayNew = []
for (let count = 0; count < array.length; count++){
if (array[count] != 0 && array[count] != 6){
arrayNew.push(array[count]);
}
}
return arrayNew;
}

let new_array = [ 0, 1, 0, 2, 3, 4, 5, 6];
console.log(validNumberArray(new_array));