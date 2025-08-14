function numbers(array){
let product = 1
for( let count = 0; count < array.length; count++){ 
 product = product * array[count];

}
return product
}
let multiple = [2, 3, 6,7, 9,4]
console.log(numbers(multiple))