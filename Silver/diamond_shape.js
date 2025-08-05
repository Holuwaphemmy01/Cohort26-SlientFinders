function diamond_shape(number) {
  for(let index = 1; index <= number; index++) {
    let space = " ".repeat(number - index);
    let numbers = "";
    for (let j = 1; j <= index; j++) {
      numbers += j;
    }
    for (let j = index - 1; j >= 1; j--) {
      numbers += j;
    }
    console.log(space + numbers);
  }
  
 }
diamond_shape(5);