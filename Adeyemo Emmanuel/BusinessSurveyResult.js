function businessSurveyResult(arrayOfResults) {
	let newArray = [];

	for (let count = 0;  count < arrayOfResults.length; count++) {
		for (let result in arrayOfResults[count]) {
			if (result === "score") {
				if (arrayOfResults[count].score >= 80) {
					newArray.push(arrayOfResults[count]);
				}
			
			}
		}
	}
	for (rows = 0; rows <  newArray.length; rows++) {
        
		for (column = 0; column < newArray.length - 1; column++) {
			if (newArray[rows].score > newArray[column].score) {
 				let temp = newArray[column].score;
				newArray[column].score = newArray[rows].score;
				newArray[rows].score = temp;

			}
		}
	}
return newArray;
}



let customerScore = [{name: "Peter", score: 100}, {name: "Ikka", score: 80}, {name: "Makaveli", score: 90},
{name: "Malik", score: 98},{name: "Ramon", score: 83}, {name: "Lakiki", score: 76}, {name: "Emma", score: 70}, {name: "Tope", score: 66}];

console.log(businessSurveyResult(customerScore));