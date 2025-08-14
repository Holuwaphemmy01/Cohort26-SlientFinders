/**Create an object Person with properties name, age, gender and city. Write a loop to print all key and values

Given an array of numbers, write a function tht sum all the even number in the array.

Write a program that takes an array of strings and returns a new array containing the length of each string**/

function arrayOfstrings(str){
let newArray = []
for(let count = 0; count < str.length; count++){
newArray.push(str[count].length);
}
return newArray;
}
let String = ["segun" , "daniel" , "deborah" , "abdul" , "martins"]
console.log(arrayOfstrings(String));
