
let students = [
  { name: "basit", score: 85 },
  { name: "Fareed", score: 99 },
  { name: "samuel", score: 78 },
  { name: "Delight", score: 65 }
];

let bestStudent = students[0];

for (let count =1; count < students.length; count++) {
  if (students[count].score > bestStudent.score) {
    bestStudent = students[count]; 
  }
}

console.log("Name:", bestStudent.name);
console.log("Score:", bestStudent.score);

//create an array of objects representing students(name and score ). use a loop to
 //find the student with the highest score