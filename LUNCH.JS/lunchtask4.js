
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 },
  { name: "Ethan", score: 88 }
];


let topStudent = students[0];


for (let count = 1; count < students.length; count++) {
  if (students[count].score > topStudent.score) {
    topStudent = students[count];
  }
}


console.log("Top student:");
console.log(`Name: ${topStudent.name}, Score: ${topStudent.score}`);
