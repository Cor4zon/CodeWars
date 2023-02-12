var maxSequence = function(arr){
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const subArray = arr.slice(i, j+1);
      const curSum = subArray.reduce((curElement, curSum) => curSum + curElement, 0);
      if (curSum > maxSum) {
        maxSum = curSum;
      }
    }
  }
  if (maxSum === -Infinity) {
    return +0;
  }
  return maxSum;
}
