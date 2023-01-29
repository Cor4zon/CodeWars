function sumOfIntegersInString(s){
  let sum = 0;
  let currentNumber = "";
  for (let i = 0; i < s.length; i++) {
    if (+s[i] >= 0) {
      currentNumber += s[i]
    } else {
      if (currentNumber) {
        sum += +currentNumber;
        currentNumber = ""
      }
    }
  }
  if (currentNumber) {
    return sum + +currentNumber
  }
  return sum
}
