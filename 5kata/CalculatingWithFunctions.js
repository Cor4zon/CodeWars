function zero() {
    return '0'
  }
  function one(op) {
      return '1' + op ? op() : ''
  }
  function two() {
      return '2'
  }
  function three() {
      return '3'
  }
  function four() {
      return '4'
  }
  function five() {
      return '5'
  }
  function six() {
      return '6'
  }
  function seven() {
      return '7'
  }
  function eight() {
      return '8'
  }
  function nine(op) {
      return '9' + op ? op() : ''
  }
  
  function plus(num) {
    return '+'
  }
  function minus() {}
  function times() {}
  function dividedBy() {}

  eval(nine(plus(one())))