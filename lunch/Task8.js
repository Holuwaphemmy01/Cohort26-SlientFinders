const users = [
           {name: "Alice", age: 25},
          {name: "Bob", age: 17},
          {name: "Charlie", age: 25},
           ];
          const Elders = [];
for (let count = 0; count < users.length; count++) {
  if (users[count].age >= 18) {
 Elders.push(users[count]);
}
}
console.log(Elders);
 //use a loop  to return a new array containing only users who are 18 or older