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



let customerScore = [{name: "Peter", score: 90}, {name: "Ikka", score: 99}, {name: "Makaveli", score: 100},
{name: "Malik", score: 98},{name: "Ramon", score: 83}, {name: "Lakiki", score: 76}, {name: "Emma", score: 70}, {name: "Tope", score: 66}, {name: "Tipe", score: 86}, {name: "tunde", score: 96}, {name: "Titi", score: 86}, {name: "bape", score: 96}, {name: "basit", score: 66}, {name: "Tayo", score: 86}, {name: "babatunde", score: 84}, {name: "Trevor", score: 90}];

console.log(businessSurveyResult(customerScore));







			n	n


