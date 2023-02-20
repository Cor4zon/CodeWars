function persistence(num) {
  let counter = 0;
   while (num >= 10) {
     const digits = String(num).split('');
     num = digits.reduce((accum, digit) => accum * digit,
   1)
     counter++;
    }
  return counter;
}
