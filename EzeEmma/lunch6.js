/**
6. const colors = ["red", "green", "blue"];
use a loop to create an object where the keys are the colors and the values are the lengths of each color name.
**/

const colors = ["red", "green", "blue", "testing"];

let colorLength = [];

for (let loop = 0; loop < colors.length; loop++){
    colorLength[colors[loop]]  =  colors[loop].length
}

console.log(colorLength);

