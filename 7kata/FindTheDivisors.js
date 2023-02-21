function divisors(integer) {
  const divisors = [];
  for (let i = 2; i < integer / 2 + 1; i++ ) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length ? divisors : `${integer} is prime`;
};
