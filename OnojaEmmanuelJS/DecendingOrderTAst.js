function descendingOrder(number) {
    let digits = String(number).split('');
    for (let index = 0; index < digits.length; index++) {
    	for (let count = 0; count < digits.length - 1; count++) {
            if (digits[count] < digits[count + 1]) {
            	let temp = digits[count];
            	digits[count] = digits[count + 1];
            	digits[count + 1] = temp;
                          }
        }
    }
    return parseInt(digits.join(''));
}

let number = 42145;
let result = descendingOrder(number)
console.log(result)





