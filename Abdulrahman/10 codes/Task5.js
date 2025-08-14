function productoOfNumbers(array){
let product = 1;
for(let count = 1; count <= array.length; count++){
product = product * count

}
return product;
}

numbers = [1, 2, 3];
console.log(productoOfNumbers(numbers))