let person = {
  name: "Peter",
  age: 30,
  gender: "Female",
  city: "Ibadan"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
