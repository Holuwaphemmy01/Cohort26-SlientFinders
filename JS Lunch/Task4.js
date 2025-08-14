function getStudentWithHighestScore(students){
	let highestScore = 0;
	let highestStudent = null;

	for (let list = 0; list <= students.length; list++){
		if (students[list].score > highestScore){
			highestScore = students[list].score;
			highestStudent = student[list];
		}
	}
	return highestStudent;

}

let studentRecords = [
	{name: "Bob", score: 92},
	{name: "Daski", score: 99},
	{name: "Solomon", score: 89},
	{name: "Yusuf", score: 93}
];

let bestStudent = getStudentWithHighestScore(studentRecords);
console.log("Name: ", bestStudent.name);
console.log("Score: ", bestStudent.score);