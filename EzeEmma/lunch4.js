/**
4. Create an array of objects representing students (name and score). Use a loop to find the student with the highest score.
**/


let students= [
    {name: "Mimi Mia", score: 70},
    {name: "Monday friday", score: 80},
    {name: "Tuesday Wednessday", score: 40},
    {name: "Thursday Good", score: 75},
    {name: "Mr Abcde", score: 95},
    {name: "Test Moon", score: 95}
]



let highestScoringStudent = students[0];

for (let count = 1; count < students.length; count++) {
    if (students[count].score > highestScoringStudent.score) {
        highestScoringStudent = students[count];
    }
}

console.log(highestScoringStudent.name, highestScoringStudent.score);
