var isPP = function (n) {
  for (i = 0; i < n / 2; i++) {
    for (j = 0; j < n / 2; j++) {
        const result = Math.pow(i, j);
        if (result > n) {
            break;
        }
        if (result === n) {
            return [i, j];
        }
    }
  }
  return null;
};
