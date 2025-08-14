function getEven(array){
  let sum = 0;
  for (let count = 0; count < array.length; count++) {
    if (array[count] % 2 === 0) {
      sum += array[count];
    }
  }
  return sum;
}


const number = [22,45,55,6,1,33,0]
console.log(getEven(number));

//given a n array of numbers, write a function that
//sum all the even number in array in javascript