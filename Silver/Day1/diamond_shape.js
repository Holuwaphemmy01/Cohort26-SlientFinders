let number = 5;
for(let row = 1; row <= number; row++) {
let line = '';
line += ' '.repeat(number - row)
for(let increasing_count = 1; increasing_count <= row; increasing_count++){
line += increasing_count;}
for(let decreasing_count = row - 1; decreasing_count >= 1; decreasing_count--){
line += decreasing_count;} 
console.log(line);
}


for(let row = 1; row <= 4; row++){
let space = '';
space += ' '.repeat(0 + row);
for(let increasing_count = 1; increasing_count <= number - row; increasing_count++){
space += increasing_count;}
for(let decreasing_count = 4 - row; decreasing_count >= 1; decreasing_count--){
space += decreasing_count;}
console.log(space);
} 