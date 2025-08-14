function getLength(array) {
  let length = [];

  for (let count = 0; count < array.length; count++) {
    length.push(array[count].length);
  }

  return length;
}
let words = ["paul","sodiq", "chiamaka","fareed", "basit", "delight", "samuel","silver","actorho","eloka","feyi","adam"];
let result = getLength(words);
console.log(result);

//write a program that takes an array of strings and returns
//a new array containing the lenght of each string 
