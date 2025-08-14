function getStringLength(strings){

let theirLength = []

for (let theWords  = 0; theWords < strings.length; theWords++) {

let count = 0

let counted = strings[theWords]

for (let word in counted) {
   
count++;         
}

theirLength.push(count)

}

return theirLength
}

let theMain = ["Tosin", "Tayo", "Tope"]
console.log(getStringLength(theMain))
