function productOfNumbers(number) {
    let product = 1;
    for (let count = 0; count < number.length; count++) {
        product *= number[count];     }
    return product;
}

let input = [1, 2, 3, 4, 5];
console.log(productOfNumbers(input)); // 120
