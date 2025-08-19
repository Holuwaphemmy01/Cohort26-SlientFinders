function reverse(n) {
let result = [];
for (let count = n; count >= 1; count--) {
result.push(count);
}
return result;
}
console.log(reverse(5));