function multiplyArrayNumbers(Array) {

let product = 1;

for (let num = 0; num < Array.length; num++) {

product *= Array[num]
 
}
    return product

}

let theArray = [2, 3, 4, 6]
console.log(multiplyArrayNumbers(theArray))