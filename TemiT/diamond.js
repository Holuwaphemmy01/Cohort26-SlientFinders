// declare variable height to a value
// Set height to value odd number
// Upper half including middle
 // Add leading spaces
  // Add ascending numbers
  // Add descending numbers

// Lower half
 // Add leading spaces
 // Add ascending numbers
   // Add descending numbers

let height = 9;
height = height % 2 === 0 ? height + 1 : height;
const half = Math.floor(height / 2);

for (let i = 0; i <= half; i++) {
    let row = '';
   for (let j = 0; j < half - i; j++) {
        row += '  ';}
    for (let j = 1; j <= i + 1; j++) {
        row += j;}
    for (let j = i; j >= 1; j--) {
        row += j;}
    
    console.log(row);
}


for (let i = half - 1; i >= 0; i--) {
    let row = '';
   for (let j = 0; j < half - i; j++) {
        row += '  ';}
    for (let j = 1; j <= i + 1; j++) {
        row += j;}
    for (let j = i; j >= 1; j--) {
        row += j;}
    
    console.log(row);
}