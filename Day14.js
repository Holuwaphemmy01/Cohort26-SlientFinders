function createPhoneNumber(numbers) {
  
  let digits = numbers.join("");

  
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));