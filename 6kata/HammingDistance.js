function hamming(a,b) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      counter++;
    }
  }
  return counter;
}
