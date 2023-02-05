Array.prototype.numberOfOccurrences = function(element) {
  let counter = 0;
  for (let i of this) {
    if (i === element) {
      counter++;
    }
  }
  return counter;
}
