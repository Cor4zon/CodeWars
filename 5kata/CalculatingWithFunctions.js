function zero(op) {
    return op ? Math.floor(eval(0 + op)) : '0'
  }
  function one(op) {
      return op ? Math.floor(eval(1 + op)) : '1'
  }
  function two(op) {
    return op ? Math.floor(eval(2 + op)) : '2'
  }
  function three(op) {
    return op ? Math.floor(eval(3 + op)) : '3'
  }
  function four(op) {
    return op ? Math.floor(eval(4 + op)) : '4'
  }
  function five(op) {
    return op ? Math.floor(eval(5 + op)) : '5'
  }
  function six(op) {
    return op ? Math.floor(eval(6 + op)) : '6'
  }
  function seven(op) {
    return op ? Math.floor(eval(7 + op)) : '7'
  }
  function eight(op) {
    return op ? Math.floor(eval(8 + op)) : '8'
  }
  function nine(op) {
      return op ? Math.floor(eval(9 + op)) : '9'
  }
  
  function plus(num) {
    return '+' + num;
  }
  function minus(num) {
    return '-' + num;
  }
  function times(num) {
    return '*' + num;
  }
  function dividedBy(num) {
    return '/' + num;
  }

// console.log(nine(plus(one())));
console.log(nine(times(zero())));
// console.log(plus(one()));


