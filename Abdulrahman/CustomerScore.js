function collectSurvey(arrayOfNumber){
let newArray = [];
for(let count = 0; count < arrayOfNumber.length; count++){
	
	let number =  arrayOfNumber[count]
			
		if (number.score >= 80 && number.score <= 100){
			newArray.push(number)
			newArray.sort((a, b) =>b.score  - a.score );
				}
			
		}
return newArray
}




list = [{name:"hunter", score:80}, {name:"ibrahim", score:30}, {name:"memunat", score:90}]
console.log(collectSurvey(list))		