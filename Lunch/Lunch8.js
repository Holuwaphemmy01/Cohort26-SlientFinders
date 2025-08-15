function getUserThatAre18From(arrayOfUsers){
	let newArray = [];
	for(let eachUser = 0; eachUser < arrayOfUsers.length; eachUser++){
		for (const detail in arrayOfUsers[eachUser]){
			if (detail == "age"){
				if (arrayOfUsers[eachUser].age >= 18){
					newArray.push(arrayOfUsers[eachUser]);
				}
			}		
		}
	} return newArray;
}


const users = [{name: "Alice", age: 25}, {name: "Bob", age: 17}, {name: "Charlie", age: 30}];
console.log(getUserThatAre18From(users));