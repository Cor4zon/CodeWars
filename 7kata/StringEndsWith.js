function solution(str, ending){
  if (!ending) {
    return true;
  }
  return str.slice(-ending.length) === ending;
}

// smartest
function solution(str, ending){
  return str.endsWith(ending);
}
