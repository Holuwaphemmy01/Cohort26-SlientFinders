function love(value1, value2){



if (value1 % 2 == 0 && value2 % 2 != 0 || value1 % 2 != 0 && value2 % 2 == 0) {
	
	return true;
 }
	else {
		return false;
	} 
}

let petal1 = 2
let petal2 = 3


console.log(love(petal1, petal2))