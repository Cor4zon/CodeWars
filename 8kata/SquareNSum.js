function squareSum(numbers){
  return numbers.reduce((curSum, curNum) => curSum + curNum * curNum, 0);
}
