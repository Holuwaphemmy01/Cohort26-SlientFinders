function checkNumberOfPetals(flower1, flower2){
	if(flower1 % 2 == 0 && flower2 % 2 == 1){
		return true;

	}else {return false}
}


flower1 = 8;
flower2 = 7;
console.log(checkNumberOfPetals(flower1, flower2))