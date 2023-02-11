function computeDepth (x){
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let counter = 0;
  let mulResult;

  while (digits.length) {
    counter += 1;
    mulResult = x * counter;
    String(mulResult).split('').forEach(digit => {
      if (digits.includes(+digit)) {
        digits.splice(digits.indexOf(+digit), 1);
      }
    });
  }

  return counter;
}
