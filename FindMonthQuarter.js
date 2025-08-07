function getQuarter(month) {
  switch (true) {
    case month >= 1 && month <= 3:
      return "First Quarter";
    case month >= 4 && month <= 6:
      return "Second quarter";
    case month >= 7 && month <= 9:
      return "Third Quarter";
    case month >= 10 && month <= 12:
      return "Fourth Quarter";
    default:
      return "Invalid month";
  }
}

console.log(getQuarter(10));  
console.log(getQuarter(6)); 
console.log(getQuarter(8));
console.log(getQuarter(11)); 
console.log(getQuarter(13));
  