
function product() {

let numbers = [2, 4, 5, 6, 7, 8, 9, 10];

let product = 1; 

	for (let count = 0; count < numbers.length; count++){

	product *= numbers[count];

	}    

	return product;

}
	console.log("The product of numbers is: " + product());


    

