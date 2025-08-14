function getProduct(array){
let multiply = 1;
  for (let count = 0; count < array.length; count++) {
      multiply *= array[count];
    }
  
  return multiply;
}

const number = [2,4,6]
let result = getProduct(number);
console.log(result);

