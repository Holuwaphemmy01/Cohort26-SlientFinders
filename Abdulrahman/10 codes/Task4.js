function getHighestStudentScore(studentScore){
let Highest = studentScore[0]
for(let count = 1; count < studentScore.length; count++){
	if(studentScore[count].score > Highest.score){
	Highest = studentScore[count];
}
}
 return Highest;
}

let studentfile = [{name: "Hunter", score: 67}, {name: "Mtee", score: 50}, {name: "ibrahim", score: 90}]
console.log(getHighestStudentScore(studentfile))