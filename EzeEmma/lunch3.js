/**
Write a program that takes an array of strings and returns a new array containing the length of each string
**/

function getStringLengths(strings) {
    let lengths = [];

    for (let count = 0; count < strings.length; count++) {
        lengths.push(strings[count].length);
    }

    return lengths;
}

let words = ["apple", "banana", "kiwi"];
console.log(getStringLengths(words)); 
