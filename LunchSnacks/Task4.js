studentDetails = [{Name: "Onoja", Score: 72},{Name: "Seun", Score: 45},{Name: "Femi", Score: 80}]

let highest = studentDetails[0]

for (count = 0; count < studentDetails.length; count++){
for (let property in studentDetails[count]){

if (property === "Score" && property.studentDetails[count]) {

 highest = studentDetails[count]

console.log(`${property}: ${studentDetails[property]}`)

}

}
}