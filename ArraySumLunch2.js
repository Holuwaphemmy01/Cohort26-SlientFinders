function addSum() {

let numbers = [2, 3, 4, 5, 6, 8, 10];

let sum = 0;

for(let count = 0; count <= numbers.length; count++){

	if(numbers[count] % 2 == 0){

	   sum += numbers[count];

	}

}

return sum;

}
console.log("The sum of even numbers is: " + addSum());

