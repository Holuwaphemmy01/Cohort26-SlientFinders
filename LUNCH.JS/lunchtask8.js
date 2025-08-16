const users = [
   {name: "Alice",age:18},
   {name: "Victor",age:25},
   {name: "Dvide",age:30},
   ];

  const adults = [];

for (let counter = 0; counter < users.length; counter++) {
  if (users[counter].age >= 18) {
    adults.push(users[counter]);
  }
}

console.log(adults);