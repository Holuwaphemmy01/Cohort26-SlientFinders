function sum_even_numbers(numbers){
let sum = 0
let new_array = []
for(index = 0; index <= numbers.length; index++){
if(numbers[index] % 2 == 0){
sum += numbers[index]
}
}
new_array.push(sum)
return new_array
}
let num = [1,3,4,6,2,4]
console.log(sum_even_numbers(num))