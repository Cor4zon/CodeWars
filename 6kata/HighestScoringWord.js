const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function high(x){
  const words = x.split(' ');
  let maxSum = 0;
  let maxSumString = "";
  for (let i = 0; i < words.length; i++) {
    let curSum = 0;
    for (let j = 0; j < words[i].length; j++) {
      curSum += alphabet.indexOf(words[i][j]) + 1;
    }
    if (curSum > maxSum) {
      maxSum = curSum;
      maxSumString = words[i];
    }
  }
  return maxSumString;
}
