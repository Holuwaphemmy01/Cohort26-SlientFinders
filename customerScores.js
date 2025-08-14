 function customerScores(scores) {
 	let highScoringCustomers = []
 	
 	for( let count = 0; count < scores.length; count++) {
 	 for ( let customerScore in scores[count]) {
 	 	if (customerScore == "Score") {
 	 		if(scores[count].Score >= 80) {
 	 			highScoringCustomers.push(scores[count]);
 	 		}
 	 	}
 	 }
 }
 highScoringCustomers.sort((a, b) => b.Score - a.Score);
 return highScoringCustomers;
}

let allCustomerScores = [{ Name: "Feyi", Score: 70}, { Name: "Tumelo" , Score: 10}, { Name: "Adam",  Score: 70} ,{Name: "Chiamie", Score: 80}]
console.log(customerScores(allCustomerScores));