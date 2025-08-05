let number = 5;
for(let i = 1; i <= number; i++) {
let line = '     ';
line += ' '.repeat(number - i)
for(let j = 1; j <= i; j++){
line += j;}
for(let k = i - 1; k >= 1; k--){
line += k;} 
console.log(line);
}
for(let i = 1; i <= 4; i++){
let space = '     ';
space += ' '.repeat(0 + i);
for(let j = 1; j <= number - i; j++){
space += j;}
//console.log(space)
for(let k = 4 - i; k >= 1; k--){
space += k;}
console.log(space);
} 