function largestAndSecondLargest(numberString){
	let stringArray = numberString.split(" ");
	let numberArray = stringArray.map(Number);
	let largest = 0;
	let smallest = 0;
for(let count = 0; count <= numberArray.length; count++){
 if (numberArray[count] > largest); largest =  numberArray[count];
   console.log(largest);
if(numberArray[count] < smallest); smallest =  numberArray[count];
 
}
let result = numberArray.filter(number => number === largest || number => number === smallest);
return `${result.join(" ")}`;
}

list = "2 3 4 5";
console.log(largestAndSecondLargest(list));


	