const prompt = require('prompt-sync')()
function solution(n) {
    let result = [];
    for (let num = n; num >= 1; num--) {
        result.push(num);
    }
    return result;
}

let input = (prompt("Enter a positive integer:"));
console.log(solution(input));