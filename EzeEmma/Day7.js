function reverseWords(str) {
  var words = str.split(' ');
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversed = '';
    for (var j = word.length - 1; j >= 0; j--) {
      reversed += word[j];
    }
    result.push(reversed);
  }

  return result.join(' ');
}

console.log(reverseWords("This is an example!"));
