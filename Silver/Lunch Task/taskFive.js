function product_of_numbers(array){
let multiply = 1
new_array = []
for(index = 0; index < array.length; index++){
multiply *= array[index]
}
new_array.push(multiply)
return new_array
}
let num = [1,2,3,4,6,7,7,75,4]
console.log(product_of_numbers(num))