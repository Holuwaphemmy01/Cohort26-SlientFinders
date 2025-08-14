function studentNumber(studentScore){
let highest = studentScore[0]
for(let count = 1; count < studentScore.length; count++){
if(studentScore[count].score > highest.score) {
highest = studentScore[count]
}
}
return highest;
}
let Student = [{name: "Segun" , Score: 40} , {name: "Samson", Score: 60}, {name: "Titi", Score: 80}, {name:"Deborah", Score: 50,}]
console.log(studentNumber(Student))