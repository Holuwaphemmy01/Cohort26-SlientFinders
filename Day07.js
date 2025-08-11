function reverse(string){
	let words = string.split('');
	let reversedWords = words.map(word =>{ 
		return word.split('').reverse().join('');});
	let reversedStr = reversedWords.join('');
			return reversedStr;
}
let input = "This is an example";
let reversedStr = reverse(input);
console.log(reverse("This is an example";);