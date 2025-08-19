function reverseWordstoString(array, digit) {
	

    .split(' ')                    // split string into words
    .map(word => word.split('').reverse(array,2).join(''))  // reverse each word
    .join(' ');                   // join words back into string*/
    
    return array;
}


let array = [2,3,4,5,6,7,9,8];
let digit = 3;
let result = toReverseAtParticularIndex(word, digit);
console.log(result);

