function findOutlier(integers){
  let firstOdd;
  let firstEven;
  let oddCounter = 0;
  let evenCounter = 0;

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      firstEven = integers[i];
      evenCounter++;
    } else {
      firstOdd = integers[i];
      oddCounter++;
    }

    if (oddCounter >= 2 && firstEven !== undefined) {
      return firstEven;
    }
    if (evenCounter >= 2 && firstOdd !== undefined) {
      return firstOdd;
    }
  }
}
