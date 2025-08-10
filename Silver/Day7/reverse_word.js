function reverse_string(strings){
let word_split = strings.split(" ")
let reversed_word = []
for(let index = 0; index < word_split.length; index++){
let index_holder = word_split[index]
let word = index_holder.split("").reverse().join("")
reversed_word.push(word)
}
return reversed_word
}
let words = 'This is an example'
console.log(reverse_string(words))