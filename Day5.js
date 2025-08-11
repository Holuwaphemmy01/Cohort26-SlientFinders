function love(value1, value2){



if (value1 % 2 == 0 && value2 % 2 != 0 || value1 % 2 != 0 && value2 % 2 == 0) {
	
	return true;
 }
	else {
		return false;
	} 
}

let flower1 = 2
let flower2 = 3


console.log(love(flower1, flower2))