function repeatWord(words){
let space = ""
for(let count = 0; count <= 1; count++) {
	space += words[count].repeat(2);
}
}

let name = "Hello World";

console.log(repeatWord(name));