function getStringLengths(strings) {
  return strings.map(str => str.length);
}

const inputStrings = ["apple", "banana", "cherry", "mango"];
const lengths = getStringLengths(inputStrings);
console.log(lengths);


