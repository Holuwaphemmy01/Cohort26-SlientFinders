function largest() {

const studentsScores = [
		  {name: "Tayo"	 , score: 80},
		  {name: "segun" , score: 75},
		  {name: "Abel"  , score: 65}
						];
	
	let Largest = studentsScores[0];

	for(let count = 0; count < studentsScores.length; count++){

	
	if (studentsScores[count].score[count]  > Largest){

	    Largest = studentsScores[count].score[count]

		}
	}

	return Largest;	    
}
	console.log("The largest number is: " + Largest());