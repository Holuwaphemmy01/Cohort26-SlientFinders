function resultCalculator(results){

let calculator = []

for(let resultCount = 0; resultCount < results.length; resultCount++){

	for(let resultList in results[resultCount]){

		if (resultList === "score"){

		if (results[resultCount].score >= 80){

			calculator.push(results[resultCount])

}

}
		
}


}

return calculator;
}

let survey = [{Name: "Mike", score: 89}, {Name: "Harry", score: 80}, {Name: "Maka", score: 85}, {Name: "Kemi", score: 50}, {Name: "shade", score: 78}];

console.log(resultCalculator(survey))