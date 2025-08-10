function reversedword(str) {
 return str
.split(' ') 
.map(word => word.split('').reverse().join(''))
 

}
console.log(reversedword("This is an example!"));