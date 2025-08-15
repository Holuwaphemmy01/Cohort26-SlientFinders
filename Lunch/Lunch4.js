function getStudentWithHighestScoreOf(arrayOfStudents){
	for(let element = 0; element < arrayOfStudents.length; element++){
		let highest = Math.max(arrayOfStudents[element].score);
		if (arrayOfStudents[element].score === highest)
			return arrayOfStudents[element];
	
	}
	
}

let students = [{name: "feyi", score: 98}, {name: "joy", score: 78}, {name: "obi", score: 48}, {name: "feyi", score: 75}]

console.log(getStudentWithHighestScoreOf(students));







