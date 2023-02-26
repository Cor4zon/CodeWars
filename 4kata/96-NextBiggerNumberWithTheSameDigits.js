function nextBigger(n) {
  let stringNumber = String(n);
  let index1;
  let index2;
  let index = stringNumber.length - 1;
  for (let i = stringNumber.length - 2; i >= 0; i--) {
    if (stringNumber[i] < stringNumber[index]) {
      index2 = i;
      index1 = index;
      break;
    }
    if (stringNumber[i] === stringNumber[index]) {
      index = i;
    }
  }
  const arrayString = stringNumber.split('');
  let digit1 = arrayString[index1];
  let digit2 = arrayString[index2];
  arrayString[index1] = digit2;
  arrayString[index2] = digit1;
  return +arrayString.join('');
}
