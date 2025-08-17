function duplicateCount(text) {
  let lowerCaseText = text.toLowerCase();
  let frequencyMap = {};
  let duplicateCounter = 0;

  for (let position = 0; position < lowerCaseText.length; position++) {
    let currentCharacter = lowerCaseText[position];
    frequencyMap[currentCharacter] = (frequencyMap[currentCharacter] || 0) + 1;
  }

  for (let character in frequencyMap) {
    if (frequencyMap[character] > 1) {
      duplicateCounter++;
    }
  }

  return duplicateCounter;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("a11BAcb"));
