function getHighestScore(students) {
let largest = student[0];
for (let count = 1; count < students.length; count++) {
	if (student[count].score > largest.score) {
		largest = student[count] 
		}	
	}
return largest
}

let student = [{Name: "Titilayo", score: 34}, {Name: "Bayo", score: 45}, {Name: "Kola", score: 598}, {Name: "Alice", score: 88}, {Name: "Bob", score: 233}, {Name: "Charlie", score: 100}];

console.log(getHighestScore(student))