/**
8. const users = [
{name: "Alice", age: 25},
{name: "Alice", age: 25},
{name: "Alice", age: 25},
]; 
use a loop to return a new array containing only users who are 18 or older.
**/


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

let adults = [];
for (let count = 0; count < users.length; count++) {
    if (users[count].age >= 18) {
        adults.push(users[count]);
    }
}
console.log(adults);