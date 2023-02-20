const DIGITS = '123456789'

const isDigit = (symbol) => {
  return DIGITS.includes(symbol);
};

const getDigitFromString = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (isDigit(string[i])) {
      return +string[i];
    }
  }
  return null;
}

function order(words){
  let wordsArray = words.split(' ');
  wordsArray = wordsArray.sort((a, b) => {
    if (getDigitFromString(a) > getDigitFromString(b)) {
      return 1;
    } else {
      return -1;
    }
  })
  return wordsArray.join(' ');
}
