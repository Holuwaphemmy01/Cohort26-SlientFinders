function customersScore(array){
let newArray = [];
let newArray1 = [];
for (let index = 0; index < array.length; index++){
	for (const customer in array[index]) {
		if (customer == "score"){
			if (array[index].score >= 80){
			newArray.push(array[index]);	
			}
		}
	}
}
return newArray;
}


let customerObject = [{name: "Daniel",  score: 40},
			       {name: "Moses",  score: 80},
			       {name: "Gord",  score: 90},
			       {name: "samii", score: 81},	
			       ]
console.log(customersScore(customerObject));