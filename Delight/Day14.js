function createPhoneNumber(numbers) {
  // Ensure the array has exactly 10 digits
  if (numbers.length !== 10) {
    return "Invalid input";
  }

  let areaCode = numbers.slice(0, 3).join('');
  let centralOfficeCode = numbers.slice(3, 6).join('');
  let lineNumber = numbers.slice(6, 10).join('');

  return "(" + areaCode + ") " + centralOfficeCode + "-" + lineNumber;
}


console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));