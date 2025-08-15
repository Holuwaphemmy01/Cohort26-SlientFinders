function mergesTwoArray(array, secondArray){


let result = array.concat(secondArray).toSorted();

let sort = result.filter((item , index)=> result.indexOf(item) == index);
 
return sort.filter((items)=> items !== undefined);




}


let number = [2,,5,3,9,8,5,6,8,3,4];
let num2 = [2,6,4,7,9,65,6,4,3,7,8]
console.log(mergesTwoArray(number,num2));






