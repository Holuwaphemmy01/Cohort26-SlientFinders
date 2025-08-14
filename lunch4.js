let theStudents = [
  { name: 'Tosin', score: 90 },
  { name: 'Tayo', score: 85 },
  { name: 'Tope', score: 88 },
 
]

let highestScore = theStudents[0]

for (let score = 1; score < theStudents.length; score++) {

if (theStudents[score].score > highestScore.score) {

highestScore = students[score]
}

}

console.log(The highest  is {highestScore.name} with {highestScore.score}.);