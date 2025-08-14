function SumEvenNumber(array){
let sumEven = 0;
for(let count = 0; count <= array.length; count++){
if(array[count] % 2 == 0){
 sumEven += array[count];
}
}
return sumEven;

}


numbers = [1, 2, 3, 4, 5, 10];
console.log(SumEvenNumber(numbers));