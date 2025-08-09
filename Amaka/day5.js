function isInLove(petal1, petal2){
	if((petal1 % 2 == 0 && petal2 % 2 != 0) || (petal1 % 2 != 0 && petal2 % 2 == 0))
		return true;
	else
		return false;
}

let timmyPetal = 47;
let sarahPetal = 41;
console.log(isInLove(timmyPetal, sarahPetal));









