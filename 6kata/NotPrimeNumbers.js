const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function notPrimes(a,b){
  const result = [];
  for (let i = a; i < b; i++) {
    if (isPrime(i) === false) {
      let digits = String(i).split('');
      let flag = true;
      for (let i = 0; i < digits.length; i++) {
        if (isPrime(+digits[i])) {
          continue;
        }
        flag = false;
      }
      if (flag) {
        result.push(i);
      }
    }
  }
  return result;
}
