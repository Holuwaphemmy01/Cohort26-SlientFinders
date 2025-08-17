function createPhoneNumber(numbersArray) {
  return "(" + numbersArray[0] + numbersArray[1] + numbersArray[2] + ") " +
         numbersArray[3] + numbersArray[4] + numbersArray[5] + "-" +
         numbersArray[6] + numbersArray[7] + numbersArray[8] + numbersArray[9];
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
