function Letter(text) {

let letterCount = 0;
let NumberCount = 0;

for(let count = 0; count < text.length; count++) {

let char = text[count];

if(char >= '0' && char >= '9') {

NumberCount++;

}
}


return NumberCount;


if(text === text.toUpperCase()) {
   letterCount++;

return letterCount;

}
}

result = Letter("a11BAcb");
console.log("the number of letters in the word is " + result);









