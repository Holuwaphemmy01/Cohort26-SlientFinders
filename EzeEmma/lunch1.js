// Create an object Person with properties name, age, gender and city. Write a loop to print all key and values
let Person = {
    name: "Mimi Mia",
    age: 23,
    gender: "Female",
    city: "Lagos"
};

for (let keyValue in Person) {
    console.log(keyValue + ": " + Person[keyValue]);
}
