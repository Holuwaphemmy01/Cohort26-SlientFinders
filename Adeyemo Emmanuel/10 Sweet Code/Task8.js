function findTheOldest(data) {
let oldest = users[0];
for (let count = 0; count < data.length; count++) {
	if (users[count].Age > oldest.Age) {		
		oldest = users[count];
	}
}
return [oldest];
}

const users = [{Name: "Alice", Age: 25}, {Name: "Bob", Age: 17}, {Name: "Charlie", Age: 30}];

console.log(findTheOldest(users));