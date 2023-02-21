function oddOrEven(array) {
   return array.reduce((accum, curNum) => accum + curNum, 0) % 2 ? 'odd' : 'even';
}
