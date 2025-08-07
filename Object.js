let person = {firstname: 'feyi', lastname: 'Onoja', age: '92', Nationality: 'Togolese'};

for(let property in person){

	if (property === "age"){

console.log(`${property}: ${person[property]}`)
}
}	