function getBug(array) {
let new_Array  =  [ ]
  for (let countbug = 0; countbug < array.length; countbug++) {
  	if  (array[countbug]  >= 1  && array[countbug] <  6 ) {
  	new_Array.push(array[countbug]);
   
  }

}
return new_Array;
}
counterbug = [0, 1, 2, 3, 4, 5, 6]
console.log(getBug(counterbug));



















