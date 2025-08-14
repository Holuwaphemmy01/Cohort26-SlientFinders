function personalDetails(details){
let newArray = [];
for (const properties in details){
console.log(`${properties}: ${details[properties]}`);
}
return newArray
}


let personDetails= {name: "sam" , Age: 50 , Gender: "Male" , City: "Anambra"};
console.log(personalDetails(personDetails))















/**const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}*/