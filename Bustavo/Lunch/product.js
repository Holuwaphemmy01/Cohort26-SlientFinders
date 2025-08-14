const product = (array) => {return array.reduce((accumulator, element) => element * accumulator)}
array = [2,3,4]
console.log(product(array))