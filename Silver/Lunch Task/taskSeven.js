function array_no_duplicates(){
array1 = [2,2,32,3,3,221,]
array2 = [32,32,21,3,323,2,3,4,3]
let newArray = array1.concat(array2)
let newArray2 = []
for(let index = 0; index < newArray.length; index++){
if(newArray.includes(array1[index]) && newArray.includes(array2[index]))continue
newArray2.push(newArray[index])
}
return newArray2
}
console.log(array_no_duplicates())