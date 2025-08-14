let students = [{name: "Sam", score: 65},
		{name: "Paul", score: 70},
		{name: "Martin", score: 73},
		{name: "Anita", score: 79},
		{name: "Binta", score: 81},
		]

let highestScore = students[0]

for(let index = 1; index < students.length; index++){
	if(students[index].score > highestScore.score) {
		highestScore = students[index];
	}

	}
console.log(`Top of the class: ${highestScore.name} and score ${highestScore.score}`);
