function incrementString (strng) {
  let num = '';
  let firstPartString = '';
  for (let i = strng.length - 1; i >= 0; i--) {
    if (strng[i] <= '9' && strng[i] >= '0') {
      num += strng[i];
    } else {
      firstPartString = strng.slice(0, i);
      break;
    }
  }
  num = Array.from(num).reverse().join();
  let zeroCounter = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '0') {
      zeroCounter++;
    }
  }
  return +num ? firstPartString + '0' * zeroCounter + (+num + 1) : (firstPartString + '0' * zeroCounter) +  '1';
}
