function zipWith(fn,a0,a1) {
  const resArr = [];
  for (let i = 0; i < a0.length && i < a1.length; i++) {
   resArr.push(fn(a0?.[i], a1?.[i]))
  }
  return resArr;
}
