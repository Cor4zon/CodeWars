function nearestSq(n){
  const sqrt = Math.sqrt(n);
  if (sqrt * sqrt === n) {
    return n;
  }
  console.log(`sqrt: ${sqrt}`);
  const minimal = Math.floor(sqrt);
  const maximal = Math.ceil(sqrt);
  if (Math.abs(maximal * maximal - n) > Math.abs(minimal * minimal - n)) {
//     console.log(minimal);
    return minimal * minimal;
  }
  console.log(maximal);
  return maximal * maximal;
}
