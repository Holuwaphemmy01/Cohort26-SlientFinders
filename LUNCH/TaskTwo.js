function evenNumber(ArrayOfNumber){
let sumEven = 0
for(let index = 0; index <= ArrayOfNumber.length; index++){
if(ArrayOfNumber[index] % 2 == 0){
sumEven += ArrayOfNumber[index]
}
}
return sumEven;
}
let input  = [ 1, 3, 4, 2, 8, 90, 22, 12, 14]
console.log(evenNumber(input));