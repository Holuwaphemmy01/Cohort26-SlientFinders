function ToRemoveValid(arrayOfNumber){

for (const number in arrayOfNumber){
	if(number == 0 && number == 6){
		arrayOfNumber.slice(1,6)	

}

}
return arrayOfNumber.slice(1,6)
}
array = [0,1,2,3,4,5,6]
console.log(ToRemoveValid(array));