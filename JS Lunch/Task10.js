function seperateEvenOdd(numbers){
const result = {
    even: [],
    odd: []
  };

for (let number = 0; number < numbers.length; number++){
	const num = numbers[number];
	if (num % 2 == 0){
		result.even.push(num);
	}
	else {
		result.odd.push(num);
	}
}

return result;

}
console.log(seperateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))