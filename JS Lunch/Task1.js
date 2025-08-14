const Person = {
  name: "John",
  age: 30,
  gender: "Male",
  city: "New York"
};

for (let key in Person) {
  console.log(key + ": " + Person[key]);
}