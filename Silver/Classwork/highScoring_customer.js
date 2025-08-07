function sorting_customers(customers){
	let sorted_customers = [];
	
	for(let countScores = 0; countScores < customers.length; countScores++){
		for(let sorting in customers[countScores]){
		if(sorting == "score"){
		if(customers[countScores].score >= 80 && customers[countScores].score <= 100){
		
		sorted_customers.push(customers[countScores]);
			}
		
		}
	}
	}	
	for(let rows = 0; rows < sorted_customers.length; rows++){
	for(let column = 0; column < sorted_customers.length - 1; column++){
		if(sorted_customers[rows].score > sorted_customers[column].score){
		let temp = sorted_customers[column].score;
		sorted_customers[column].score = sorted_customers[rows].score;
		sorted_customers[rows].score = temp;
		}
		}
		}
		return sorted_customers
}
	
	
		
	let scores = [{name: "silver", score: 90},
				{name: "sandy", score: 312},
				{name: "fendi", score: 89},
				{name: "nonso", score: 94},
				{name: "chi", score: 43}]
							
	console.log(sorting_customers(scores)); 