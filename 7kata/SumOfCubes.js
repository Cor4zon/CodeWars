function sumCubes(n){
  if (n === 1) {
    return 1;
  }
  return n * n * n + sumCubes(n - 1);
}
