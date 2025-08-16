function productOfArray(arr){
   let product = 1;
     for(let counter = 0; counter < arr.length-1; counter++){
       product *= arr[counter];

  }

  return product;

 }

 console.log(productOfArray([2, 3, 4]));