const users = [{name: "Alice", age: 25}, {name: "Bob", age: 17}, {name: "Charlie", age: 30}];
let newArray = [];
for(let count = 0; count < users.length; count++){
if(users[count].age >= 18){
newArray.push(users[count]);

}
}
console.log(newArray)