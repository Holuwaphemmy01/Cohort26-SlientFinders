const users = [ 
{name: "Alice", age: 25}, 
{name:"Bob", age: 17}, 
{name:"Charlie", age: 30} 
]; 

const adults = [];

for (let ages = 0; ages < users.length; ages++){
	if (users[ages].age >= 18){
		adults.push(users[ages]);
	}
}

console.log(adults);