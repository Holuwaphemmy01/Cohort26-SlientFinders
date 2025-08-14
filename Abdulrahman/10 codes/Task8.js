const users = [{name: "Alice", age: 25}, {name: "Bob", age: 17}, {name: "Charlie", age: 30}];
for(let count = 1; count < users.length; count++){
if(users[count].age > 18){
console.log(users[count])
}
}