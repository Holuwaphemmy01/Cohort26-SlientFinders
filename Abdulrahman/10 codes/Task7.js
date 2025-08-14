function MergeTwoArray(array1, array2){
let storeNumber = 0;
let result = array1;
let newArrayLen = array1.length + array2.length;

for(let count = 0; count < array1.length count < newArrayLen; count++){
result[count] = array2[storeNumber];
storeNumber++;
}


for(let count = 0; count < result.length - 1; count++){
for(let counter = count; counter < result.length; counter++){
if(result[count] > result[counter]){
storeNumber = result[counter];
result[counter] = result[count];





}


let number1 = [1, 2, 3, 5, 6];
let number1 = [9, 2, 7, 9, 10];