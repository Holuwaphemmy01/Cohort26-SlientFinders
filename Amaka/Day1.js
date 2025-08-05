function diamond1 (){
	for (let row = 1; row <= 5; row++){
		let line = "";
		for(let space = 0; space < 5 - row; space++){
		line += " ";
		}
		for(let column = 1; column <= row; column++) {
			line += column;
		}
		for(let j = row - 1; j >= 1; j--){
			line += j;
		}
		console.log(" " + line);
	}
}

function diamond2 (){
	for (let row = 4; row >= 1; row--){
		let line = "";
		for(let space = 5 - row; space > 0; space--){
		line += " ";
		}
		for(let column = 1; column <= row; column++) {
			line += column;
		}
		for(let j = row - 1; j >= 1; j--){
			line += j;
		}
		console.log(" " + line);
	}
}


function diamond1Anddiamond2(){
	diamond1();
	diamond2();
}



diamond1Anddiamond2();	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	