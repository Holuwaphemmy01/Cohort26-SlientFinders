function capitalizationPermutations(str) {
let results = [];

(function helper(current, index) {
if (index === str.length) {
results.push(current);
return;
}

let char = str[index];
if (/[a-zA-Z]/.test(char)) {
helper(current + char.toLowerCase(), index + 1);
helper(current + char.toUpperCase(), index + 1);
} else {
helper(current + char, index + 1);
}
})("", 0);

return results;
}


console.log(capitalizationPermutations("abc"));