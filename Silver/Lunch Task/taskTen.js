function even_and_odd(array){
new_evenArray = []
new_oddArray = []
for(index = 0; index < array.length; index++){
if(array[index] % 2 == 0){
new_evenArray.push(array[index])
}
else 
	new_oddArray.push(array[index])}
return [new_evenArray]
}
let num = [2,32,2,21,21,2,32,3,43,43]
console.log(even_and_odd(num))
