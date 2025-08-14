function restrict(age){
const minimum = 10
if(age >= minimum){
console.log("Welcom to the show!")
}
else{
console.log("Sorry, you're too young!")

}
return age
}


const prompt = require('prompt-sync')();

let ageEligibility = prompt("Enter age:> ")
console.log(restrict(ageEligibility))