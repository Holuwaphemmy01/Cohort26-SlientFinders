function array_of_two_largest(numbers){
let largest = numbers[0]
second_largest = numbers[0]
for(index = 0; index < numbers.length; index++){
if(numbers[index] > largest){
	second_largest = largest
	largest = numbers[index]}
else if(numbers[index] > second_largest){
	second_largest = numbers[index]	
}
}
return [second_largest,largest]
}
let num = [1,3,4,4,43,32,3221,12]
console.log(array_of_two_largest(num))