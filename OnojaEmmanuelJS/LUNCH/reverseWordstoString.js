function reverseWordstoString(word) {
	word.split(' ');
	word.map((.reverse()).split().join(" "))

  /*return str
    .split(' ')                    // split string into words
    .map(word => word.split('').reverse(word).join(''))  // reverse each word
    .join(' ');                   // join words back into string*/
    
    return word;
}


let word = "This is an example!";
let result = reverseWordstoString(word)
console.log(result);
// Output: "sihT si na !elpmaxe"
