function getOccuranceOfPetals(petal1, petal2){

if ((petal1 % 2 == 0 && petal2 % 2 == 1) || (petal2 % 2 == 0 && petal1 % 2 == 1)){
	return true;}
else { return false;}



}


let result = getOccuranceOfPetals(4, 7);
console.log(result);

