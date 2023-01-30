// naive
function digitalRoot(n) {
  if (n / 10 < 1) {
    return n;
  } else {
    let newRoot = 0;
    while (n > 0) {
      newRoot += ( n % 10 );
      n = Math.floor(n / 10);
    }
    return digitalRoot(newRoot)
  }
}

// more optimal
