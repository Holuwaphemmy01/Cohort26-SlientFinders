const users = [
	{name: "Alice", age: 25},
	{name: "Bob", age: 17},
	{name: "Charlie", age: 30}
	];
for(let user in users) {
	if("age" >= 18)
		console.log(`${user}: {users[user]}`);
	}
