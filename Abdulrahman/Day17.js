function getRepeat(words){
let answer = '';
for(let count = 0; count < words.length; count++){
answer += words[count].repeat(2);
}
return answer;
}
let word ='Hello World'
console.log(getRepeat(word));
