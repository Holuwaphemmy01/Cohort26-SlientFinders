function loveCalculator(firsttotalPetal,secondtotalpetal){
		firsttotalPetal = Math.trunc(Math.random() * 50) + 1
		secondtotalpetal = Math.trunc(Math.random() * 50 )+ 1
		console.log(firsttotalPetal ,secondtotalpetal)
	
		if(firsttotalPetal % 2 == 0 && secondtotalpetal % 2 == 1) {return true}
		else if(firsttotalPetal % 2 == 1 && secondtotalpetal % 2 == 0) {return true}
		else {return false}

	}

	console.log(loveCalculator())