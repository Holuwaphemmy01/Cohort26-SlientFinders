function customerLoyaltyCheck(ArrayOfCustomers){
	let customersToBeRewarded = [];
	let counter = 0;
	for(let count = 0; count < ArrayOfCustomers.length; count++){
		for(const customersData in ArrayOfCustomers[count]){
			if (customersData == "satisfactionScore"){
				if (ArrayOfCustomers[count].satisfactionScore >= 80){
					customersToBeRewarded.push(ArrayOfCustomers[count]);						
				}
			}
		}
	}
	for (let element = 0; element < customersToBeRewarded.length; element++){
		for(let count = 0; count < customersToBeRewarded.length - 1; count++){
			if (customersToBeRewarded[element].satisfactionScore > customersToBeRewarded[count].satisfactionScore) {
				let temp = customersToBeRewarded[count].satisfactionScore;
				customersToBeRewarded[count].satisfactionScore = customersToBeRewarded[element].satisfactionScore		
				customersToBeRewarded[element].satisfactionScore = temp;
			}
		}
	}
	return customersToBeRewarded;
}

let galaCustomers = [{name: "feyi", satisfactionScore: 89}, {name: "Bustavo", satisfactionScore: 67}, {name: "Mike", satisfactionScore: 78}, {name: "Chiamie", satisfactionScore: 43}, {name: "Emmanuel", satisfactionScore: 96}, {name: "Eloka", satisfactionScore: 95}]
console.log(customerLoyaltyCheck(galaCustomers));











